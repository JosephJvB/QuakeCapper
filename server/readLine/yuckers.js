// const fs = require('fs')
// const path = require('path')

function findNext (data, idx) {
  if (idx === 5) return console.log('gg')
  let eArr = Object.values(data)
  let ep = eArr[idx - 1]
  let mArr = Object.values(ep)
  let next = mArr.indexOf(null) + 1
  if (next !== 0) return `E${idx}.M${next}`
  else findNext(data, idx + 1)
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

module.exports = { findNext }

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
