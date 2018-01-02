const fs = require('fs')
const path = require('path')

const { findNextMap } = require('./yuckers')

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

function logTime (newTime) {
  fs.readdir(recordDir, 'utf8', (err, files) => {
    if (err) console.log(err)
    else {
      let num = files.length
      let recordPath = `${__dirname}/../records/testrun${num}.json`
      fs.readFile(recordPath, 'utf8', (err, data) => {
        if (err) console.log(err)
        else {
          let recordObj = JSON.parse(data)
          let mName = findNextMap(recordObj, 0)
          let idx = recordObj.times.findIndex(o => o.mapName === mName)
          recordObj.times[idx].time = newTime
          recordObj.total.push(newTime)
          fs.writeFile(recordPath, JSON.stringify(recordObj), err => {
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
          let n = findNextMap(recordObj, 0)
          if (n === 'gg') return console.log('she\'s done mate')
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

function calcTotal () {
  fs.readdir(recordDir, 'utf8', (err, files) => {
    if (err) console.log(err)
    else {
      let num = files.length
      let recordPath = `${__dirname}/../records/testrun${num}.json`
      fs.readFile(recordPath, 'utf8', (err, data) => {
        if (err) console.log(err)
        else {
          let recordObj = JSON.parse(data)
          let tot = recordObj.total.reduce((a, c) => a + c)
          recordObj.final = tot
          console.log(`your final time was ${tot} .seconds`)
          fs.writeFile(recordPath, JSON.stringify(recordObj), err => {
            if (err) console.log(err)
          })
        }
      })
    }
  })
}

module.exports = { newRun, logTime, nextMap, calcTotal }
