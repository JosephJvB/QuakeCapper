const readline = require('readline')

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
