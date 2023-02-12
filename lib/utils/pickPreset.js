// 选择技术栈选项
const chalk = require('chalk')
const inquirer = require('inquirer');
async function presetFn(projectName) {
  //1 可自定义添加仓库地址
  //2 作出可选择配置
  let info = `Please pick a preset: `
  const { selectInfo } = await inquirer.prompt([
    {
      name: 'selectInfo',
      type: 'list',
      message: `${info}`,
      choices: [
        { name: 'Default ([Vue 2]) ', value: 'vue2' },
        { name: 'Default ([Vue 3])', value: 'vue3' },
        { name: 'React', value: 'React' },
        { name: 'Cancel', value: false }
      ]
    }
  ])
  if (!selectInfo) {
    return
  } else if (selectInfo === 'vue2') {
    require('../utils/downloadRepo')(projectName, selectInfo)
  } else if (selectInfo === 'vue3') {
    require('../utils/downloadRepo')(projectName, selectInfo)
  } else if (selectInfo === 'React') {
    console.log(chalk.yellow(`感谢你的使用，该模块正在完善中...`))
    // require('../utils/downloadRepo')(projectName, action)
  }


}
module.exports = {
  presetFn
}