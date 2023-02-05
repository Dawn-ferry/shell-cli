
const chalk = require('chalk')


const successColor = chalk.greenBright;
const errorColor = chalk.redBright;
const warningColor = chalk.yellowBright;
const blueColor = chalk.blueBright;
function exit(error) {
  if (error && error instanceof Error) {
    console.log(chalk.red(error.message))
  }
  process.exit(-1);
}


module.exports = {
  successColor,
  errorColor,
  warningColor,
  blueColor,
  exit
}


