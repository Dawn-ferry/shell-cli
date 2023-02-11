
const { gitUrl } = require('../config/repoConfig')
const { promisify } = require('util')
const download = promisify(require('download-git-repo'))
const fs = require('fs-extra');
const handlebars = require("handlebars");
const { spawnCommand } = require("./terminal")
const { hasYarn } = require('./env')
const { successColor, errorColor, warningColor, blueColor } = require('../utils/colorCode')
const { iconInfo, iconError, iconSuccess, iconWarning } = require('../utils/iconCode')
const { name, author, description } = require('../../package.json')

const isWin32 = process.platform === 'win32'
async function downloadRepo(projectName, selectInfo) {
  console.log(iconInfo, blueColor('shellcli creating a project,waiting...'));
  console.log(iconWarning, warningColor("Don't perform other operations..."));
  await download(gitUrl[selectInfo], projectName, { clone: true }, async (err) => {
    if (err) {
      console.log('')
      console.log(iconError, errorColor("Error,Please try again"));
    } else {
      console.log('')
      console.log(iconSuccess, successColor(`Successfully created project ${successColor(projectName)}`));
      const packagePath = `${projectName}/package.json`
      const packageContent = fs.readFileSync(packagePath, "utf-8")
      const packageResult = handlebars.compile(packageContent)({ name, author, description })
      fs.writeFileSync(packagePath, packageResult)
      // darwin
      try {
        if (hasYarn) {
          await spawnCommand(isWin32 ? 'yarn.cmd' : "yarn", [''], { cwd: `./${projectName}` })
        } else {
          await spawnCommand(isWin32 ? 'npm.cmd' : "npm", ['install'], { cwd: `./${projectName}` })
        }
      } catch (error) {
        console.log('error:', error);
      }
    }
  })
}

module.exports = downloadRepo;