// 引入向导模块，实现命令行交互式一问一答
const inquirer = require('inquirer');
// 用于读取文件并返回其内容
const fs = require('fs-extra');
const path = require('path');
const chalk = require('chalk')
const { presetFn } = require('../utils/pickPreset')
// 配置脚手架 创建命令功能
async function createCommands(projectName, args) {
  const currentPath = process.cwd();
  // 获取项目的真实路径
  const filePath = path.join(currentPath, `${projectName}`);
  // 判断文件是否存在 
  if (fs.existsSync(filePath)) {
    let info = `Target directory ${filePath}  already exists. Pick an action:`
    const { action } = await inquirer.prompt([
      {
        name: 'action',
        type: 'list',
        message: `Target directory ${chalk.cyan(info)} already exists. Pick an action:`,
        choices: [
          { name: 'Overwrite', value: 'overwrite' },
          { name: 'Cancel', value: false }
        ]
      }
    ])
    if (!action) {
      return
    } else if (action === 'overwrite') {
      console.log(`\nRemoving ${chalk.cyan(filePath)}...`)
      await fs.remove(filePath)
      presetFn(projectName)
    }
  } else {
    presetFn(projectName)

  }

}


module.exports = createCommands;