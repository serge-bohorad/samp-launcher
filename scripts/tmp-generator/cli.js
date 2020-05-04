/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/no-var-requires */
const { generate } = require('./generator')
const log = require('./log')

function init() {
  const args = process.argv.slice(2)

  const name = args[0]

  if (!name) {
    log.warning('Path not provided!')
    return
  }

  generate(name)
}

init()
