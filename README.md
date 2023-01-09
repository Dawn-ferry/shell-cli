## 说明文档

#### 相关参考文献

```
https://github.com/coderwhy/coderwhy

```

```
将终端命令与文件链接起来
npm link
在本地开发npm模块的时候，将npm 模块链接到对应的运行项目中去，方便地对模块进行调试和测试

```

#### 坑点

```
1.Error: 'git clone' failed with status 128

解决：地址要保证使用的是https模式，地址加前缀，例如：

direct:https://github.com/luochenLing/XXX.git

2.Error: 'git checkout' failed with status 1
解决：保证你拥有master分支（不指定分支的情况），我之前的项目就只有一个分支叫main，不符合分支要求，所以会报错，但是他也会下载下来，只是提示不好看
但是如果指定分支的话不会报错，例如：

 direct:https://github.com/luochenLing/XXX.git#main

就会下载main分支下的了


关于inquirer 执行时报错
降低版本 npm i inquirer@8
最新版本不支持使用require()导入
"inquirer": "^8.2.5"

```

#### 美化工具

```
log-symbols
API
console.log(logSymbols.success/info/warning/error, 'Finished successfully!');


```
