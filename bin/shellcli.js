#! /usr/bin/env node
const program = require('commander')
program.version(require('../package.json').version)
const helpOption = require('../lib/core/help')

helpOption()

program.command('create <project-name> [others...]').description('create a new project powered by code-cli')
  .action((projectName, options) => {
    console.log('projectName', projectName);
    require('../lib/core/create')(projectName, options)


  })

program.parse(process.argv)
