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
  console.log('***')
  rw.newRun()
  setTimeout(rw.nextMap, 500)
  setTimeout(() => console.log('***'), 510)
  setTimeout(addTime, 1000)
}

function addTime () {
  console.log('')
  console.log('please enter map time:')
  const rl = create()
  rl.prompt()
  rl.on('line', input => {
    rl.close()
    rw.logTime(input)
    setTimeout(rw.nextMap, 1000)
    setTimeout(addTime)
  })
}
