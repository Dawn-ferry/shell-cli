
const { execSync } = require('child_process')
const path = require('path')
let _hasYarn
const _yarnProjects = null
let _hasGit
const _gitProjects = null

// env tool
exports.hasYarn = () => {
  if (process.env.VUE_CLI_TEST) {
    return true
  }
  if (_hasYarn != null) {
    return _hasYarn
  }
  try {
    execSync('yarn --version', { stdio: 'ignore' })
    return (_hasYarn = true)
  } catch (e) {
    return (_hasYarn = false)
  }
}


exports.checkYarn = () => {
  if (!exports.hasYarn()) throw new Error(`The project seems to require yarn but it's not installed.`)
  return exports.hasYarn()
}
exports.hasGit = () => {
  if (process.env.VUE_CLI_TEST) {
    return true
  }
  if (_hasGit != null) {
    return _hasGit
  }
  try {
    execSync('git --version', { stdio: 'ignore' })
    return (_hasGit = true)
  } catch (e) {
    return (_hasGit = false)
  }
}

