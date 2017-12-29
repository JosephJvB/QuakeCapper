const fs = require('fs')
const path = require('path')

const { findNext } = require('./yuckers')

// newRun(5)

function newRun (num) {
  let templatePath = path.join(__dirname, 'recordTemplate.json')
  let newRecord = `${__dirname}/../records/testrun${num}.json`
  fs.readFile(templatePath, 'utf8', (err, data) => {
    if (err) console.log(err)
    else {
      let run = JSON.parse(data)
      run.currentRun = num
      fs.writeFile(newRecord, JSON.stringify(run), err => {
        if (err) console.log(err)
        else console.log('Good luck!')
      })
      fs.writeFile(templatePath, JSON.stringify(run), err => {
        if (err) console.log(err)
      })
    }
  })
}

// logTime('E4', 'M1', 'loads')

function logTime (e, m, time) {
  let templatePath = path.join(__dirname, 'recordTemplate.json')
  fs.readFile(templatePath, 'utf8', (err, data) => {
    if (err) console.log(err)
    else {
      let temp = JSON.parse(data)
      let num = temp.currentRun
      let recordPath = `${__dirname}/../records/testrun${num}.json`
      fs.readFile(recordPath, 'utf8', (err, data) => {
        if (err) console.log(err)
        else {
          let newTime = JSON.parse(data)
          newTime[e][m] = time
          newTime.total.push(time)
          fs.writeFile(recordPath, JSON.stringify(newTime), err => {
            if (err) console.log(err)
            else console.log(newTime[e])
          })
        }
      })
    }
  })
}

function nextMap () {
  let templatePath = path.join(__dirname, 'recordTemplate.json')
  fs.readFile(templatePath, 'utf8', (err, data) => {
    if (err) console.log(err)
    else {
      let temp = JSON.parse(data)
      let num = temp.currentRun
      let recordPath = `${__dirname}/../records/testrun${num}.json`
      fs.readFile(recordPath, 'utf8', (err, data) => {
        if (err) console.log(err)
        else {
          let recordObj = JSON.parse(data)
          findNext(recordObj, 1)
        }
      })
    }
  })
}
// nextMap()

module.exports = { newRun, logTime, nextMap }
