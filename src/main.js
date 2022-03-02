const express = require('express')

const app = express()

const port = 3000

app.get('/', (req, res) => {
   return res.send('This is the homepage')
})

app.get('/about', (_, res) => {
   return res.send('This is about page')
})

app.listen(port, () => {
   console.log(`Listening on port ${port}`)
})
