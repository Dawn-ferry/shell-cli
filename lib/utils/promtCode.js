
const inquirer = require('inquirer');
const chalk = require('chalk')
const path = require('path');
const deletePath = require('./deleteFile')
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

      fs.writeFileSync(packagePath, packageResult)
    })
    .catch((error) => {
      console.log('error', error);
    });
}






