# 前言
> 在开发Reactnative的表单页面开发时，我们经常会填写各种表单信息，当我们对文本框进行编辑时，这时就需要弹出键盘，编辑完成时要正常的收起键盘。对于Android平台还好，系统会自动帮我们处理了键盘的弹出和收起。但是对于iOS平台，键盘的弹出和收起需要我们自己去控制，这样就无形的增加了开发难度和效率。今天作者就给大家分享下iOS下如何也能像Android一样的自动管理键盘。

# iOS预览效果图

![iOS](http://ovyjkveav.bkt.clouddn.com/17-11-6/19108501.jpg)

# Android预览效果图

![Android](http://ovyjkveav.bkt.clouddn.com/17-11-6/52976235.jpg)

# iOS如何实现自动管理键盘

* 其实实现方法非常之简单，我们只需要将示例工程中的IQKeyboardManager整个文件夹拖到你自己的iOS工程即可，不需要写一行iOS代码，就是这么简单。

![IQ](http://ovyjkveav.bkt.clouddn.com/17-11-6/59462282.jpg)

# 简书详解
**[http://www.jianshu.com/p/99c0adcf6052](http://www.jianshu.com/p/99c0adcf6052)**

# 总结
> 在iOS平台下实现自动管理键盘你只需要将`IQKeyboardManager`文件夹添加到自己的iOS工程即可，Android平台不需要添加其他库，系统自动处理。
