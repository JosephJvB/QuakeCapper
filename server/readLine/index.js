const readline = require('readline')
const rw = require('./readWrite')

// rw.newRun()
// rw.logTime()

begin()

function create () {
  return readline.createInterface({
    input: process.stdin,
    output: process.stdout
  })
}

function begin () {
  console.log('')
  const rl = create()
  rl.on('line', (input) => {
    console.log(`Received: ${input}`)
  })
}
