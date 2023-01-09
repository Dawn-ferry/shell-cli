
const chalk = require('chalk')

// const success = chalk.green;
const successColor = chalk.hex('#7CFC00').bold;
const errorColor = chalk.bold.red;
// #FFA500
const warningColor = chalk.hex('#e6a23c').bold;
module.exports = {
  successColor,
  errorColor,
  warningColor
}



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
