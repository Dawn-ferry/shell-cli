/* 


*/

// 引入向导模块，实现命令行交互式一问一答
const inquirer = require('inquirer');

// 用于读取文件并返回其内容
const fs = require('fs-extra');
const path = require('path');
const chalk = require('chalk')

// 配置脚手架 创建命令功能
async function createCommands(projectName, args) {
  const currentPath = process.cwd();
  const filePath = path.join(currentPath, `${projectName}`); // 获取项目的真实路径
  if (fs.existsSync(filePath)) { // 判断文件是否存在 
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
    require('../utils/downloadRepo')(projectName)
  }


}










// inquirer.prompt([
//   {
//     type: "list",
//     message: `${info}`,
//     name: "isFile",
//     default: "Overwrite",
//     prefix: "☆",
//     // suffix: "****",
//     choices: [
//       "Overwrite",
//       "Cancel"
//     ],
//   }
// ])
//   then(answer => {
//   console.log(answer);
//   if (answer.isFile === 'Cancel') {
//     console.log('11');
//     exit();
//   } else {
//     console.log('22');
//     await fs.remove(filePath)
//     // deletePath(filePath)
//   }
// }).catch(error => {
//   exit(error);
// })







// 1.clone 仓库项目
/* 
Error: 'git checkout' failed with status 1
这里出现报错的原因是 download-git-repo 默认拉的是master分支，当没有这个分支时就会异常，虽然能成功拉下
解决：1，指定特定的分支 2，加个 master 分支
*/
// await download(vueRepo, projectName, { clone: true }, (err) => {
//   console.log(iconInfo, blueColor('正全力加载中...'));
//   console.log(iconWarning, warningColor('请勿执行其他操作...'));
//   if (err) {
//     console.log(iconError, errorColor("下载失败！"));
//   } else {
//     // console.log(iconSuccess, successColor("下载成功！"));
//     // 把项目下的package.json文件读取出来
//     // 使用向导的方式即一问一答的方式（这里采用inquire库来实现）采集用户输入的数据，然后将数据解析到package.json文件中
//     inquirer
//       .prompt([
//         /* 这里放置想要询问的字段 */
//         {
//           type: "input",
//           name: "name",
//           message: "请输入项目名称"
//         }, {
//           type: "input",
//           name: "author",
//           message: "请输入作者名称"
//         }, {
//           type: "input",
//           name: "description",
//           message: "请输入项目简介"
//         }
//       ]).then((answers) => {
//         // answers就是一个对象，对象里面存储了name、author、description三个属性字段
//         // console.log('answers', answers);
//         // answers解析替换到package.json文件中
//         const packagePath = `${projectName}/package.json`
//         // 读取package.json文件，这里是使用的fs模块的readfilesync函数，
//         // 第一个参数是指文件路径，第二个参数是读取文件方式，这里是utf8表示读取的是字符串，若没有utf8则表示读取的是二进制数据
//         const packageContent = fs.readFileSync(packagePath, "utf-8")
//         // 使用handlebars来将文件编译为渲染函数,然后将从命令行中获取到的数据解析到packageContent中，就得到了已完成字段插入解析完成后的package.json
//         const packageResult = handlebars.compile(packageContent)(answers)
//         console.log(packageResult);
//         // 最后将结果packageResult重新写入到package.json文件中
//         fs.writeFileSync(packagePath, packageResult)
//       })
//       .catch((error) => {
//         console.log('error', error);
//       });
//   }
// })
// 2, 安装依赖 ，执行 npm i
// 使用webpack实现 3，启动项目 npm run serve,4, 打开游览器

// }

module.exports = createCommands;