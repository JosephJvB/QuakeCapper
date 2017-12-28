const fs = require('fs')
const path = require('path')

readWrite()

function readWrite () {
  fs.readFile(path.join(__dirname, 'recordTemplate.json'), 'utf8', (err, data) => {
    if (err) console.log(err)
    else {
      fs.writeFile(`${__dirname}/../records/test.json`, data, err => {
        if (err) console.log(err)
        else console.log('nice one', JSON.parse(data))
      })
    }
  })
}
