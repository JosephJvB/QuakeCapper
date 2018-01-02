const fs = require('fs')
const path = require('path')

const { findNext } = require('./yuckers')

const templatePath = path.join(__dirname, 'recordTemplate.json')
const recordDir = `${__dirname}/../records`

// newRun()

function newRun () {
  fs.readdir(recordDir, (err, files) => {
    if (err) console.log(err)
    else {
      let num = 1
      if (files.length) num = files.length + 1
      let newRecord = `${__dirname}/../records/testrun${num}.json`
      fs.readFile(templatePath, 'utf8', (err, data) => {
        if (err) console.log(err)
        else {
          let run = JSON.parse(data)
          fs.writeFile(newRecord, JSON.stringify(run), err => {
            if (err) console.log(err)
            else console.log('starting run no. ' + num)
          })
        }
      })
    }
  })
}

// logTime(44)

function logTime (time) {
  fs.readdir(recordDir, 'utf8', (err, files) => {
    if (err) console.log(err)
    else {
      let num = files.length
      let recordPath = `${__dirname}/../records/testrun${num}.json`
      fs.readFile(recordPath, 'utf8', (err, data) => {
        if (err) console.log(err)
        else {
          let newTime = JSON.parse(data)
          let e = newTime.pendingMap.split('.')[0]
          let m = newTime.pendingMap.split('.')[1]
          newTime[e][m] = time
          newTime.total.push(time)
          fs.writeFile(recordPath, JSON.stringify(newTime), err => {
            if (err) console.log(err)
          })
        }
      })
    }
  })
}

function nextMap () {
  fs.readdir(recordDir, 'utf8', (err, files) => {
    if (err) console.log(err)
    else {
      let num = files.length
      let recordPath = `${__dirname}/../records/testrun${num}.json`
      fs.readFile(recordPath, 'utf8', (err, data) => {
        if (err) console.log(err)
        else {
          let recordObj = JSON.parse(data)
          let e = 1
          if (recordObj.pendingMap) e = Number(recordObj.pendingMap.split('.')[0][1])
          let n = findNext(recordObj, e)
          if (!n) n = findNext(recordObj, e + 1)
          recordObj.pendingMap = n
          console.log(`next map is: ${n}`)
          fs.writeFile(recordPath, JSON.stringify(recordObj), err => {
            if (err) console.log(err)
          })
        }
      })
    }
  })
}
// nextMap()

module.exports = { newRun, logTime, nextMap }
