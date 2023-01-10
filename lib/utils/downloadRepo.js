
const { vueRepo } = require('../config/repoConfig')
// 将回调函数嵌套的形式 转为 promise  形式
const { promisify } = require('util')
const download = promisify(require('download-git-repo'))
// 用于读取文件并返回其内容
const fs = require('fs-extra');
// 引入handlebars模块，用于解析项目中的package.json文件
const handlebars = require("handlebars");
//下载包
const { spawnCommand } = require("./terminal")

// 美化
const { successColor, errorColor, warningColor, blueColor } = require('../utils/colorCode')
const { iconInfo, iconError, iconSuccess, iconWarning } = require('../utils/iconCode')

const { name, author, description } = require('../../package.json')
async function downloadRepo(projectName) {
  console.log(iconInfo, blueColor('codeCli creating a project,waiting...'));
  console.log(iconWarning, warningColor("Don't perform other operations..."));
  await download(vueRepo, projectName, { clone: true }, async (err) => {
    if (err) {
      console.log('')
      console.log(iconError, errorColor("Error,Please try again"));
    } else {

      console.log('')
      console.log(iconSuccess, successColor(`Successfully created project ${successColor(projectName)}`));
      //  重新写入下package.json
      const packagePath = `${projectName}/package.json`
      const packageContent = fs.readFileSync(packagePath, "utf-8")
      const packageResult = handlebars.compile(packageContent)({ name, author, description })
      // console.log(packageResult);
      fs.writeFileSync(packagePath, packageResult)
      const yarn = process.platform === 'win32' ? 'yarn cmd' : "yarn"
      await spawnCommand(yarn, ['install'], { cwd: `./${projectName}` })

    }
  })
}


/* 



*/
module.exports = downloadRepo;