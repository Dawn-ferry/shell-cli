// 增加自己option
const program = require('commander')
const helpOption = () => {
  program.option('-w --code', 'a code hahha')
  program.option('-d --dest <dest>', 'a code destination ,eg: -d /src/component')
  program.option('-f --framework <framework>', 'your framework')
}

program.on('create', function () {
  console.log('===================');
  console.log('other');
  console.log('    other option');
})
module.exports = helpOption