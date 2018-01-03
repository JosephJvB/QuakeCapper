// const fs = require('fs')
// const path = require('path')

function findNextMap (data, idx) {
  if (idx === 26) return
  let next = data.times.findIndex(m => m.time === null)
  if (next >= 0) return data.times[next].mapName
  else return 'gg'
}

// const getRunNum = () => {
//   fs.readFile(path.join(__dirname, 'recordTemplate.json'), 'utf8', (err, data) => {
//     if (err) console.log(err)
//     else {
//       let run = JSON.parse(data)
//       return run.currentRun
//     }
//   })
// }

module.exports = { findNextMap }

// function bigCondish(data) {
//   let e1Arr = Object.values(data.E1)
//   let next = e1Arr.indexOf(null) + 1
//   if (next !== 0) return console.log(`next map is E1.M${next}`)
//   if (next === 0) {
//     let e2Arr = Object.values(data.E2)
//     let next = e2Arr.indexOf(null) + 1
//     if (next !== 0) return console.log(`next map is E2.M${next}`)
//     if (next === 0) {
//       let e3Arr = Object.values(data.E3)
//       let next = e3Arr.indexOf(null) + 1
//       if (next !== 0) return console.log(`next map is E3.M${next}`)
//       if (next === 0) {
//         let e4Arr = Object.values(data.E4)
//         let next = e4Arr.indexOf(null) + 1
//         if (next !== 0) return console.log(`next map is E4.M${next}`)
//         else return console.log('GG!')
//       }
//     }
//   }
// }

// function nextMap (num) {
//   let recordPath = `${__dirname}/../records/testrun${num}.json`
//   fs.readFile(recordPath, 'utf8', (err, data) => {
//     if (err) console.log(err)
//     else {
//       let recordObj = JSON.parse(data)
//       let eps = Object.keys(recordObj).slice(0, 4)
//       eps.find(e => {
//         let mapArr = Object.keys(recordObj[e])
//         let next = mapArr.find(m => recordObj[e][m] === null)
//         if (next) return console.log(next)
//       })
//     }
//   })
// }

// function readTest () {
//   fs.readdir(`${__dirname}/../records`, (err, files) => {
//     if (err) console.log(err)
//     else {
//       if (!files.length) console.log(1)
//       else console.log(files.length)
//     }
//   })
// }

// readTest()

// function pracCalc(arr) {
//   let tot = arr.reduce((a, c) => a + c)
//   let minTot = (tot / 60).toString().split('.')
//   let mins = Number(minTot[0])
//   let secs = Number(minTot[1].slice(0, 2))
//   let final = `${mins}min ${secs}sec`
//   if (minTot[1] >= 60) final = `${mins + 1}min ${secs - 60}sec`
//   console.log(final)
// }

// pracCalc([28, 38, 49, 26, 22, 15, 16, 10, 46, 30, 55, 48, 107, 31, 25, 35, 54, 42, 31, 28, 37, 55, 32, 17, 33, 53, 10, 33])
