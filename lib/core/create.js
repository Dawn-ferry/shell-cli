

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
    require('../utils/downloadRepo')(projectName)
  }

}


module.exports = createCommands;