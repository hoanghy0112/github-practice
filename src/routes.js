const express = require('express')

const router = express.Router()

// Home page endpoint
router.get('/', (req, res) => {
   return res.send('This is the homepage')
})

router.get('/about', (_, res) => {
   return res.send('This is about page')
})

module.exports = { router }