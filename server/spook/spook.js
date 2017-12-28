const Nightmare = require('nightmare')
const nightmare = Nightmare({ show: true })

nightmare
  .goto('https://www.twitch.tv/ayoitsjoevanbo')
  .then(() => {
    return nightmare
      .wait(5500)
      .screenshot('./server/public/images/tester/test.png')
  })
  .then(() => {
    console.log('nightmare', nightmare.state)
    nightmare.end()
      .then(res => {
        console.log('done')
      })
  })
