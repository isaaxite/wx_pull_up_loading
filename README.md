## 概述

本项是模拟微信下拉加载的组件而制作的下拉加载组件。本组件基于微信的scroll-view组件，通过绑定`scroll-view`的触底回调函数触发。通过模块化的方式编写，实现了非常好的封装。简单易用。



## 下载

`https://github.com/issaxite/wx_pull_up_loading`



## 预览

`git clone`该项目，并使用[微信开发工具]打开该项目，直接运行即可，示例代码在`/pages/index/`目录下。

<p align="center"><img src="./pages/asset/image/pull_up_loading.gif"></p>


## 使用

1. 复制本项下`pullUpLoading`目录；

2. 在app.wxss中引入组件的wxss文件：

   ```css
   @import './pullUpLoading/main/index.wxss';
   ```

3. 在目标wxml页面引入组件：

   3.1 引入组件：

   ```xml
   <import src="/pullUpLoading/main/index.wxml"/>
   ```

   3.2 使用组件：
	
	如下，首先是需要一个`scroll-view`作为基础，绑定一个[触底回调事件]，接着是在`scroll-view`内部的底部使用`template`引入组件，`template`的参数是固定的。

   ```xml
   <scroll-view scroll-y="true" bindscrolltolower="pullUpLoadingEvent">
	<!-- scroll-view-item... -->
	<template is="pull-up-loading" data="{{ ...pullUpLoading }}"></template> 
   </scroll-view>
   ```
4. 在目标页面的js文件中引入`pullUpLoading`下的`index.js`文件，该文件包含两个模块：`extend`，`pullUpLoading`

   ```js
   const { extend, pullUpLoading } = require("../../pullUpLoading/index.js");
   ```

   然后，使用`extend`合并当前文件对象与`pullUpLoading`。具体可以参考pages/index/index.js；
5. 具体可以参考`/pages/index`下的使用。


## 开源协议
本项目基于 [MIT](https://zh.wikipedia.org/wiki/MIT%E8%A8%B1%E5%8F%AF%E8%AD%89)协议，请自由地享受和参与开源。

## 贡献

如果你有好的意见或建议，欢迎提 [issue] 或 [PR]，为优化本项目贡献力量

[issue]: https://github.com/issaxite/wx_pull_up_loading/issues/new
[PR]: https://github.com/issaxite/wx_pull_up_loading/compare
[MIT]: http://opensource.org/licenses/MIT
[MIT]: http://opensource.org/licenses/MIT
[触底回调事件]: https://mp.weixin.qq.com/debug/wxadoc/dev/component/scroll-view.html
[微信开发工具]: https://mp.weixin.qq.com/debug/wxadoc/dev/devtools/download.html
[小程序简易教程]: https://mp.weixin.qq.com/debug/wxadoc/dev/
[小程序框架介绍]: https://mp.weixin.qq.com/debug/wxadoc/dev/framework/MINA.html
