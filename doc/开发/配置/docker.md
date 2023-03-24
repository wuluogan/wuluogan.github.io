# Docker

## 安装

### 安装docker-compose
如果要进行更新，替换1.27.4为最新的版本号即可。

查看最新版本：https://github.com/docker/compose/releases
```bash
sudo curl -L https://github.com/docker/compose/releases/download/1.27.4/docker-compose-$(uname -s)-$(uname -m) -o /usr/local/bin/docker-compose
```

## 命令
```
# 删除docker中的容器
docker rm 容器id  

# 删除docker中的镜像
docker rmi 镜像id 

# 删除docker中所有容器
docker rm $(docker ps -aq) 

# 删除docker中所有镜像
docker rmi $(docker images -q) 
```

## 部署
### node.js后端应用

1、写Dockerfile文件

这里笔者将dockerfile文件放在和我的nestjs项目同级，同级的还有 .dockerignore文件，下面会细讲

下面是我的dockerfile文件内容(注意开头必须大写)：

```
# FROM 表示设置要制作的镜像基于哪个镜像，FROM指令必须是整个Dockerfile的第一个指令，如果指定的镜像不存在默认会自动从Docker Hub上下载。 
# 指定我们的基础镜像是node，latest表示版本是最新 
FROM node:latest 
 
# 执行命令，创建文件夹 
RUN mkdir -p /home/nodeNestjs 
 
# 将根目录下的文件都copy到container（运行此镜像的容器）文件系统的文件夹下 
COPY ./nestjs /home/nodeNestjs 
 
# WORKDIR指令用于设置Dockerfile中的RUN、CMD和ENTRYPOINT指令执行命令的工作目录(默认为/目录)，该指令在Dockerfile文件中可以出现多次，如果使用相对路径则为相对于WORKDIR上一次的值， 
# 例如WORKDIR /data，WORKDIR logs，RUN pwd最终输出的当前目录是/data/logs。 
# cd到 /home/nodeNestjs 
WORKDIR /home/nodeNestjs 
 
# 安装项目依赖包 
RUN npm install 
RUN npm build 
 
# 配置环境变量 
ENV HOST 0.0.0.0 
ENV PORT 3000 
 
# 容器对外暴露的端口号(笔者的nestjs运行的端口号是3000) 
EXPOSE 3000 
 
# 容器启动时执行的命令，类似npm run start 
CMD ["node", "/home/nodeNestjs/dist/main.js"] 
```

**.dockerignore文件**

.dockerignore文件类似于git的`.gitignore`文件，可以忽略掉添加进镜像中的文件，写法、格式和`.gitignore`一样，一行代表一个忽略。

```
/dist 
/node_modules 
 
logs 
*.log 
npm-debug.log* 
yarn-debug.log* 
yarn-error.log* 
lerna-debug.log* 
 
.DS_Store 
 
/coverage 
/.nyc_output 
 
/.idea 
.project 
.classpath 
.c9/ 
*.launch 
.settings/ 
*.sublime-workspace 
 
.vscode/* 
```

2、 将代码打包成镜像

切换到Dockerfile所在的位置

运行以下命令(注意最后的那个 . !!!)开始打包：

```
# -t表示指定镜像的名字 
docker build -t kai_docker:v1.0 . 
```

接下来，等待安装过程，直到打包成功

运行以下命令可查看目前本地docker的镜像

```
docker  images 
```

3、 运行启动镜像

```
docker run -d -p 3000:3000 kai_docker:v1.0 
```

- -d：表示后台运行
- -p：表示指定端口映射，（3000：3000）表示（本机端口：容器端口），3000是笔者的nestjs代码中监听的访问端口，也是容器对外暴露的端口
- 镜像名后面的:v1.0：表示打的tag号

这里笔者加上   --restart=always  让进程自动重启

```
docker run -d --restart=always -p 3000:3000 kai_docker:v1.0 
```

运行以下命令可以查看容器运行情况

```
docker ps 
```

可以看到我们的容器正常运行中

至此，笔者的nestjs的接口就可以正常访问了

三、容器报错停止

如果容器运行后执行docker ps没有出现刚刚运行的容器，可以执行以下命令查看退出的容器：

```
docker ps -a 
```

出现这种情况的原因是运行的docker容器报错所致，可以用以下命令查看报错日志

```
docker logs CONTAINER_ID(CONTAINER_ID是docker容器的id) 
```

容器报错有可能是因为dockerfile写的有问题所致，这时候需要删掉错误的容器和镜像，再重新打包正确的镜像

## 服务

### Code
```bash
docker run -d -u root -p 8080:8080 --name code-server -v /home/wlg:/home/wlg codercom/code-server
```

### MySQL
```bash
# 拉取镜像 
docker pull mysql:8.0.19 
# 启动server 
docker run --name mysql01 -p 13306:3306 -e MYSQL_ROOT_PASSWORD=mysqladmin -d mysql:8.0.19 
# 启动客户端,输入密码：mysqladmin  
docker run -it --network host --rm mysql mysql -h127.0.0.1 -P13306 --default-character-set=utf8mb4 -uroot -p 
```

#### Mysql 5.7
```bash
docker pull mysql:5.7
docker pull mysql:8.0.25

docker images

mkdir -p /WLG/Soft/System/docker/mysql/config
mkdir -p /WLG/Soft/System/docker/mysql/data

vi my.cnf
>
[mysqld]
pid-file	= /var/run/mysqld/mysqld.pid
socket		= /var/run/mysqld/mysqld.sock
datadir		= /var/lib/mysql
#log-error	= /var/log/mysql/error.log
# Disabling symbolic-links is recommended to prevent assorted security risks
symbolic-links=0


max_connections = 2000
max_user_connections = 1900
max_connect_errors = 100000
max_allowed_packet = 50M
lower_case_table_names=1
[mysqld]
skip-name-resolve
sql_mode=STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION
>

docker run  -p 3307:3306 --name mysql2.0 -v /home/dockerdata/mysql/conf/my.cnf:/etc/mysql/my.cnf -v /home/dockerdata/mysql/logs:/logs -v /home/dockerdata/mysql/mysql:/var/lib/mysql -e MYSQL_ROOT_PASSWORD=123456 -d mysql:5.7

docker run  -p 3306:3306 --name mysql -v /WLG/Soft/Docker/mysql/data:/var/lib/mysql -e MYSQL_ROOT_PASSWORD=9890 -d mysql:8.0.25

docker run  -p 3306:3306 --name mysql -e MYSQL_ROOT_PASSWORD=root -d mysql:8.0.25

```

### Redis
```bash
# 拉取redis 
docker pull redis:6.2.5
# 启动redis 
docker run -itd --name redis01 -p 6379:6379 --requirepass "redisadmin" redis 
# 使用客户端链接redis 
docker exec -it redis01 /bin/bash 
```
mkdir -p /WLG/Soft/Docker/redis/data

docker run  --name redis -p 6379:6379 -v /WLG/Soft/Docker/redis/data:/data -d redis:6.2.5 redis-server --requirepass "9890" --appendonly yes

docker run  --name redis -p 6379:6379 -d redis:6.2.5 redis-server --requirepass "root" --appendonly yes


### Etcd
```bash
# 拉去镜像 
docker pull appcelerator/etcd:latest 
# 启动 
docker run --name etcd01 -d -p 2379:2379 -p 2380:2380 appcelerator/etcd --listen-client-urls http://0.0.0.0:2379 --advertise-client-urls http://0.0.0.0:2379  
# 客户端链接 
docker exec -it etcd01 /bin/bash 
```

### Elasticsearch
```bash
# 拉取镜像 
docker pull elasticsearch:latest 
# 启动 
docker run --name es01 -d -p 9200:9200 -p 9300:9300 -e "discovery.type=single-node" -e  "ES_JAVA_OPTS=-Xms1g -Xmx1g" elasticsearch:latest 
# 使用head客户端链接 
docker pull mobz/elasticsearch-head:5 
# 启动header 容器 
docker run -d --name my-es_admin -p 9100:9100 mobz/elasticsearch-head:5 
# curl测试访问 
# 第一次打开浏览器header访问，连接的服务地址是localhost:9200，修改为docker所在的ip。此时出现连接失败，需要修改镜像的elasticsearch.yml文件，添加
http.cors.enabled: true 
http.cors.allow-origin: "*" 
# 重启es 
docker restart es01 
docker restart my-es-head 
```



### MongoDB
```bash
#拉取镜像 
docker pull mongo:lastest 
# 启动 
docker run --name mongodb01  -p 27017:27017 -d mongo:latest 
# 客户端链接以admin进入容器 
docker exec -it mongodb01 mongo admin 
```

### postgre
```bash
# 下载 
docker pull postgres:12 
# 启动 
docker run --name pg01 -e POSTGRES_PASSWORD=pgadmin  -p 54320:5432 -d postgres:12 
# 客户端链接 
docker exec -it pg01 /bin/bash 
```

### 搭建Bitwarden密码库
Github传送门：https://github.com/dani-garcia/bitwarden_rs

1. **创建Bitwarden数据存放目录**

```bash
mkdir -p /data/bitwarden && cd /data/bitwarden
```

2. **创建docker-compose配置文件**

```bash
cat >> docker-compose.yml <<EOF
version: '3'

services:
  # 服务名称
  bitwarden:
    # 指定使用 Docker Hub 中的最新镜像
    image: bitwardenrs/server:latest
    # 容器名称
    container_name: bitwarden
    # 开机自动启动
    restart: always
    # 指定容器内的 /data 目录挂载到宿主机的当前目录下的 /data/bitwarden/data 目录，这样你可以在宿主机上执行数据库的备份操作
    volumes:
      - /data/docker/bitwarden/data:/data
    # bitwarden配置
    environment:
      # 开启网页访问
      WEB_VAULT_ENABLED: 'true'
      # 开启新用户注册，我们注册后关闭即可
      SIGNUPS_ALLOWED: 'true'
      # 开启长连接
      WEBSOCKET_ENABLED: 'true'
      # 日志文件
      LOG_FILE: /data/bitwarden.log
    # 将容器内的80/3012端口映射到宿主机的7006/7007端口；其中80端口为 HTTP 服务，3012 端口是 websockets 服务
    ports:
      - 7006:80
      - 7007:3012
EOF
```

3. **Nginx反向代理配置**

```bash
#bitwarden
location / {
  proxy_pass http://127.0.0.1:7006;
  proxy_set_header Host $host;
  proxy_set_header X-Real-IP $remote_addr;
  proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
  proxy_set_header X-Forwarded-Proto $scheme;
}
location /notifications/hub {
  proxy_pass http://127.0.0.1:7007;
  proxy_set_header Upgrade $http_upgrade;
  proxy_set_header Connection "upgrade";
}
location /notifications/hub/negotiate {
  proxy_pass http://127.0.0.1:7006;
}
```

以上配置为最基础的配置，你还可以加入 HSTS / 压缩 / XSS 防护等配置；
详细配置请参考官方文档：https://github.com/dani-garcia/bitwarden_rs/wiki/Proxy-examples
现在已经是 2020 年，请为域名配置 HTTPS 证书，并将 HTTP 流量阻挡或重定向到 HTTPS，以保障数据传输的安全。

4. **启动docker服务**

```bash
docker-compose up -d
```

启动完成后，我们就可以通过我们配置的域名来访问网页版了，点击创建账号进行账号的注册

5、 关闭新用户注册
现在你的bitwarden服务器允许任何人访问和注册，如果你只需要自己使用，可以关闭用户注册功能。
调整docker-compose配置文件

```bash
SIGNUPS_ALLOWED: 'false'
```

改动配置后需要运行以下命令来删除并重新创建容器以使配置生效，无需担心你的数据，我们的数据均保存在我们第4.1中创建的目录中

```bash
docker-compose down && docker-compose up -d
```



这样就关闭了用户注册功能，并禁用了 web 的访问。密码数据我们还是可以在客户端中进行编辑的。

6、备份

我们在使用过程中的所有数据都保存在我们创建的目录：/data/bitwarden 中
为保证数据安全我们最好定期将该目录的数据进行备份
你可以自己手动备份也可以使用我们的自动备份脚本：WebServerAutoBackup
Github: https://github.com/ehaut/WebServerAutoBackup
配置文件中填写备份目录为：/data/bitwarden
然后在crontab定时任务中添加定时任务，即可每日进行备份到你指定的地方。

```
#每日凌晨 2:15 备份bitwarden
15 2 * * * cd /root/WebServerAutoBackup && ./backup.sh config-bitwarden.ini > /data/backup/log/bitwarden-cron.log  2>&1 & 1
```

7、更新

由于使用的是非官方的服务器端，所以作者们会经常同步更新到官方的更新中，以保证与客户端的兼容性
更新也是直接运行如下命令即可

```
cd /data/bitwarden
//停止运行的bitwarden容器
docker-compose stop
//拉取最新镜像
docker-compose pull
//重新构建并启动
docker-compose up -d --build
```




## 搭建 Gitlab

### 先获取 Gitlab 镜像

官方文档：https://hub.docker.com/r/gitlab/gitlab-ce/。

```bash
docker pull gitlab/gitlab-ce
```

### 使用 Docker 启动 Gitlab 服务

```bash
docker run --detach \
  --hostname <hostname> \
  --publish 8443:443 --publish 8880:80 --publish 8222:22 \
  --name gitlab \
  --restart always \
  --volume /data/gitlab/config:/etc/gitlab \
  --volume /data/gitlab/logs:/var/log/gitlab \
  --volume /data/gitlab/data:/var/opt/gitlab \
  --privileged=true \
  gitlab/gitlab-ce:latest
```

上面的 `<hostname>` 根据不同情况，可以是 ip，也可以是域名。根据自己的实际情况，配置适合自己的端口映射和 volume 映射。

详情看官方文档：https://docs.gitlab.com/omnibus/docker/ 。

启动后，就可以在浏览器访问 Gitlab，例如你的 hostname 为 11.14.45.67，访问 http://11.14.45.67 既可以访问 Gitlab。

### Gitlab 常用命令

```bash
# 进入 bash
sudo docker exec -it gitlab /bin/bash

# 编辑配置
sudo docker exec -it gitlab vi /etc/gitlab/gitlab.rb

# 或则先进入 bash， 然后再修改配置
sudo /etc/gitlab/gitlab.rb

# 修改后重载配置
gitlab-ctl reconfigure

# 重启
sudo docker restart gitlab

#停止
sudo docker stop gitlab
```

## 搭建 Gitlab Runner

同样，为了少折腾，选择 使用 Docker 搭建 Gitlab。

### 先获取 Gitlab 镜像

官方文档：https://hub.docker.com/r/gitlab/gitlab-runner/。

```bash
docker pull gitlab/gitlab-runner
```

### 用 Docker 启动 Gitlab Runner 服务

```bash
docker run -d --name gitlab-runner --restart always \
  -v /data/gitlab-runner/config:/etc/gitlab-runner \
  -v /data/var/run/docker.sock:/var/run/docker.sock \
  gitlab/gitlab-runner:latest
```

根据实际情况配置 volume 的映射，详情看官方文档：https://docs.gitlab.com/runner/install/docker.html#docker-image-installation 。

### 注册一个 Runner

官方文档：https://docs.gitlab.com/runner/register/#docker。

注册命令如下：

```bash
docker run --rm -t -i -v /data/gitlab-runner/config:/etc/gitlab-runner gitlab/gitlab-runner register
```

根据实际情况配置 volume 的映射, 然后输入相应的 url、token、tags、description、executor 即可。

executor 根据时间需要选择，我选择 shell。

### Gitlab Runner 常用命令

```bash
# 进入 bash
docker exec -it gitlab-runner bash

# 修改配置 (要先进入bash)
vim /etc/gitlab-runner/config.toml

# 进入 Runner 用户 (要先进入bash)
# 注意：ci 脚本在这个用户里执行，不是在 bash 进来那个用户
su - gitlab-runner

# 重启
docker restart gitlab-runner

# 停止
docker stop gitlab-runner
```

## CI 自动化部署

我们的后端服务是 Node.js，下面是我们的 CI 脚本 `.gitlab-ci.yml`:

```yml
stages:
  - deploy_develop
  - deploy_release

cache:
  key: ${CI_BUILD_REF_NAME}
  paths:
    - node_modules/

deploy_develop:
  stage: deploy_develop
  only:
    - test
  tags:
    - larp-server
  script:
    - sh deploy/develop.sh

deploy_production:
  stage: deploy_production
  tags:
    - larp-server
  only:
    - master
  script:
    - sh deploy/production.sh
```

CI 脚本语法: https://docs.gitlab.com/ee/ci/yaml/README.html

不建议在 `.gitlab-ci.yml` 写复杂的脚本，复杂脚本建议写成 shell 脚本，例如 develop.sh:

```bash
#!/bin/bash

# 部署到多台服务器
HOSTS=("120.92.180.1 120.92.180.2 120.92.180.3 120.92.180.4")

# 发布目录
PUBLISH_DIR=/data/builds/server-project

# 压缩，并忽略 node_modules
zip -r dist.zip ./* -x "node_modules/*" "dist/*"


# 部署到每台服务器
publish(){
   ssh larp@$1 "mkdir -p ${PUBLISH_DIR}"
   scp dist.zip larp@$1:/${PUBLISH_DIR}
   ssh larp@$1 "cd ${PUBLISH_DIR};unzip -o dist.zip"
   ssh larp@$1 "cd ${PUBLISH_DIR};npm i"
   ssh larp@$1 "cd ${PUBLISH_DIR};npm run build"
   ssh larp@$1 "cd ${PUBLISH_DIR};npm run stop:test;npm run start:test"
}

for host in ${HOSTS[@]}
do
   publish $host
done
```

可以看到，上面的 ssh 是没有提供密码的，实际上 ssh 登录需要密码，但是我们不能在代码中暴露服务器的密码，那要怎么做呢？把 Gitlab Runner 的 id_rsa.pub 内容复制到目标服务器的 authorized_keys 即可。

实际操作过程如下：

```bash
# 先进入 bash
docker exec -it gitlab-runner bash

# 然后进入 gitlab-runner
su - gitlab-runner

# 把 id_rsa.pub 文件容复制到目标服务器的authorized_keys
# 默认是没有 ssh key 的， 需要自己 `ssh-keygen` 生产
cat ~/.ssh/id_rsa.pub
```

注意，CI 的 ssh key 在 gitlab-runner 用户下，不是 `docker exec -it gitlab-runner bash` 进去那个，而是进入 bash 后，再 `su - gitlab-runner` 进去，在这里面生产 ssh key。




## 制作成docker镜像

### 1、在项目里编写Dockfile

```
FROM golang:1.17.5 
 
WORKDIR /app 
 
 
# 使用阿里源替换 debian 源 
RUN sed -i 's/deb.debian.org/mirrors.aliyun.com/g' /etc/apt/sources.list 
RUN apt-get update && \ 
    apt-get install unzip && \ 
    apt-get install libprotobuf-dev -y 
 
ENV HOME=/root 
 
 
COPY go.mod go.sum ./ 
ENV GO111MODULE=on 
ENV GOPROXY=https://goproxy.cn 
 
RUN go install github.com/cosmtrek/air@latest 
RUN go install github.com/go-delve/delve/cmd/dlv@latest 
RUN go install github.com/golang/mock/mockgen@v1.6.0 
RUN go install github.com/vektra/mockery/v2/.../ 
 
 
ENV PATH="${PATH}:${HOME}/.local/bin" 
 
RUN go mod download 
 
COPY . . 
 
EXPOSE 50051 8080 2345 
 
CMD ["air", "-c", ".air.toml"] 
```

### 2、制作docker镜像

```
docker build -f Dockerfile -t docker_repo_usename/hecheng_be_docker_image . 
```

注意，这里的名字一定要是docker_repo_usename/iamge_name，否则不能推到远端。制作完成后查看

```
docker image ls 
```

### 3、将制作好的镜像推到远端

登录

```
docker login 
```

推到远端

```
docker push docker_repo_usename/hecheng_be_docker_image 
```

## 服务
### 

### v2raya
https://v2raya.org/docs/prologue/installation/docker/
```bash
# run v2raya
docker run -d \
  --restart=always \
  --privileged \
  --network=host \
  --name v2raya \
  -e V2RAYA_ADDRESS=0.0.0.0:2017 \
  -v /lib/modules:/lib/modules:ro \
  -v /etc/resolv.conf:/etc/resolv.conf \
  -v /etc/v2raya:/etc/v2raya \
  mzz2017/v2raya
```
