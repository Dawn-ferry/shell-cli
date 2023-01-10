
const inquirer = require('inquirer');
const chalk = require('chalk')
const path = require('path');
const deletePath = require('./deleteFile')


//是否需要填写项目简介

const { isFill } = await inquirer.prompt([
  {
    type: "confirm",
    message: "Whether to fill in the project description？",
    name: "isFill",
  }
])
if (isFill) {
  inquirer
    .prompt([
      {
        type: "input",
        name: "author",
        message: "author"
      }, {
        type: "input",
        name: "description",
        message: "description"
      }
    ]).then((answers) => {

      const packagePath = `${projectName}/package.json`

      const packageContent = fs.readFileSync(packagePath, "utf-8")

      const packageResult = handlebars.compile(packageContent)(answers)
      console.log(packageResult);

      fs.writeFileSync(packagePath, packageResult)
    })
    .catch((error) => {
      console.log('error', error);
    });
}




// 如果用户命令参数带projectName，只需要询问用户选择模板
// if (projectName) {
//   questions.splice(0, 1);
// }

// // 执行用户交互命令
// inquirer.prompt(questions).then(result => {
//   if (result.projectName) {
//     projectName = result.projectName;
//   }
//   const templateName = result.template;
//   // 获取projectName templateName
//   console.log("项目名称：" + projectName)
//   console.log("模板名称：" + templateName)

//   if (!templateName || !projectName) {
//     // 退出
//     console.log('err', error);
//     // if (error && error instanceof Error) {
//     //   console.log(chalk.red(error.message))
//     // }
//     // process.exit(-1);
//   }
//   // 往下走
//   checkProjectExits(projectName, templateName); // 检查目录是否存在
// }).catch(error => {
//   // logger.exit(error);
//   console.log('err2', error);
//   // if (error && error instanceof Error) {
//   //   console.log(chalk.red(error.message))
//   // }
//   // process.exit(-1);
// })

// checkProjectExits(projectName); // 检查目录是否存在


// function exit(error) {
//   if (error && error instanceof Error) {
//     console.log(chalk.red(error.message))
//   }
//   process.exit(-1);
// }


// 判断文件是否存在
// function checkProjectExits(projectName) {
//   console.log('2', projectName);
//   const currentPath = process.cwd();
//   const filePath = path.join(currentPath, `${projectName}`); // 获取项目的真实路径
//   console.log('filePath', filePath);
//   if (fs.existsSync(filePath)) { // 判断文件是否存在 询问是否继续
//     inquirer.prompt({
//       type: 'confirm',
//       name: 'out',
//       message: `${projectName}文件夹已存在，是否覆盖？`
//     }).then(data => {
//       if (!data.out) { // 用户不同意
//         exit();
//       } else {
//         // 删除文件夹
//         // spinner.logWithSpinner(`删除${projectName}...`)
//         deletePath(filePath)
//         // spinner.stopSpinner(false);
//         // startDownloadTemplate(projectName, templateName) // 开始下载模板
//       }
//     }).catch(error => {
//       exit(error);
//     })
//   } else {
//     // startDownloadTemplate(projectName, templateName) // 开始下载模板
//   }
// }

