# 设备

## 小米盒子

关于**HybridELEC**:

- HybridELEC 为 CoreELEC 与 EmuELEC 共通的下游分支(fork)
- **HybridELEC是目前唯一确实实现的CoreELEC和EmuELEC在内置存储上双系统的方案**
- HybridELEC 从**底层**改写了CoreELEC和EmuELEC自LibreELEC传承下来的启动机制，从而实现了CoreELEC与EmuELEC开发社区都认为不可能实现的双系统启动
- HybridELEC **不是**官方的CoreELEC/EmuELEC发行版，但最大限度地保留了上游的功能和特色。除了兼容小米盒子3本身，以及实现双系统启动外，并无更新的功能。请参阅[CoreELEC分支](https://github.com/7Ji/HybridELEC/tree/coreelec-9.2)以及[EmuELEC分支](https://github.com/7Ji/HybridELEC/tree/emuelec-4.3)了解对两者的修改。
- HybridELEC **基于每个独立设备**分发，且不同于上游的CoreELEC和EmuELEC，仅以线刷包形式分发。这是因为目前的方案依赖于HybridELEC独有的分区布局，而该布局需要通过修改设备树在线刷阶段实现（尚在开发的基于ng分支的实现将会保证和CoreELEC/EmuELEC本身一致的兼容性和分发策略）



使用许可：

- HybridELEC 以 GPLv2 协议开源，源码请参见[github仓库](https://github.com/7Ji/HybridELEC)
- 由于线刷包中含有自小米官方镜像提取的u-boot，以及初始化使用的DDR，HybridELEC镜像同时含有符合GPLv2协议的代码以及闭源的内容，**不允许将HybridELEC用于商业用途**
- 任何对HybridELEC的修改，在保证以相同协议开源的情况下，是允许的
- 任何对HybridELEC的再分发，***\*目前\**是不被允许的**，这包括试图将之镜像包再次上传到别处的行为；**基于ng分支的不含有自厂商镜像提取内容的镜像包将会放宽该要求**




线刷所需软件/物品：

- HybridELEC的线刷包，请自HybridELEC的[release页面](http://github.com/7Ji/HybridELEC/releases)下载，目前最新的发布为1.2；你也可以自己构建
- Amlogic USB Burning Tool, 我所用的版本为v2.0.8，但也有更新的版本
- 镊子，或类似的导电物品，需要用它短接主板上的触点
- USB A - USB A双公线，你可以使用两根旧USB线diy
- 平头螺丝刀，或类似的平且坚硬的物品，需要用它打开盒子
- 小米盒子3/3c本身，确定它的型号为MDZ-16-AA



线刷流程：

- 完全断开小米盒子3/3c上的任何线缆
- 将小米盒子3/3c拆开，请用坚硬的平头螺丝刀自侧边强行插入，并在确定插入后略加旋转以拓宽开口；你可能需要多个开口才能保证后盖的分离。并不需要将主板拆下
- （可选）使用HDMI线连接小米盒子3/3c和电视/显示器，显示器的输出可以帮助你判断盒子是否启动了安卓系统
- 在电脑上打开Amlogic USB Burning Tool，点击文件-导入，导入img格式的线刷包（自release页面下载的包为xz格式压缩文件，请先解压）
- 在右边的配置栏中，确定你勾选且**仅勾选了擦除flash**，在擦除flash的下拉菜单中，你需要选择**擦除全部**
- 在USB Burning Tool中点击开始
- 使用USB A-to-A 线连接盒子和电脑
- 使用镊子短接主板上靠近红外接收器、屏蔽罩以及一颗螺丝的两个圆形铜色测试点。这会让emmc无法被识别到，从而让SoC回落到线刷模式
- 连接电源
- 如果你听到了新设备识别的提示音，而且USB Burning Tool中开始显示进度，请**立即松开镊子**，否则线刷将会因为emmc无法识别到而失败；如果你没有听到提示音，且USB Burning Tool无显示，或你看到显示器上出现安卓启动画面，则说明设备没有进入线刷模式，请拔掉所有线缆、关闭USB Burning Tool，然后自第4步重做
- 等待线刷完成
- 当进度为100%且底色为绿色时，线刷结束，USB Burning Tool的日志栏会有提示
- 关闭USB Burning Tool并拔掉盒子上的USB线与电源线



使用须知：

- 首次开机时，系统为CoreELEC，请参考官方CoreELEC的设置流程。如果你的原装遥控器为红外，则**原生可用**；如果你的原装遥控器为蓝牙，则必须设置向导结束后进入设置页面配对蓝牙设备。**建议使用USB键盘完成设置向导，你应该不想用红外遥控器打完WiFi和SSH密码**
- 你可以从CoreELEC的电源菜单中点击Reboot to EmuELEC来重启到EmuELEC，或者，你可以在SSH中输入reboot_to_emuelec.sh（前者会调用的脚本）来设置下一次重启至EmuELEC而不实际重启
- 首次以EmuELEC开机时，请参考官方EmuELEC的设置流程，由于小米盒子3/3c的emmc过慢，且初次开机需要向emmc写入400M左右数据，首次开机会较慢。建议使用USB手柄完成首次设置，你可以在之后更换到蓝牙手柄。
- 你可以从EmuELEC的快速访问菜单中点击REBOOT TO COERELEC来重启到CoreELEC，或者，你可以在SSH中输入reboot_to_coreelec.sh（前者会调用的脚本）来设置下一次重启至CoreELEC而不重启
- 只要你以任何方式在CoreELEC侧触发过系统切换，你便可以自U盘启动CoreELEC/EmuELEC，或者，你可以使用[不被支持的该脚本](https://github.com/7Ji/HybridELEC/blob/coreelec-9.2/projects/Amlogic/packages/env-tools/enable_usb_extlinux.sh)来启用自U盘启动Openwrt/Armbian，因为使用后者造成的问题而提交的issue会被**立刻关闭**
- CoreELEC与EmuELEC的data是共享的，两者实际上分别是/data下的coreelec子文件夹和emuelec子文件夹，bind mount到了/storage。你可以在其中一个系统下访问到另一个系统的storage，也可以给另一个系统作出场重置（从CoreELEC里，rm -rf /data/emuelec && mkdir /data/emuelec；从EmuELEC里rm -rf /data/coreelec && mkdir /data/coreelec）。**但是，请确保/data下的coreelec和emuelec子文件夹始终存在，否则你将无法进入系统**



问题反馈：
任何关于HybridELEC**镜像本身**的问题，请提交至HybridELEC的[issue页面](https://github.com/7Ji/HybridELEC/issues)。但请注意，我不会修复上游CoreELEC和EmuELEC的问题，HybridELEC中的CoreELEC与EmuELEC以尽可能接近官方发布的样子呈现，**即使这包含了上游的bug**

https://www.right.com.cn/forum/forum.php?mod=viewthread&tid=8231697&extra=page%3D1%26filter%3Dtypeid%26typeid%3D54&page=1