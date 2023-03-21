# Linux

## 配置

### 基本配置

#### 权限配置

```bash
su root
apt install sudo 
apt install vim
apt install ssh

vim /etc/sudoers  #在 /etc/sudoers 文件添加一行内容
> 
wlg   ALL=(ALL) ALL
>

su wlg

```

#### 修改主机名

```bash
hostnamectl  #查看主机名

hostnamectl set-hostname [txy]  #设置主机名
vim /etc/host  #修改配置
>
127.0.0.1 localhost.localdomain [txy]
>
```

#### 修改语言

```bash
sudo dpkg-reconfigure locales  #添加中文编码 zh-utf-8 ，工具为添加字符支持

sudo vim /etc/default/locale  #修改配置文件
>
LANG="en_US.UTF-8"
LANGUAGE="en_US:en"
>
// 将linux的HOME目录下的中文文件夹名称改为英文
export LANG=en_US
xdg-user-dirs-gtk-update
```

#### 配置IP

```bash
ip addr  #查看网卡信息

sudo vim /etc/network/interfaces  #编辑网络配置文件
>
auto eth0  #网卡名称
# iface eth0 inet dhcp # 注释上面默认配置的DHCP设置,改为下面这个static
iface eth0 inet static 
address 192.168.1.103 # IP 地址
netmask 255.255.255.0 # 子网掩码
gateway 192.168.1.1 # 网关
>

sudo vim /etc/resolvconf/resolv.conf.d/base  #修改DNS
>
nameserver = 114.114.114.114 //DNS1
nameserver = 8.8.8.8  //DNS2
>

sudo resolvconf -u  #更新 resolv.conf 文件
#重启服务
sudo /etc/init.d/networking restart || sudo systemctl restart networking.service

#有线实例
sudo vim /etc/network/interfaces

>
auto eth0 #开机自动连接网络
iface lo inet loopback
allow-hotplug eth0
iface eth0 inet static #static表示使用固定ip，dhcp表述使用动态ip
address 10.10.10.155 #设置ip地址
netmask 255.255.255.0 #设置子网掩码
gateway 10.10.10.2 #设置网关

broadcase 10.10.10.255#设置广播地址（也可以不写）
>

sudo vim /etc/resolv.conf

>
nameserver 10.10.10.2 #设置首选dns
nameserver 114.114.114.114 #设置备用dns
>

# wifi 实例
sudo vim /etc/network/interfaces

>
auto wlp4s0
iface wlan0 inet static
address 192.168.5.155
netmask 255.255.255.0
gateway 192.168.5.1
pre-up ip link set wlan0 up
pre-up iwconfig wlan0 essid ssid
wpa-ssid wz
wpa-psk wz888888
>

# 安装无线网卡
sudo apt install firmware-iwlwifi
su root
modprobe -r iwlwifi
modprobe iwlwifi

```

### OMV6安装
```bash
su root
cat <<EOF >> /etc/apt/sources.list.d/openmediavault.list
deb http://packages.openmediavault.org/public shaitan main
# deb http://downloads.sourceforge.net/project/openmediavault/packages shaitan main
## Uncomment the following line to add software from the proposed repository.
# deb http://packages.openmediavault.org/public shaitan-proposed main
# deb http://downloads.sourceforge.net/project/openmediavault/packages shaitan-proposed main
## This software is not part of OpenMediaVault, but is offered by third-party
## developers as a service to OpenMediaVault users.
# deb http://packages.openmediavault.org/public shaitan partner
# deb http://downloads.sourceforge.net/project/openmediavault/packages shaitan partner
EOF

export LANG=C.UTF-8
export DEBIAN_FRONTEND=noninteractive
export APT_LISTCHANGES_FRONTEND=none
apt-get install --yes gnupg
wget -O "/etc/apt/trusted.gpg.d/openmediavault-archive-keyring.asc" https://packages.openmediavault.org/public/archive.key
apt-key add "/etc/apt/trusted.gpg.d/openmediavault-archive-keyring.asc"
apt-get update
apt-get --yes --auto-remove --show-upgraded \
    --allow-downgrades --allow-change-held-packages \
    --no-install-recommends \
    --option DPkg::Options::="--force-confdef" \
    --option DPkg::Options::="--force-confold" \
    install openmediavault-keyring openmediavault

export PATH=/usr/sbin:$PATH

# Populate the database.
omv-confdbadm populate

# Display the login information.
cat /etc/issue


#安装omv-extras-plugins
wget -O - https://github.com/OpenMediaVault-Plugin-Developers/packages/raw/master/install | bash
```

### 命令行代理
```aidl
export http_proxy=http://192.168.5.101:7890
export https_proxy=http://192.168.5.101:7890
```

export http_proxy=socks5://192.168.5.101:7890
export https_proxy=$http_proxy

#### SWAP 分区

- 添加SWAP分区

```
# 查看当前 SWAP 情况
free -m
# 创建 SWAP 文件**，设置大小，这里我设置为 8G。（bs * count = SWAP 大小）
sudo dd if=/dev/zero of=/var/swap bs=10M count=1024
# 设置文件权限
sudo chmod 600 /var/swap 
# 创建 SWAP
sudo mkswap /var/swap
# 启用
sudo swapon /var/swap
# 查看 SWAP 状态
   swapon -s | free -m
# 添加开机启动,在 /etc/fstab 中添加一行 /var/swap swap swap default 0 0
echo '/var/swap swap swap default 0 0' >> /etc/fstab
```

- 删除SWAP分区

  ```
  # 首先要停用
  swapoff /var/swap
  # 然后再删除
  rm -rf /var/swap
  # 最后去掉开机启动
  sed -i '/\/var\/swap swap swap default 0 0/d' /etc/fstab
  ```

  SWAP 文件大小的设置，当然并不是设置的虚拟内存越大就越好，按需要设置，最大不要超过物理内存的 2 倍。
  物理内存 ≤ 1G 时，设置 SWAP 为内存的 2 倍大小；8G ＞ 物理内存 ＞ 1G 时，设置 SWAP 为内存的 1.5 倍大小



#### 时间与Win同步设置

~~~bash
```bash
# 第一种方法，linux 禁用UTC，禁用UTC，使用本地时间，使用systemd启动之后，时间改成了由timedatectl来管理，重启完成将硬件时间UTC改为CST，双系统时间保持一致
  timedatectl set-local-rtc 1 --adjust-system-clock 

# linux 启用UTC
timedatectl set-local-rtc 0

# 第二种方法，windows启用UTC，即让 Windows把硬件时间当作UTC
Reg add HKLM\SYSTEM\CurrentControlSet\Control\TimeZoneInformation /v RealTimeIsUniversal /t REG_DWORD /d 1
~~~

#### 软件源

```bash
sudo cp /etc/apt/sources.list /etc/apt/sources-20200104.list  #备份
sudo vim /etc/apt/sources.list  #打开配置文件，替换里面所有内容为下面这些内容

>
# 163 源：http://mirrors.163.com/.help/debian.html
# 阿里源：http://mirrors.aliyun.com/help/debian
# sohu：http://mirrors.sohu.com/help/debian.html
deb http://mirrors.163.com/debian/ buster main non-free contrib
deb-src http://mirrors.163.com/debian/ buster main non-free contrib
deb http://mirrors.163.com/debian-security buster/updates main
deb-src http://mirrors.163.com/debian-security buster/updates main
deb http://mirrors.163.com/debian/ buster-updates main non-free contrib
deb-src http://mirrors.163.com/debian/ buster-updates main non-free contrib
deb http://mirrors.163.com/debian/ buster-backports main non-free contrib
deb-src http://mirrors.163.com/debian/ buster-backports main non-free contrib
>

sudo apt clean all 
sudo apt update
sudo apt upgrade
sudo apt dist-upgrade
```

#### 系统备份

```bash
# 编辑备份脚本
echo '
#!/bin/bash
sudo tar -cvpzf /media/zhanjzh/zhanjzh/ubuntu_backup@`date +%Y-%m+%d`.tar.gz --exclude=/proc --exclude=/tmp --exclude=/boot --exclude=/home --exclude=/lost+found --exclude=/media --exclude=/mnt --exclude=/run /
sudo tar -cvpzf /media/zhanjzh/zhanjzh/ubuntu_boot_backup@`date +%Y-%m-%d`.tar.gz /boot
sudo tar -cvpzf /media/zhanjzh/zhanjzh/ubuntu_home_backup@`date +%Y-%m-%d`.tar.gz /home
' >> backup.sh
```

## 服务

### Aria2

#### 解决aria2下载磁力链接或bt文件时没有速度或速度为0
使用aria2下载[磁力链接](https://so.csdn.net/so/search?q=%E7%A3%81%E5%8A%9B%E9%93%BE%E6%8E%A5&spm=1001.2101.3001.7020)和种子时，发现长时间都没有速度，因为默认的配置是没有加tracker列表的，就像迅雷没有p2p共享一样，所以要在配置文件中加入trackers，速度就会提上来，这个tracker地址会改变，因此每次要手动或自动更新下配置文件的tracker。

1、提供[tracker](https://so.csdn.net/so/search?q=tracker&spm=1001.2101.3001.7020)更新的的项目  
https://[github](https://so.csdn.net/so/search?q=github&spm=1001.2101.3001.7020).com/ngosang/trackerslist 这个是github上的  
https://github.com/ngosang/trackerslist 同样github  
https://trackerslist.com 这个是个独立项目也提供更新，如果github访问慢可以使用这个  
一般只需要将上面两个项目提供的trackers\_best.txt文件的地址配置到aria2.conf的bt-tracker=的后面就可以加速，如果速度还是没有，也可将trackers\_all.txt添加到bt-tracker=后面  
2、上面的方法需要复制trackers\_best.txt中的地址到aria2.conf配置文件 中，这边提供一个脚本来自动执行，新建文件updateTracker.sh，将下面内复制进去，chmod +x updateTracker.sh增加执行权限，./updateTracker.sh地址就配置成功了，重启aria2，就可以下载了

```powershell
#!/bin/bash
list=`wget -qO- https://trackerslist.com/all.txt|awk NF|sed ":a;N;s/\n/,/g;ta"`
if [ -z "`grep "bt-tracker" /home/local/aria2-1.35.0/config/aria2.conf`" ]; then
    sed -i '$a bt-tracker='${list} /home/local/aria2-1.35.0/config/aria2.conf
    echo add......
else
    sed -i "s@bt-tracker=.*@bt-tracker=$list@g" /home/local/aria2-1.35.0/config/aria2.conf
    echo update......
fi
```

/home/local/aria2-1.35.0/config/aria2.conf是我的配置文件目录，需要换成你自己的目录。https://trackerslist.com/all.txt这个是tracker更新的地址，一般是按天更新。可以将脚本配置成一天执行一次来自动更新

### mySql
```shell
apt update
apt install mariadb-server

#修改为任意地址访问,改为bind-address = 0.0.0.0
vim /etc/mysql/mariadb.conf.d/50-server.cnf

#初始化数据库 报权限错误就加上sudo
mysql_secure_installation

#允许远程访问
use mysql
GRANT ALL PRIVILEGES ON *.* TO 'root'@'%' IDENTIFIED BY '9890' WITH GRANT OPTION;
flush privileges;

# 检查服务状态
systemctl status mariadb  
systemctl restart mariadb

# 设置开机启动
sudo systemctl enable mariadb  //允许
sudo systemctl disable mariadb  //禁止


#修改root密码
update mysql.user set password=password('wlg@9890') where user='root';
flush privileges;

# 给予远程访问权限
GRANT ALL PRIVILEGES ON *.* TO 'root'@'%' IDENTIFIED BY 'wlg@9890' WITH GRANT OPTION;
flush privileges;
select User,host from mysql.user;

# 给予远程访问权限,还需要修改配置文件的ip为`0.0.0.0`
vim /etc/mysql/mariadb.conf.d/50-server.cnf
bind-address          =0.0.0.0


# MariaDB默认使用UNIX SOCKET 认证，有些 phpMyAdmin 在登入时会发生 “Access Denied” 错误。我们可以使用原生 MySQL 认证.
update mysql.user set plugin = 'mysql_native_password' where User='root';  
flush privileges; 
```

### redis
```shell
sudo apt install redis-server


systemctl status redis-server

# 配置Redis远程访问
vim /etc/redis/redis.conf
>
# bind 127.0.0.1 ::1 #注释调
requirepass [foobared] #设置密码
>
```

## 命令

### 文件类
```shell
df -h   //查看磁盘各分区大小、已用空间等信息

du -sh foo  //查看foo目录的大小
```

## 软件

### Git
5. Github
```bash
# 检查是否存在SSH Key,看是否存在 id_rsa 和 id_rsa.pub文件，如果存在，说明已经有SSH Key
cd ~/.ssh && ls

# 如果没有SSH Key，则需要先生成一下
ssh-keygen -t rsa -C "wuluogan@qq.com"

# 获取SSH Key, 把秘钥复制到github
cat id_rsa.pub

# 测试是否成功配置SSH Key
ssh -T git@github.com
```

```bash
git add . 
git commit -m "你的备注" 
git push -u origin master 
```

#### 推送多个地址 pushGithub.sh
```shell
echo '开始推送github'
echo '切换git地址'
git remote rm origin

git remote add origin git@github.com:hongyehuicheng/docker.git
echo '设置上传代码分支，推送github'
git push --set-upstream origin master --force
echo '推送github完成'
git remote rm origin

git remote add origin git@gitee.com:beijing_hongye_huicheng/docker.git

git pull origin master

echo '切回gitee资源'
git branch --set-upstream-to=origin/master master
echo '设置git跟踪资源'

```

### 开发

#### Java
```bash 
wget https://www.oracle.com/webapps/redirect/signon?nexturl=https://download.oracle.com/otn/java/jdk/8u251-b08/3d5a2bb8f8d4428bbe94aed7ec7ae784/jdk-8u251-linux-x64.tar.gz

#创建安装目录
mkdir /usr/local/java/
#解压至安装目录
tar -zxvf jdk-8u251-linux-x64.tar.gz -C /usr/local/java/
vim /etc/profile

#添加
export JAVA_HOME=/usr/local/java/jdk1.8.0_251
export JRE_HOME=${JAVA_HOME}/jre
export CLASSPATH=.:${JAVA_HOME}/lib:${JRE_HOME}/lib
export PATH=${JAVA_HOME}/bin:$PATH
#使环境变量生效
source /etc/profile
#添加软连接（可选）
ln -s /usr/local/java/jdk1.8.0_251/bin/java /usr/bin/java

# 验证是否成功
java -version
```

#### Maven
```bash 
wget http://apache.communilink.net/maven/maven-3/3.6.3/binaries/apache-maven-3.6.3-bin.tar.gz
tar -zxvf apache-maven-3.6.3-bin.tar.gz -C /usr/local/java/
vim /etc/profile
#添加
export M2_HOME=/usr/local/java/apache-maven-3.6.3
export PATH=${M2_HOME}/bin:$PATH
#使环境变量生效
source /etc/profile

# 验证是否成功
mvn -v

# 更改默认的仓库位置与maven阿里云镜像
# 新建仓库文件夹
mkdir /mnt/maven/repository
# 备份默认的配置文件
cd /mnt/maven/apache-maven-3.6.3/conf
cp settings.xml settings-backup.xml
vim settings.xml
# 在settings标签中添加
<localRepository>/mnt/maven/repository</localRepository>
# 添加mirrors子节点
<mirror>
  <id>aliyunmaven</id>
  <mirrorOf>*</mirrorOf>
  <name>阿里云公共仓库</name>
  <url>https://maven.aliyun.com/repository/public</url>
</mirror>
```


## 服务配置



### FRP 内网穿透

实现外网访问nas等设备

#### 服务端操作

进入`frp`下载页面(https://github.com/fatedier/frp/releases) 找到需要下载的版本，右键复制下载链接。

| 386      | X86架构        |
| -------- | -------------- |
| 386      | X86架构        |
| amd64    | amd架构        |
| arm      | arm架构        |
| arm64    | 64位arm架构    |
| mips     | mips架构       |
| mips64   | 64位mips架构   |
| mipsle   | mipsle架构     |
| mips64le | 64位mipsle架构 |

SSH连接服务器，下载并解压`frp`

```shell
wget https://github.com/fatedier/frp/releases/download/v0.34.3/frp_0.34.3_linux_amd64.tar.gz
tar -zxvf rp_0.34.3_linux_amd64.tar.gz && ls
mv frp_0.34.3_linux_amd64 frp
```

进入到frp目录，找到frps.ini，点击编辑

```ini
[common]
bind_port = 70000
token = 12345678
```

> 简单说下这个token的作用：云服务器跟nas进行数据交换时，通过token作为“暗号”，“暗号”对上了才进行数据交换，否则掰掰~

然后执行命令启动

```bash
./frps -c frps.ini
```

> 如果提示“-bash: ./frps: cannot execute binary file”错误，很可能是你的系统架构和安装环境的系统架构不匹配。这个时候只要去下载安装对应的系统架构的frp进行安装就可以解决。

有些服务器可能没有开放7000端口，要单独开放，这里给出CentOS的方式：

```shell
iptables -I INPUT -ptcp --dport 7000 -j ACCEPT
```

将`frp`配置为系统服务，方便启动

```shell
vim /lib/systemd/system/frps.service
```

黏贴下列命令,并保存

```service
[Unit]
Description=fraps service
After=network.target syslog.target
Wants=network.target

[Service]
Type=simple
ExecStart=/opt/frp/frps -c /opt/frp/frps.ini

[Install]
WantedBy=multi-user.target
```

启动命令

```shell
# 设置自动启动
systemctl start frps

# 设置自动启动
systemctl enable frps

# 查看后台进程
ps auxw
```



#### 本地端设置

打开安装后的docker

映像-新增 -（从url新增）输入这个地址 **https://hub.docker.com/r/chenhw2/frp** 点击**新增**

新建frpc配置文件（新建txt文档重命名为 frpc.ini）打开后输入以下命令：

```
[common]
server_addr = 47.xxx.xx.xxx
server_port = 7000
token = BQmIBalJ0GG7Qsgb

[DSM]
type = tcp
local_ip = 127.0.0.1
local_port = 5000
remote_port = 6001
```



## 命令

### 常用命令

```bash
# 赋予程序执行权限
chmod +x satrt
# 查看日志(最后50行)
tail -n 50 log.log
# 后台运行进程
nohup ./start > log.log 2>&1 &
# 根据进程名称杀进程
pkill start
# 查看某个端口是否占用
lsof -i:port
# 查看网络信息
ip addr
ifconfig
# 重启网络接口
ifdown eth0 && ifup eth0
# 测试磁盘I/O
dd if=/dev/zero of=1GB.bin count=2048k conv=fsync
dd if=/dev/sda of=/dev/null bs=4k
```

### 脚本
```bash
# 宝塔企业版(centos)开心版
yum install -y wget && wget -O install.sh https://download.fenhao.me/ltd/install/install_6.0.sh && sh install.sh
# 宝塔专业版(centos)开心版
yum install -y wget && wget -O install.sh https://download.fenhao.me/install/install_6.0.sh && sh install.sh
# BBR加速四合一
wget -N --no-check-certificate "https://raw.githubusercontent.com/chiakge/Linux-NetSpeed/master/tcp.sh" && chmod +x tcp.sh && ./tcp.sh
# trojan多用户管理
source <(curl -sL https://git.io/trojan-install)
# bench.sh
wget -qO- bench.sh | bash
# 全国测速
bash <(curl -Lso- https://git.io/superspeed)
```


https://github.com/v2rayA/v2rayA


### code

# 开机启动
systemctl enable code-server

# 关闭开机启动
systemctl disable code-server

# 启动服务
systemctl start code-server

# 停止服务
systemctl stop code-server

# 重启服务
systemctl restart code-server

# 查看服务状态
# 开机启动
systemctl enable code-server

# 关闭开机启动
systemctl disable code-server

# 启动服务
systemctl start code-server

# 停止服务
systemctl stop code-server

# 重启服务
systemctl restart code-server

# 查看服务状态
sudo systemctl status code-server


sudo mount -t ntfs-3g /dev/sda1 /media/data

## 命令
### 文件操作

``` bash
ls -l  # 列出文件夹内容(详情模式)
ls -al  # 列出文件夹内容(包括隐藏文件)
touch <file>  # 新建文件
mkdir <dir>  # 新建文件夹
rm [-rf] <file/dir>  # 删除文件
mv <source> <target>  # 修改文件名字
cp [-R] <source> <target>  # 复制文件
ln -s  <source> <target>  # 建立符号链接

rar x <file> #解压
tar -zxvf <file>
unzip  <file>

```

### 查找

``` bash
which <something>  # 搜索可执行文件
whereis <something>  # 搜索文件
locate <something>  # 搜索文件

find <dir> <condiction> <action>
find <dir> -name "*.jpg" # 查找文件
find . -name "*~"  | xargs rm -rf  # 删除当前文件夹及子文件夹下的某些文件


grep -nr 'xxx' <dir>  # 查找包含字符串"xxx"的文件

```

### 权限管理

``` bash
sudo chown -R <owner>:<group>  <file>  # 修改表文件ownership/group

sudo chmod 600 <file>  # 只有所有者有读和写的权限
sudo chmod 644 <file>  # 所有者有读和写的权限
sudo chmod 700 <file>  # 只有所有者有读和写以及执行的权限
sudo chmod 666 <file>  # 每个人都有读和写的权限
sudo chmod 777 <file>  # 开放全部权限
```



### 软件安装

``` bash
aptitude search '~i ^vim' #搜索文件
sudo apt-get install <package>  # 安装软件
sudo aptitude purge <package>  # ubuntu卸载软件
sudo apt-get remove <package>  # ubuntu卸载软件
apt-get remove --purge <package>  # 卸载并清除配置
sudo  dpkg  -i  <package.deb>  # 安装软件
```

### 其他

``` bash

cat  # 由第一行开始显示档案内容
tac  # 从最后一行开始显示，可以看出 tac 是 cat 的反向显示！
nl  # 显示的时候，随便输出行号！
more  # 一页一页的显示档案内容
less  # 与 more 类似，但是比 more 更好的是，他可以[pg dn][pg up]翻页！
head  # 查看头几行
tail  # 查看尾几行


sed -i "s/oldstring/newstring/g" `grep oldstring -rl yourdir` #替换多文件的字符串

ctrl-a  # 在终端中跳到命令最前面
ctrl-e  # 在终端中跳到命令最后面

ctrl-x e # 打开默认编辑器
man <something> #帮助
!!  # 上一条命令
cd -  # 回到上一次目录
pwd  # 查看路径

ps -A | grep -i apache2  # 查找相关进程
kill 1285 (to kill the process apache2)  # 杀死进程

cal  # 日历
date  # 日期
bc  # 计算器
```

## 部署服务
### 部署ACME

为解决Let's Encrypt证书被DNS污染导致访问缓慢，更换ACME.sh的CA为ZeroSSL

#### 注册ZeroSSL

1. **访问账户注册页面注册一个ZeroSSL账户**

传送门：https://app.zerossl.com/signup
![2020-12-01T15:28:22.png](acme-sh/4282865938.png)

2. **获取账户的EAB凭证，用来注册acme帐户**

传送门：https://app.zerossl.com/developer
![2020-12-01T15:31:26.png](acme-sh/3880329434.png)



点击生成会生成你的eab-kid和eab-hmac-key，复制保存下来；

#### 更换ACME.sh的CA为ZeroSSL

1. **注册ACME帐户**

```bash
acme.sh  --register-account  --server zerossl \
        --eab-kid  你的eab-kid \
        --eab-hmac-key  你的eab-hmac-key
```


2. **切换默认CA**

接下来你就可以添加`--server zerossl`指令来签发新的证书了，如下：

```bash
acme.sh --server zerossl --issue --dns dns_dp -d wulgs.com -d *.wulgs.com
```

或者直接切换acme.sh的默认CA为ZeroSSL

```bash
acme.sh --set-default-ca  --server zerossl
```

3. **签发新证书，这里我签发的是泛域名证书**

```bash
acme.sh --issue --dns dns_dp -d wulgs.com -d *.wulgs.com
```

签发完毕后证书会保存在`/root/.acme.sh`目录下，我们一般不直接访问此目录

4. **安装新证书**

```
acme.sh --install-cert -d wulgs.com \
--key-file       /usr/local/nginx/conf/ssl/wulgs.com.key \
--fullchain-file /usr/local/nginx/conf/ssl/wulgs.com.crt \
--reloadcmd     "systemctl force-reload nginx.service"
```

以上命令会将证书复制到nginx指定目录下，并且强制重新加载nginx，并且以后每次自动续期都会自动执行以上逻辑；
安装完毕后，我们修改网站nginx配置文件中ssl证书文件地址为上面的安装地址即可。

经过如上操作，我的SSL证书就更换为ZeroSSL家的证书了！
![2020-12-01T15:57:01.png](acme-sh/20210127161914.png)

![2020-12-02T05:38:13.png](acme-sh/20210127161451.png)

这样OCSP无法访问的问题也就迎刃而解了，当然也可以自己去配置OCSP装订和手动预缓存，来提高加载速度




## curl 用法指南
date: 2021-03-02 10:00:00
tags: 记录
---



curl 是常用的命令行工具，用来请求 Web 服务器。它的名字就是客户端（client）的 URL 工具的意思。

它的功能非常强大，命令行参数多达几十种。如果熟练的话，完全可以取代 Postman 这一类的图形界面工具。

![img](curl/bg2019090501.jpg)

不带有任何参数时，curl 就是发出 GET 请求。

```bash
$ curl https://www.example.com
```

上面命令向`www.example.com`发出 GET 请求，服务器返回的内容会在命令行输出。

## -A

`-A`参数指定客户端的用户代理标头，即`User-Agent`。curl 的默认用户代理字符串是`curl/[version]`。

```bash
$ curl -A 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/76.0.3809.100 Safari/537.36' https://google.com
```

上面命令将`User-Agent`改成 Chrome 浏览器。

```bash
$ curl -A '' https://google.com
```

上面命令会移除`User-Agent`标头。

也可以通过`-H`参数直接指定标头，更改`User-Agent`。

```bash
$ curl -H 'User-Agent: php/1.0' https://google.com
```

## -b

`-b`参数用来向服务器发送 Cookie。

```bash
$ curl -b 'foo=bar' https://google.com
```

上面命令会生成一个标头`Cookie: foo=bar`，向服务器发送一个名为`foo`、值为`bar`的 Cookie。

```bash
$ curl -b 'foo1=bar;foo2=bar2' https://google.com
```

上面命令发送两个 Cookie。

```bash
$ curl -b cookies.txt https://www.google.com
```

上面命令读取本地文件`cookies.txt`，里面是服务器设置的 Cookie（参见`-c`参数），将其发送到服务器。

## -c

`-c`参数将服务器设置的 Cookie 写入一个文件。

```bash
$ curl -c cookies.txt https://www.google.com
```

上面命令将服务器的 HTTP 回应所设置 Cookie 写入文本文件`cookies.txt`。

## -d

`-d`参数用于发送 POST 请求的数据体。

```bash
$ curl -d'login=emma＆password=123'-X POST https://google.com/login
# 或者
$ curl -d 'login=emma' -d 'password=123' -X POST  https://google.com/login
```

使用`-d`参数以后，HTTP 请求会自动加上标头`Content-Type : application/x-www-form-urlencoded`。并且会自动将请求转为 POST 方法，因此可以省略`-X POST`。

`-d`参数可以读取本地文本文件的数据，向服务器发送。

```bash
$ curl -d '@data.txt' https://google.com/login
```

上面命令读取`data.txt`文件的内容，作为数据体向服务器发送。

## --data-urlencode

`--data-urlencode`参数等同于`-d`，发送 POST 请求的数据体，区别在于会自动将发送的数据进行 URL 编码。

```bash
$ curl --data-urlencode 'comment=hello world' https://google.com/login
```

上面代码中，发送的数据`hello world`之间有一个空格，需要进行 URL 编码。

## -e

`-e`参数用来设置 HTTP 的标头`Referer`，表示请求的来源。

```bash
curl -e 'https://google.com?q=example' https://www.example.com
```

上面命令将`Referer`标头设为`https://google.com?q=example`。

`-H`参数可以通过直接添加标头`Referer`，达到同样效果。

```bash
curl -H 'Referer: https://google.com?q=example' https://www.example.com
```

## -F

`-F`参数用来向服务器上传二进制文件。

```bash
$ curl -F 'file=@photo.png' https://google.com/profile
```

上面命令会给 HTTP 请求加上标头`Content-Type: multipart/form-data`，然后将文件`photo.png`作为`file`字段上传。

`-F`参数可以指定 MIME 类型。

```bash
$ curl -F 'file=@photo.png;type=image/png' https://google.com/profile
```

上面命令指定 MIME 类型为`image/png`，否则 curl 会把 MIME 类型设为`application/octet-stream`。

`-F`参数也可以指定文件名。

```bash
$ curl -F 'file=@photo.png;filename=me.png' https://google.com/profile
```

上面命令中，原始文件名为`photo.png`，但是服务器接收到的文件名为`me.png`。

## -G

`-G`参数用来构造 URL 的查询字符串。

```bash
$ curl -G -d 'q=kitties' -d 'count=20' https://google.com/search
```

上面命令会发出一个 GET 请求，实际请求的 URL 为`https://google.com/search?q=kitties&count=20`。如果省略`--G`，会发出一个 POST 请求。

如果数据需要 URL 编码，可以结合`--data--urlencode`参数。

```bash
$ curl -G --data-urlencode 'comment=hello world' https://www.example.com
```

## -H

`-H`参数添加 HTTP 请求的标头。

```bash
$ curl -H 'Accept-Language: en-US' https://google.com
```

上面命令添加 HTTP 标头`Accept-Language: en-US`。

```bash
$ curl -H 'Accept-Language: en-US' -H 'Secret-Message: xyzzy' https://google.com
```

上面命令添加两个 HTTP 标头。

```bash
$ curl -d '{"login": "emma", "pass": "123"}' -H 'Content-Type: application/json' https://google.com/login
```

上面命令添加 HTTP 请求的标头是`Content-Type: application/json`，然后用`-d`参数发送 JSON 数据。

## -i

`-i`参数打印出服务器回应的 HTTP 标头。

```bash
$ curl -i https://www.example.com
```

上面命令收到服务器回应后，先输出服务器回应的标头，然后空一行，再输出网页的源码。

## -I

`-I`参数向服务器发出 HEAD 请求，然会将服务器返回的 HTTP 标头打印出来。

```bash
$ curl -I https://www.example.com
```

上面命令输出服务器对 HEAD 请求的回应。

`--head`参数等同于`-I`。

```bash
$ curl --head https://www.example.com
```

## -k

`-k`参数指定跳过 SSL 检测。

```bash
$ curl -k https://www.example.com
```

上面命令不会检查服务器的 SSL 证书是否正确。

## -L

`-L`参数会让 HTTP 请求跟随服务器的重定向。curl 默认不跟随重定向。

```bash
$ curl -L -d 'tweet=hi' https://api.twitter.com/tweet
```

## --limit-rate

`--limit-rate`用来限制 HTTP 请求和回应的带宽，模拟慢网速的环境。

```bash
$ curl --limit-rate 200k https://google.com
```

上面命令将带宽限制在每秒 200K 字节。

## -o

`-o`参数将服务器的回应保存成文件，等同于`wget`命令。

```bash
$ curl -o example.html https://www.example.com
```

上面命令将`www.example.com`保存成`example.html`。

## -O

`-O`参数将服务器回应保存成文件，并将 URL 的最后部分当作文件名。

```bash
$ curl -O https://www.example.com/foo/bar.html
```

上面命令将服务器回应保存成文件，文件名为`bar.html`。

## -s

`-s`参数将不输出错误和进度信息。

```bash
$ curl -s https://www.example.com
```

上面命令一旦发生错误，不会显示错误信息。不发生错误的话，会正常显示运行结果。

如果想让 curl 不产生任何输出，可以使用下面的命令。

```bash
$ curl -s -o /dev/null https://google.com
```

## -S

`-S`参数指定只输出错误信息，通常与`-s`一起使用。

```bash
$ curl -s -o /dev/null https://google.com
```

上面命令没有任何输出，除非发生错误。

## -u

`-u`参数用来设置服务器认证的用户名和密码。

```bash
$ curl -u 'bob:12345' https://google.com/login
```

上面命令设置用户名为`bob`，密码为`12345`，然后将其转为 HTTP 标头`Authorization: Basic Ym9iOjEyMzQ1`。

curl 能够识别 URL 里面的用户名和密码。

```bash
$ curl https://bob:12345@google.com/login
```

上面命令能够识别 URL 里面的用户名和密码，将其转为上个例子里面的 HTTP 标头。

```bash
$ curl -u 'bob' https://google.com/login
```

上面命令只设置了用户名，执行后，curl 会提示用户输入密码。

## -v

`-v`参数输出通信的整个过程，用于调试。

```bash
$ curl -v https://www.example.com
```

`--trace`参数也可以用于调试，还会输出原始的二进制数据。

```bash
$ curl --trace - https://www.example.com
```

## -x

`-x`参数指定 HTTP 请求的代理。

```bash
$ curl -x socks5://james:cats@myproxy.com:8080 https://www.example.com
```

上面命令指定 HTTP 请求通过`myproxy.com:8080`的 socks5 代理发出。

如果没有指定代理协议，默认为 HTTP。

```bash
$ curl -x james:cats@myproxy.com:8080 https://www.example.com
```

上面命令中，请求的代理使用 HTTP 协议。

## -X

`-X`参数指定 HTTP 请求的方法。

```bash
$ curl -X POST https://www.example.com
```

上面命令对`https://www.example.com`发出 POST 请求。



## OMV安装

### Debian10下安装

1. 添加Openmediavault的官方源

   ```bash
   vim /etc/apt/sources.list.d/openmediavault.list
   
   >
   deb https://packages.openmediavault.org/public usul main
   >
   ```

2. 安装下载工具

   ```bash
   apt-get install wget curl gnupg2
   ```

3. 配置系统

   ```bash
   export LANG=C.UTF-8
   export DEBIAN_FRONTEND=noninteractive
   export APT_LISTCHANGES_FRONTEND=none
   ```

4. 安装官方的key

   ```bash
   wget -O "/etc/apt/trusted.gpg.d/openmediavault-archive-keyring.asc" https://packages.openmediavault.org/public/archive.key
   
   apt-key add "/etc/apt/trusted.gpg.d/openmediavault-archive-keyring.asc"
   ```

5. 安装

   ```bash
   apt-get update
   
   apt-get --yes --auto-remove --show-upgraded --allow-downgrades --allow-change-held-packages --no-install-recommends --option Dpkg::Options::="--force-confdef" --option DPkg::Options::="--force-confold" --allow-unauthenticated install postfix openmediavault
   ```

6. 安装结束

   打开浏览器，输入ip地址，就可以打开Openmediavault的控制页面了

   默认用户名：admin

   默认密码：openmediavault

7. 额外配置

   如果是新手，这一步就不折腾了

   第一次配置：omv-firstaid

   ![omv-firstaid](OpenMediaVault/omv-firstaid.png)

   可以更改一些东西，如果不明白，就什么都不要改。



## OMV 插件


## nginx

vi /usr/lib/systemd/system/nginx.service


```angular2html
[Unit]
Description=nginx
After=network.target
  
[Service]
Type=forking
ExecStart=/usr/local/nginx/sbin/nginx
ExecReload=/usr/local/nginx/sbin/nginx -s reload
ExecStop=/usr/local/nginx/sbin/nginx -s quit
PrivateTmp=true
  
[Install]
WantedBy=multi-user.target
```

systemctl enable nginx.service
systemctl status nginx.service
pkill -9 nginx

ps aux | grep nginx

systemctl start nginx


vi /usr/lib/systemd/system/txt.service

[Unit]
Description=Redis persistent key-value database
After=network.target

[Service]
ExecStart=/home/myuser/redis-server /home/myuser/redis.conf --supervised systemd
ExecStop=/home/myuser/redis-shutdown
Type=notify
User=myuser
Group=myuser
RuntimeDirectory=redis
RuntimeDirectoryMode=0755

[Install]
WantedBy=multi-user.target


## 脚本

### idea安装脚本
```shell
#!/bin/bash
############################################
#文件名称:Linux软件安装半自动化
#版    本:5.2
############################################

#+++++++++++ 通用变量 ++++++++++++++++

#安装主目录
readonly INSTALL_HOME=/opt/ #readonly标记变量是只读的，后续执行过程中就不能对其值进行改变
readonly INSTALL_DESK=/home/$USER/桌面/ #桌面中文
#readonly INSTALL_DESK=/home/$USER/Desktop/ #桌面英文
readonly INSTALL_APP=/usr/share/applications/ #,应用程序启动的快捷方式位置
#+++++++++++ jmeter安装 ++++++++++++++++
#软件版本
jmeterver="apache-jmeter-5.4.1"
jmetertar=$jmeterver.tgz
#软件安装地址
jmeterurl="https://mirrors.tuna.tsinghua.edu.cn/apache//jmeter/binaries/"$jmetertar
#在线下载软件
sudo chmod -R 777 ${INSTALL_HOME}
wget -P ${INSTALL_HOME} ${jmeterurl}
cd ${INSTALL_HOME}
#解压软件
tar -xzvf ${jmetertar}
#将软件重命名
jmeterexec=$(find ./ -name jmeter.sh)
jmetericon=$(find ./ -name jmeter.png)
#桌面建立软件快捷方式
touch ${INSTALL_DESK}jmeter.desktop
#添加快捷方式链接路径，EOF追加与覆盖,">"添加符号，">>"追加符号
cd ${INSTALL_DESK}
sudo chmod -R 777 ${INSTALL_DESK}
sudo cat >${INSTALL_DESK}jmeter.desktop<<EOF
[Desktop Entry]
    Encoding=UTF-8
    Type=Application
    Name=${jmeterver}
    GenericName=${jmeterver}
    Comment=jmeter:The test
    Exec=sh ${INSTALL_HOME}$jmeterexec
    Icon=${INSTALL_HOME}$jmetericon
    Terminal=jmeter
    Categories=jmeter;
EOF
#获取快捷方式权限
sudo chmod -R 777 ${INSTALL_DESK}jmeter.desktop
sudo cp -f jmeter.desktop ${INSTALL_APP}
sudo chmod -R 777 ${INSTALL_APP}jmeter.desktop
echo "您的jmeter安装成功!"

#+++++++++++ pycharm安装 ++++++++++++++++
#软件版本
pycharmname="pycharm-community-"
pycharmver="2020.1.5"
pycharmtar=$pycharmname$pycharmver.tar.gz
#软件安装地址
pycharmurl="https://download.jetbrains.com/python/"$pycharmtar
#在线下载软件
sudo chmod -R 777 ${INSTALL_HOME}
wget -P ${INSTALL_HOME} ${pycharmurl}
cd ${INSTALL_HOME}
#解压软件
tar -xzvf ${pycharmtar}
#将软件重命名
pycharmexec=$(find ./ -name pycharm.sh)
pycharmicon=$(find ./ -name pycharm.png)
#桌面建立软件快捷方式
touch ${INSTALL_DESK}pycharm.desktop
#添加快捷方式链接路径，EOF追加与覆盖,">"添加符号，">>"追加符号
cd ${INSTALL_DESK}
sudo chmod -R 777 ${INSTALL_DESK}
sudo cat >${INSTALL_DESK}pycharm.desktop<<EOF
[Desktop Entry]
    Encoding=UTF-8
    Type=Application
    Name=pycharm${pycharmver}
    GenericName=pycharm${pycharmver}
    Comment=pycharm:The python
    Exec=sh ${INSTALL_HOME}$pycharmexec
    Icon=${INSTALL_HOME}$pycharmicon
    Terminal=pycharm
    Categories=pycharm;
EOF
#获取快捷方式权限
sudo chmod -R 777 ${INSTALL_DESK}pycharm.desktop
sudo cp -f pycharm.desktop ${INSTALL_APP}
sudo chmod -R 777 ${INSTALL_APP}pycharm.desktop
echo "您的pycharm安装成功!"

#+++++++++++ ideaIU安装 ++++++++++++++++
#软件版本
ideaver="ideaIC-2020.1.4"
ideatar=$ideaver.tar.gz
#软件安装地址
ideaurl="https://download.jetbrains.com/idea/"$ideatar
#在线下载软件
sudo chmod -R 777 ${INSTALL_HOME}
wget -P ${INSTALL_HOME} ${ideaurl}
cd ${INSTALL_HOME}
#解压软件
tar -xzvf ${ideatar}
#将软件重命名
ideaexec=$(find ./ -name idea.sh)
ideaicon=$(find ./ -name idea.png)
#桌面建立软件快捷方式
touch ${INSTALL_DESK}idea.desktop
#添加快捷方式链接路径，EOF追加与覆盖,">"添加符号，">>"追加符号
cd ${INSTALL_DESK}
sudo chmod -R 777 ${INSTALL_DESK}
sudo cat >${INSTALL_DESK}idea.desktop<<EOF
[Desktop Entry]
    Encoding=UTF-8
    Type=Application
    Name=${ideaver}
    GenericName=${ideaver}
    Comment=idea:The python
    Exec=sh ${INSTALL_HOME}$ideaexec
    Icon=${INSTALL_HOME}$ideaicon
    Terminal=idea
    Categories=idea;
EOF
#获取快捷方式权限
sudo chmod -R 777 ${INSTALL_DESK}idea.desktop
sudo cp -f idea.desktop ${INSTALL_APP}
sudo chmod -R 777 ${INSTALL_APP}idea.desktop
echo "您的ideaIU安装成功!"
```

## 命令行

### 磁盘
```
# 查看磁盘使用的大致情况
df -h

# 列出当前目录或文件的总大小，并按倒叙排序 
du -sh /var/* | sort -nr 

```

## 容器

#### 容器日志清理方案
1. 方案一：手动清理日志文件，可解燃眉之急，治标不治本。
```bash
cat /dev/null > /var/lib/docker/containers/容器id/容器id-json.log 
```
注意：这里没有使用 rm 方式来删除文件。使用 rm -rf 方式删除日志后，通过 df -h 会发现磁盘空间并没有释放。原因是在Linux或者Unix系统中，通过 rm -rf 或者文件管理器删除文件，将会从文件系统的目录结构上解除链接（unlink）。如果文件是被打开的（有一个进程正在使用），那么进程将仍然可以读取该文件，磁盘空间也一直被占用。正确姿势是cat /dev/null > *-json.log，当然你也可以通过rm -rf删除后重启docker。

方案二：脚本定期清理日志文件，缺点是日志文件全丢了，无法追溯。
```bash
# 清理脚本
#!/bin/sh  
 
echo "======== start clean docker containers logs ========"   
 
logs=$(find /var/lib/docker/containers/ -name *-json.log)   
 
for log in $logs   
        do   
                echo "clean logs : $log"   
                cat /dev/null > $log   
        done   
 
echo "======== end clean docker containers logs ========" 
```

方案三：限制所有容器的日志文件大小，治本，缺点是需要重新创建容器和启动 docker 镜像。
```bash
vim /etc/docker/daemon.json 
>
{ 
"log-driver":"json-file", 
"log-opts": {"max-size":"500m", "max-file":"3"} 
} 
>
```
max-size=500m，表示容器的日志文件大小上限是 500M， max-file=3，表示容器有三个日志，第一个满了 500M之后就写第二个，第二个满了 500M就写第三个，如果第三个满了，就清空第一个日志文件，重新写第一个日志文件。




##### 1\. 安装时 选择软件那块，只选中 gnome 去掉 debian桌面 和 系统工具

登陆之前确保，登陆界面选择 xorg gnome （默认 wayland），否则会导致 fcitx5 输入法在浏览器中无法正常使用  
进入桌面后

```undefined
su
apt purge gnome-games libreoffice* gnome-todo gnome-shell-extensions gnome-clocks gnome-contacts gnome-maps gnome-music gnome-sound-recorder gnome-weather totem yelp cheese xterm shotwell malcontent evolution gnome-documents transmission-gtk
apt autoremove --purge
apt install fcitx5 fcitx5-pinyin
```

##### 2\. 切换阿里巴巴开源镜像

```cpp
deb http://mirrors.aliyun.com/debian/ bullseye main non-free contrib
deb-src http://mirrors.aliyun.com/debian/ bullseye main non-free contrib
deb http://mirrors.aliyun.com/debian-security/ bullseye-security main
deb-src http://mirrors.aliyun.com/debian-security/ bullseye-security main
deb http://mirrors.aliyun.com/debian/ bullseye-updates main non-free contrib
deb-src http://mirrors.aliyun.com/debian/ bullseye-updates main non-free contrib
deb http://mirrors.aliyun.com/debian/ bullseye-backports main non-free contrib
deb-src http://mirrors.aliyun.com/debian/ bullseye-backports main non-free contrib
```

##### 3\. 安装nvidia 驱动

安装之前确保，登陆界面选择 xorg gnome ，否则会导致黑屏无法进入

```undefined
apt install linux-headers-amd64
apt install nvidia-driver firmware-misc-nonfree firmware-realtek
apt install nvidia-xconfig
```

##### 4\. 安装后出现的问题

a. 无法登录  
之前在 wayland 下安装的显卡驱动，后面在 xrog gnome 下面执行下面的命令

```undefined
sudo nvidia-xconfig
```

解决方式：  
先在登录界面选择wayland 进入桌面

```undefined
sudo rm -rf /etc/X11/xorg.conf
sudo reboot
```

根本原因是nvidia 无法正常加载导致  
b. nvidia-settings 显示

```csharp
ERROR: NVIDIA driver is not loaded


ERROR: Unable to load info from any available system

```

注意到在重启时，界面显示

```undefined
Failed to start Load Kernel Modules
```

执行

```css
systemctl status systemd-modules-load.service
```

显示

```ruby
systemd-modules-load.service - Load Kernel Modules
     Loaded: loaded (/lib/systemd/system/systemd-modules-load.service; static)
     Active: failed (Result: exit-code) since Wed 2022-02-16 11:32:15 CST; 11min ago
       Docs: man:systemd-modules-load.service(8)
             man:modules-load.d(5)
    Process: 289 ExecStart=/lib/systemd/systemd-modules-load (code=exited, status=1/FAILURE)
   Main PID: 289 (code=exited, status=1/FAILURE)
        CPU: 12ms

Warning: some journal files were not opened due to insufficient permissions.
```

看出有问题的进程 289, 执行命令查看日志

```undefined
sudo journalctl -b _PID=289
```

显示

```jsx
-- Journal begins at Tue 2022-02-15 10:44:36 CST, ends at Wed 2022-02-16 11:44:06 CST. --
2月 16 11:32:15 debian systemd-modules-load[289]: Inserted module 'msr'
2月 16 11:32:15 debian systemd-modules-load[289]: Error running install command 'modprobe nvidia-modeset ; modprobe -i nvidia-current-drm ' for module nvidia_drm: retcode 1
2月 16 11:32:15 debian systemd-modules-load[289]: Failed to insert module 'nvidia_drm': Invalid argument
```

运行

```undefined
sudo modprobe nvidia-modeset
```

显示

```jsx
modprobe: FATAL: Module nvidia-current not found in directory /lib/modules/5.10.0-10-amd64
modprobe: ERROR: ../libkmod/libkmod-module.c:990 command_do() Error running install command 'modprobe -i nvidia-current ' for module nvidia: retcode 1
modprobe: ERROR: could not insert 'nvidia': Invalid argument
modprobe: FATAL: Module nvidia-current-modeset not found in directory /lib/modules/5.10.0-10-amd64
modprobe: ERROR: ../libkmod/libkmod-module.c:990 command_do() Error running install command 'modprobe nvidia ; modprobe -i nvidia-current-modeset ' for module nvidia_modeset: retcode 1
modprobe: ERROR: could not insert 'nvidia_modeset': Invalid argument
```

分析 因为之前升级了系统，目前进入的kernel 版本不是最新的导致  
查看最新版本kernel 下的modules

```undefined
 ls /lib/modules/5.10.0-11-amd64
```

果然编译的驱动都在这个目录下

结论：  
因本人安装的是双系统， 系统引导的gurb 是在ubuntu 上，debian 11.2 更新后，没有更新ubuntu 的grub，导致引导错误  
修复方式：  
进入ubuntu 系统, 运行：

```undefined
sudo update-grub
```

或者在bios 中修改debian 为启动引导均可。

##### 5\. 关于 xrog gnome 切换回wayland 问题

最近更新后，fcitx5 已经可以在firefox下正常使用，nvidia驱动，在安装完之后，再切换回wayland 也能正常使用


### 在Debian 11 上安装Nvidia驱动程序
编辑 sources.list 添加 non-free 源  
sudo vim /etc/apt/sources.list

登录后复制

```html
deb http://mirrors.tuna.tsinghua.edu.cn/debian/ bullseye main contrib non-free
deb-src http://mirrors.tuna.tsinghua.edu.cn/debian/ bullseye main contrib non-free

deb http://security.debian.org/debian-security bullseye-security main contrib non-free
deb-src http://security.debian.org/debian-security bullseye-security main contrib non-free

deb http://mirrors.tuna.tsinghua.edu.cn/debian/ bullseye-updates main contrib non-free
deb-src http://mirrors.tuna.tsinghua.edu.cn/debian/ bullseye-updates main contrib non-free

```

更新、安装 nvidia-detect

登录后复制

```html
sudo apt update && sudo apt install nvidia-detect
```

执行 nvidia-detect  
nvidia-detect

登录后复制

```html
Detected NVIDIA GPUs:
01:00.0 VGA compatible controller [0300]: NVIDIA Corporation GK208B [GeForce GT 710] [10de:128b] (rev a1)

Checking card:  NVIDIA Corporation GK208B [GeForce GT 710] (rev a1)
Your card is supported by all driver versions.
Your card is also supported by the Tesla 460 drivers series.
Your card is also supported by the Tesla 450 drivers series.
Your card is also supported by the Tesla 418 drivers series.
It is recommended to install the
    nvidia-driver
package.

```

安装驱动，完成。

登录后复制

```html

sudo apt install nvidia-driver
```


## 服务

### v2rayA
https://github.com/v2rayA/v2rayA
https://v2raya.org/docs

v2rayA 的功能依赖于 V2Ray 内核，因此需要安装内核。

## 安装 V2Ray 内核 / Xray 内核[#](https://v2raya.org/docs/prologue/installation/debian/#%E5%AE%89%E8%A3%85-v2ray-%E5%86%85%E6%A0%B8--xray-%E5%86%85%E6%A0%B8)

### V2Ray / Xray 的官方脚本[#](https://v2raya.org/docs/prologue/installation/debian/#v2ray--xray-%E7%9A%84%E5%AE%98%E6%96%B9%E8%84%9A%E6%9C%AC)

V2Ray 安装参考：[https://github.com/v2fly/fhs-install-v2ray](https://github.com/v2fly/fhs-install-v2ray)

Xray 安装参考：[https://github.com/XTLS/Xray-install](https://github.com/XTLS/Xray-install)

### v2rayA 提供的镜像脚本（推荐）[#](https://v2raya.org/docs/prologue/installation/debian/#v2raya-%E6%8F%90%E4%BE%9B%E7%9A%84%E9%95%9C%E5%83%8F%E8%84%9A%E6%9C%AC%E6%8E%A8%E8%8D%90)

`curl -Ls https://mirrors.v2raya.org/go.sh | sudo bash` 

安装后可以关掉服务，因为 v2rayA 不依赖于该 systemd 服务。

`sudo systemctl disable v2ray --now ### Xray 需要替换服务为 xray` 

## 安装 v2rayA[#](https://v2raya.org/docs/prologue/installation/debian/#%E5%AE%89%E8%A3%85-v2raya)

### 方法一：通过软件源安装[#](https://v2raya.org/docs/prologue/installation/debian/#%E6%96%B9%E6%B3%95%E4%B8%80%E9%80%9A%E8%BF%87%E8%BD%AF%E4%BB%B6%E6%BA%90%E5%AE%89%E8%A3%85)

#### 添加公钥[#](https://v2raya.org/docs/prologue/installation/debian/#%E6%B7%BB%E5%8A%A0%E5%85%AC%E9%92%A5)

`wget -qO - https://apt.v2raya.org/key/public-key.asc | sudo tee /etc/apt/trusted.gpg.d/v2raya.asc` 

#### 添加 V2RayA 软件源[#](https://v2raya.org/docs/prologue/installation/debian/#%E6%B7%BB%E5%8A%A0-v2raya-%E8%BD%AF%E4%BB%B6%E6%BA%90)

`echo "deb https://apt.v2raya.org/ v2raya main" | sudo tee /etc/apt/sources.list.d/v2raya.list
sudo apt update` 

#### 安装 V2RayA[#](https://v2raya.org/docs/prologue/installation/debian/#%E5%AE%89%E8%A3%85-v2raya-1)

`sudo apt install v2raya` 

### 方法二：手动安装 deb 包[#](https://v2raya.org/docs/prologue/installation/debian/#%E6%96%B9%E6%B3%95%E4%BA%8C%E6%89%8B%E5%8A%A8%E5%AE%89%E8%A3%85-deb-%E5%8C%85)

[下载 deb 包](https://github.com/v2rayA/v2rayA/releases) 后可以使用 Gdebi、QApt 等图形化工具来安装，也可以使用命令行：

`sudo apt install /path/download/installer_debian_xxx_vxxx.deb ### 自行替换 deb 包所在的实际路径` 

## 启动 v2rayA / 设置 v2rayA 自动启动[#](https://v2raya.org/docs/prologue/installation/debian/#%E5%90%AF%E5%8A%A8-v2raya--%E8%AE%BE%E7%BD%AE-v2raya-%E8%87%AA%E5%8A%A8%E5%90%AF%E5%8A%A8)

> 从 1.5 版开始将不再默认为用户启动 v2rayA 及设置开机自动。

- 启动 v2rayA
    
    `sudo systemctl start v2raya.service` 
    
- 设置开机自动启动
    
    `sudo systemctl enable v2raya.service` 
    

## 切换 iptables 为 iptables-nft[#](https://v2raya.org/docs/prologue/installation/debian/#%E5%88%87%E6%8D%A2-iptables-%E4%B8%BA-iptables-nft)

对于 Debian11 用户来说，iptables 已被弃用。使用 nftables 作为 iptables 的后端以进行适配：

`update-alternatives --set iptables /usr/sbin/iptables-nft
update-alternatives --set ip6tables /usr/sbin/ip6tables-nft
update-alternatives --set arptables /usr/sbin/arptables-nft
update-alternatives --set ebtables /usr/sbin/ebtables-nft` 

如果你想切换回 legacy 版本：

`update-alternatives --set iptables /usr/sbin/iptables-legacy
update-alternatives --set ip6tables /usr/sbin/ip6tables-legacy
update-alternatives --set arptables /usr/sbin/arptables-legacy
update-alternatives --set ebtables /usr/sbin/ebtables-legacy` 

切换后重启即可。