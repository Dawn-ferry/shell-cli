#! /usr/bin/env node
// 系统动态的去查找node
// 用于指明该脚本文件要使用 node 来执行。
// shabang 相当于一个指令会根据 路径执行文件


/* 

存放 所有终端命令符 

*/

const program = require('commander')
program.version(require('../package.json').version)
// program.version(require('./package.json').version, '-v,--version')
const helpOption = require('../lib/core/help')

// 帮助与可选信息
helpOption()
// 生成模版

// <>尖括号为必须参数，[]为可选参数
program.command('create <project-name> [others...]').description('create a new project powered by code-cli')
  .action((projectName, options) => {
    console.log('projectName', projectName);
    require('../lib/core/create')(projectName, options)


  })

// 控制台如何解析 program.version
// 库 得告诉他 交给parse函数解析， process.argv 这是node进程 所有的指令参数都能拿到
// program 在进行输出
program.parse(process.argv)