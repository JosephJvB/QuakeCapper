const fs = require('fs')
const path = require('path')

function newRun (num) {
  fs.readFile(path.join(__dirname, 'recordTemplate.json'), 'utf8', (err, data) => {
    if (err) console.log(err)
    else {
      fs.writeFile(`${__dirname}/../records/testrun${num}.json`, data, err => {
        if (err) console.log(err)
        else console.log('Good luck!')
      })
    }
  })
}

logTime('../records/testrun6.json', 'E2', 'M1', 9)

function logTime (path, e, m, time) {
  fs.readFile(`${__dirname}/${path}`, 'utf8', (err, data) => {
    if (err) console.log(err)
    else {
      let newTime = JSON.parse(data)
      newTime[e][m] = time
      fs.writeFile(`${__dirname}/${path}`, JSON.stringify(newTime), err => {
        if (err) console.log(err)
        else console.log(newTime)
      })
    }
  })
}

module.exports = { newRun }
