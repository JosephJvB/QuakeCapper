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
  setTimeout(mapAndTime, 100)
}

function mapAndTime () {
  rw.nextMap()
  setTimeout(() => console.log('***'), 20)
  setTimeout(time, 1000)
}

function time () {
  console.log('please enter map time:')
  const rl = create()
  rl.prompt()
  rl.on('line', input => {
    if (input === 'done') {
      rw.calcTotal()
      return rl.close()
    }
    rl.close()
    rw.logTime(Number(input))
    setTimeout(mapAndTime, 1000)
  })
}
