const express = require('express')
const app = express()
const PORT = 9000

let ballers = {
  lebron: {
    name: 'lebron james',
    team: 'LA Lakers',
    championships: 7,
    'goat status': true,
    'season average': 100,
  },
  'kelvin durant': {
    name: 'Kelvin durant',
    team: 'Boston',
    championships: 2,
    'goat status': false,
    'season average': 60,
  },
  'michael jordan': {
    name: 'Michael Jordan',
    team: 'Chicago Bulls',
    championships: 5,
    'goat status': true,
    'season average': 112,
  },
  'steph curry': {
    name: 'Steph Curry',
    team: 'Golden State',
    championships: 3,
    'goat status': false,
    'season average': 67,
  },
}

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')
})

app.get('/api/:baller', (req, res) => {
  const baller = req.params.baller.toLowerCase()
  if (ballers[baller]) {
    res.json(ballers[baller])
  } else {
    res.send('Searched term does not exist')
  }
})

app.listen(process.env.port || PORT, () => {
  console.log(`Server is listening on port ${PORT}`)
})
