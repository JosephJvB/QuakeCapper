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
  console.log('Please enter runID')
  rl.prompt()
  rl.on('line', (input) => {
    console.log('starting run', input)
    rw.newRun(input)
    setTimeout(next, 500)
    rl.close()
  })
}

function next () {
  rw.nextMap()
    .then(res => {
      const e = res.split('.')[0]
      const m = res.split('.')[1]
      console.log('')
      const rl = create()
      rl.prompt()
      setTimeout(() => rl.question('how long did you last?', input => {
        rl.close()
        console.log(input)
        rw.logTime(e, m, input)
      }), 2000)
    })
}

// const e = res.split('.')[0]
// const m = epMap.split('.')[1]
