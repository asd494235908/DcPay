# Dcpay个人收款支付系统
[![](https://img.shields.io/badge/version-1.0-brightgreen)](https://github.com/asd494235908/DcPay)
[![GitHub stars](https://img.shields.io/github/stars/asd494235908/DcPay.svg?style=social&label=Stars)](https://github.com/asd494235908/DM)
[![GitHub forks](https://img.shields.io/github/forks/asd494235908/DcPay.svg?style=social&label=Fork)](https://github.com/asd494235908/Dm)
 - [若图片显示不完整请跳转码云](https://gitee.com/dcmaomi/Dm)
### 项目已部署，在线Demo
- Dcpay前台：https://dcpay.dcmaomi.com
- 后台管理系统：https://tm.dcmaomi.com
- Swagger接口文档：https://www.dcmaomi.com:3000/api/Swagger
- 项目综合项目：https://www.dcmaomi.com

### v1.0  支付宝官方接口 自动回调！[立即获取源码](https://dcpay.dcmaomi.com/pay)
 - v1.0暂支持支付宝当面付(官方) 未支持微信(需要营业执照等)
 - 实现订单支付标识 解决无法识别支付人问题
 - 实现移动端支付方案 支持H5、APP、小程序
 - 扫码体验

    ![](https://www.dcmaomi.com:3010/serverImage/20210305222641_12153.png)
    #### 注：v1.0源码（最新）获取方式 
    - 进入[DcPay](https://dcpay.dcmaomi.com/pay)成功支付捐赠测试后 将自动发至你所填写的邮箱中
### 声明
> 此系统只针对个人开发收款支付，实际可应用到实现，无法商用~~！可勉强供真正个人商用！日入百万千万的请绕道！当然你还可将此项目当作入门级的vue.js javascript练习项目

### 个人申请支付接口现状
- 原生支付宝，微信支付

    - `支付宝微信只服务于有营业执照、个体工商户的商户。截止目前（2020-01-01）无法以个人身份（或以个人为主体）直接申请API。`

    - 结论：不可行

- 关联企业支付宝账号

    - `即新建企业账户，然后采用已经实名认证了的企业账户关联该账户，用其实名主体完成新账户的实名认证。一系列操作完成后，新的账户具有和企业账户一样的资质可以申请API。`

    - 结论：如果条件允许，推荐此方案

- 聚合支付工具，Ping++等

    - `就是个第四方聚合支付工具，简化了接入开发流程而已，个人开发者仍然需要去申请所需接口的使用权限。`

    - 结论：不可行

- 第四方聚合支付

    - `支付资金进入官方账号，自己再进行提现操作。需要开通域名，提现手续费较高，支付页面不支持自定义。另外，对于此种类型的聚合支付平台，隐藏着极高的跑路风险。`

    - 结论：不推荐
- 有赞
    - `通过有赞微商城支付接口收款。`
    - 结论：不推荐，需手动提现，不免费，费用6800/年起，一旦风控资金很难取出。
- 借助拼多多店铺、淘宝代付功能、微博红包、钉钉红包等第三方APP的支付功能
    - 结论：不推荐，可能随时被风控。

- 挂机监听软件，PaysApi、绿点支付等

    - `本质上依然是采用挂机监听的策略，但针对的是移动端支付宝或微信的收款通知消息`
    - 结论：成本高，配置麻烦，需24小时挂台安卓手机，不免费
- 其他基于Xposed挂机监听软件
    - `基于virtual xposed hook相关技术，可自动生成任意备注金额收款码 参考抢红包外挂`
    - 结论：成本高，配置麻烦，需24小时挂台安卓手机，量大易触发风控、不免费，黑产适用
- Payjs （疑使用[微信小微商户](https://pay.weixin.qq.com/index.php/core/affiliate/micro_intro)）
    - 结论：仅支持微信、不免费、使用官方接口收取代开费用以及额外手续费
- 国外支付，PayPal、Strip：不可用
### Dcpay
  - 支持支付宝、微信，资金直接到达本人账号，官方通道自动回调，免签通道个人移动端一键审核即时回调，不需提现，不需备案，完全免费，不干涉监听任何支付数据，个人收款0风险方案（前提正规业务小量金额）
  - 结论：个人收款较少的支付业务推荐使用

### 开发流程原理（以下为免签通道原理，官方通道7*24小时自动回调）
  - 用户确认订单，需填写邮箱地址(用于邮件通知)等信息
   ![](https://www.dcmaomi.com:3010/serverImage/20210305224404_11879.png)
  - 配置你的个人收款码，二维码图片配置在[后端](https://github.com/asd494235908/DM-Server) ruter\pay.js 文件夹中，isWeixinUrl和isPayUrl方法中 已有 alipay（对应支付宝收款码）、wechat（微信）文件夹存放相应收款码。可设置固定金额二维码链接或自定义金额二维码链接(自动生成二维码)，当然聪明的你还可以在 pay.js 中自定义业务逻辑，修改JS代码即可。
  ![](https://www.dcmaomi.com:3010/serverImage/20210305225314_17254.png)
  - 下载对应邮箱App，打开支付宝、微信收款语言通知等提醒，收到到款通知后，查看审核邮件，在邮件中根据备注号进行该交易任意人工审核确认操作完成回调，未到账的不用管，系统定时自动处理
  ![](https://dcpay.dcmaomi.com/img/pay_1.5d143819.jpg)
  ![](https://dcpay.dcmaomi.com/img/pay_2.1b5295ff.jpg)
  ![](https://dcpay.dcmaomi.com/img/pay_3.116128f5.jpg)
### 疑问
  - 如何确定收款来自哪笔交易订单？
    - 根据收款码中备注标号与审核邮件中的标识号匹配
  - 半夜怎么办？
     - 回复链接有一天时效(官方24小时)
  - 为什么不做自动监听挂机App？
     - 迟早被封的为什么要做？...DcPay主要面向真正个人如学生群体，也目前成本最低最稳定的方案，免费!
     - 不想受限制、不想用APP监听、还想免费？请用我这套，哈哈
### 前端所用技术 [后台](https://github.com/asd494235908/TerMinal) 
- 后台页面
    - [vue 2.x](https://cn.vuejs.org/)：vue全家桶
    - [echarts](http://echarts.apache.org/zh/)：图表插件
    - [Element](https://element.eleme.cn/#/zh-CN)：Element-UI 组件库
    - 第三方接口
    - [中国天气网](https://cj.weather.com.cn/plugin/standard)：中国天气网 天气插件
- 前台页面
    - [vue 3.0](https://www.vue3js.cn/docs/zh/) + Vuex + Vue Router + ES6 + webpack + axios + Node.js
    - [Ant Desing vue](https://2x.antdv.com/docs/vue/introduce-cn/)：Ant Desing vue 组件库
### 后端所用技术 [后端](https://github.com/asd494235908/DM-Server) 
- 主要
   - [Node Js](https://nodejs.org/zh-cn/)：Node.js
   - [express](https://www.expressjs.com.cn/)：基于 Node.js 平台， Web 开发框架
   - [mysql](https://www.mysql.com/)：基于 Node.js 平台， Web 开发框架
   - [Swagger2](https://www.dcmaomi.com:3000/api/swagger/#/)：Api文档生成
   - [svg-captcha](https://www.npmjs.com/package/svg-captcha)：登录验证码
   - [silly-datetime](https://www.npmjs.com/package/silly-datetime)：时间格式化工具
   - [qr-image](https://www.npmjs.com/package/silly-datetime)：链接生成二维码
- 第三方接口
  - 高德地图城市列表API：获取全国省/市/县(区)三级列表 需要注册appid
  - [天气api](http://www.tianqiapi.com/index/doc?version=day)：根据Ip地址获取城市天气（服务器主要用来获取城市）需要注册appid
- 第三方SDK
  - [alipay-sdk](http://www.tianqiapi.com/index/doc?version=day)：支付宝支付Sdk
- 服务器
  - [宝塔建站](https://www.bt.cn/)：宝塔建站
  - [Apache](http://httpd.apache.org/)
### DcPya本地运行
- 前后端分离请先运行[后端](https://github.com/asd494235908/DM-Server)
- node.js 版本(v12.18.3) 
- vue-cli 版本(@vue/cli 4.5.4)
- 下载zip直接解压或安装git后执行克隆命令 `https://github.com/asd494235908/DcPay.git`
- 右键进入PowerShell 


初始化项目
```
npm install
```

```javascript
// src/main.js 配置
axios.defaults.baseURL = "http://您的本地服务器地址:端口号"  //注意http与https
```
运行项目
```
npm run serve
```

### 作者其他项目推荐
- [DM商城：分布式电商购物商城](https://www.dcmaomi.com/)
  ![](https://www.dcmaomi.com:3010/serverImage/20210305011146_17326.png "前台首页")
- [DM微信小程序 APP前端 现已开源！](https://github.com/asd494235908/DM-Mobile-terminal)
    
    [![WX20190924-234416@2x.png](https://www.dcmaomi.com:3010/serverImage/20210305010710_12523.png)](https://github.com/asd494235908/DM-Mobile-terminal)

- [DM-TM后端](https://github.com/asd494235908/TerMinal)

    ![](https://www.dcmaomi.com:3010/serverImage/20210305011146_16923.png)

### 技术疑问交流
- 免费交流群 `949139553` [![](http://pub.idqqimg.com/wpa/images/group.png)](https://qm.qq.com/cgi-bin/qm/qr?k=dtD6X04E3q7v3C8wuOnUENoW5S7hdGHO&jump_from=webapi)
- 作者邮箱 asd494235908@qq.com
### 商用授权
- 个人学习使用遵循GPL开源协议
- 商用需联系作者低价授权
### [捐赠](https://dcpay.dcmaomi.com/pay)
