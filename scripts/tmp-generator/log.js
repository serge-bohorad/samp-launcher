/* eslint-disable @typescript-eslint/explicit-function-return-type */
function error(message) {
  console.log('\x1b[31m%s\x1b', 'ERROR! ' + message, '\x1b[0m\x1b')
}

function warning(message) {
  console.log('\x1b[33m%s\x1b', 'WARNING! ' + message, '\x1b[0m\x1b')
}

function success(message) {
  console.log('\x1b[32m%s\x1b', message, '\x1b[0m\x1b')
}

module.exports = {
  error,
  warning,
  success
}
