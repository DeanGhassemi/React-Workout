const express = require('express')

// backend express app
const app = express()

app.get('/', (req, res) => {
    res.json({msg: 'Welcome to the app'})
})

// listen for request
app.listen(4000, () => {
    console.log("Listening on port 4000!")
})