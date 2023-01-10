// 增加自己option
const program = require('commander')

const helpOption = () => {
  program.option('-w --code', 'a code hahha')
  program.option('-d --dest <dest>', 'a code destination ,eg: -d /src/component')
  program.option('-f --framework <framework>', 'your framework')

  // 指令监听
  // program.on('--help', function () {
  //   console.log('');
  //   console.log('other');
  //   console.log('    other option');
  // })
}
// function helpOption() {
//   program.option('-w --code', 'a code hahha')
//   program.option('-d --dest <dest>', 'a code destination ,eg: -d /src/component')
//   program.option('-f --framework <framework>', 'your framework')

//   // 指令监听
program.on('create', function () {
  console.log('===================');
  console.log('other');
  console.log('    other option');
})
// 
module.exports = helpOption