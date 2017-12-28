const Nightmare = require('nightmare')
const nightmare = Nightmare({ show: true })

nightmare
  .goto('https://www.twitch.tv/kevin_force')
  .then(() => {
    return nightmare
      .wait(5500)
      .screenshot('./server/public/images/tester/test.png')
  })
  .then(() => {
    console.log('nightmare', nightmare.state)
    nightmare.end()
      .then(() => {
        console.log('done')
      })
  })

  // so next I want to attach a read/write file to keep track of my screenshots, to know what level is what
// also want to attach a readline functionality so I can just press a button to take the screenshot rather than enter the script every time.. I think that would be cool. press spacebar - readfile, screenshot, writefile. nice
