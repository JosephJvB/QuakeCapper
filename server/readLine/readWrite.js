const fs = require('fs')
const path = require('path')

const { findNext, getRunNum } = require('./yuckers')

const templatePath = path.join(__dirname, 'recordTemplate.json')

// newRun(5)

function newRun (num) {
  let newRecord = `${__dirname}/../records/testrun${num}.json`
  fs.readFile(templatePath, 'utf8', (err, data) => {
    if (err) console.log(err)
    else {
      let run = JSON.parse(data)
      run.currentRun = num
      fs.writeFile(newRecord, JSON.stringify(run), err => {
        if (err) console.log(err)
      })
      fs.writeFile(templatePath, JSON.stringify(run), err => {
        if (err) console.log(err)
      })
    }
  })
}

// logTime('E4', 'M1', 44)
// console.log(getRunNum())

function logTime (e, m, time) {
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
            else console.log(`${e}.${m}:`, time)
          })
        }
      })
    }
  })
}

function nextMap () {
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
          return findNext(recordObj, 1)
        }
      })
    }
  })
}
// console.log('next:', nextMap())

module.exports = { newRun, logTime, nextMap }
