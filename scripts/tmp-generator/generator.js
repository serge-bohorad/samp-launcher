/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/no-var-requires */
const { resolve, join } = require('path')
const fs = require('fs')

const fileContents = require('./file-contents')
const log = require('./log')

const pathApp = resolve(__dirname, '../../', 'packages/renderer/app')

const files = {
  'index.tsx': fileContents.index,
  'types.ts': fileContents.types,
  'styles.scss': ''
}

function generate(name) {
  const path = join(pathApp, name)

  if (fs.existsSync(path)) {
    log.warning(`Directory '${path}' is already exist!`)
    return
  }

  fs.mkdir(path, (err) => {
    if (err) {
      log.error(err.message)
      return
    }

    Object.entries(files).forEach(([file, content]) =>
      fs.appendFile(`${path}/${file}`, content, () => 0)
    )

    log.success('Files successfully created!')
  })
}

module.exports = {
  generate
}
