
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

// console.log(successColor('ww'));
// console.log(error('Error!'));
// console.log(warning('Warning!'))
// console.log(success('success!'))
// console.log(chalk.green(
//   'I am a green line ' +
//   chalk.blue.underline.bold('with a blue substring') +
//   ' that becomes green again!'
// ));
// console.log(chalk.red('Hello', chalk.underline.bgBlue('world') + '!'));
// console.log(chalk.blue.bgRed.bold('Hello world!'));
// console.log(chalk.blue('Hello', 'World!', 'Foo', 'bar', 'biz', 'baz'));
// // 
// console.log(chalk.rgb(123, 45, 67).underline('Underlined reddish color'));
// console.log(chalk.hex('#DEADED').bold('Bold gray!'));
// console.log(chalk.hex('#7CFC00').bold('Bold gray!'));
