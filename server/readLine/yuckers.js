function condish (data) {
  let e1Arr = Object.values(data.E1)
  let next = e1Arr.indexOf(null) + 1
  if (next !== 0) return console.log(`next map is E1.M${next}`)
  if (next === 0) {
    let e2Arr = Object.values(data.E2)
    let next = e2Arr.indexOf(null) + 1
    if (next !== 0) return console.log(`next map is E2.M${next}`)
    if (next === 0) {
      let e3Arr = Object.values(data.E3)
      let next = e3Arr.indexOf(null) + 1
      if (next !== 0) return console.log(`next map is E3.M${next}`)
      if (next === 0) {
        let e4Arr = Object.values(data.E4)
        let next = e4Arr.indexOf(null) + 1
        if (next !== 0) return console.log(`next map is E4.M${next}`)
        else return console.log('GG!')
      }
    }
  }
}

module.exports = { condish }

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
