const fs = require('fs')
const path = require('path')

const { condish } = require('./yuckers')

// newRun(5)

function newRun (num) {
  let templatePath = path.join(__dirname, 'recordTemplate.json')
  let newRecord = `${__dirname}/../records/testrun${num}.json`
  fs.readFile(templatePath, 'utf8', (err, data) => {
    if (err) console.log(err)
    else {
      let run = JSON.parse(data)
      run.number = num
      fs.writeFile(newRecord, JSON.stringify(run), err => {
        if (err) console.log(err)
        else console.log('Good luck!')
      })
    }
  })
}

// setTimeout(() => logTime(30, 'E4', 'M1', 'loads'), 3000)

function logTime (num, e, m, time) {
  let recordPath = `${__dirname}/../records/testrun${num}.json`
  fs.readFile(recordPath, 'utf8', (err, data) => {
    if (err) console.log(err)
    else {
      let newTime = JSON.parse(data)
      newTime[e][m] = time
      newTime.total.push(time)
      fs.writeFile(recordPath, JSON.stringify(newTime), err => {
        if (err) console.log(err)
        else console.log(newTime)
      })
    }
  })
}

function nextMap (num) {
  let recordPath = `${__dirname}/../records/testrun${num}.json`
  fs.readFile(recordPath, 'utf8', (err, data) => {
    if (err) console.log(err)
    else {
      let recordObj = JSON.parse(data)
      condish(recordObj)
    }
  })
}

module.exports = { newRun, logTime, nextMap }
