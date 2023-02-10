const inquirer = require('inquirer');
const fs = require('fs-extra');
const path = require('path');
const chalk = require('chalk')

async function createCommands(projectName, args) {
  const currentPath = process.cwd();
  const filePath = path.join(currentPath, `${projectName}`);
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
      require('../utils/downloadRepo')(projectName)
    }
  } else {
    //1 可自定义添加仓库地址
    //2 作出可选择配置
    let info = `Please pick a preset: `
    const { action } = await inquirer.prompt([
      {
        name: 'action',
        type: 'list',
        message: `${info}`,
        choices: [
          { name: 'Default ([Vue 2]) ', value: 'vue2' },
          { name: 'Default (Vue 3)', value: 'vue3' },
          { name: 'React', value: 'React' },
          { name: 'Cancel', value: false }
        ]
      }
    ])
    if (!action) {
      return
    } else if (action === 'vue2') {
      require('../utils/downloadRepo')(projectName)
    } else if (action === 'vue3') {
      require('../utils/downloadRepo')(projectName)
    } else if (action === 'React') {
      require('../utils/downloadRepo')(projectName)
    }
  }

}


module.exports = createCommands;