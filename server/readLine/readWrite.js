const fs = require('fs')
const path = require('path')

// newRun(999)

function newRun (num) {
  let templatePath = path.join(__dirname, 'recordTemplate.json')
  let newRecord = `${__dirname}/../records/testrun${num}.json`
  fs.readFile(templatePath, 'utf8', (err, data) => {
    if (err) console.log(err)
    else {
      fs.writeFile(newRecord, data, err => {
        if (err) console.log(err)
        else console.log('Good luck!')
      })
    }
  })
}

// logTime(999, 'E4', 'M1', 29)

function logTime (num, e, m, time) {
  let recordPath = `${__dirname}/../records/testrun${num}.json`
  fs.readFile(recordPath, 'utf8', (err, data) => {
    if (err) console.log(err)
    else {
      let newTime = JSON.parse(data)
      newTime[e][m] = time
      fs.writeFile(recordPath, JSON.stringify(newTime), err => {
        if (err) console.log(err)
        else console.log(newTime)
      })
    }
  })
}

module.exports = { newRun, logTime }
