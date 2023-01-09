#! /usr/bin/env node
// shabang 相当于一个指令会根据 路径执行文件

const program = require('commander')
program.version(require('./package.json').version)
// program.version(require('./package.json').version, '-v,--version')
const helpOption = require('./lib/core/help')
const createCommands = require('./lib/core/create')
// 帮助与可选信息
helpOption()
// 生成模版
createCommands()
// 控制台如何解析 program.version
// 库 得告诉他 交给parse函数解析， process.argv 这是node进程 所有的指令参数都能拿到
// program 在进行输出
program.parse(process.argv)