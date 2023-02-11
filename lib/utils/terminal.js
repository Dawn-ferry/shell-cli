const { spawn } = require('child_process');
// 开启子进程
function spawnCommand(...args) {
  return new Promise((resolve, rejects) => {
    const childProcess = spawn(...args);
    childProcess.stdout.pipe(process.stdout)
    childProcess.stderr.pipe(process.stderr)
    childProcess.on('close', () => {
      resolve()
    })
  })
}
module.exports = {
  spawnCommand
}