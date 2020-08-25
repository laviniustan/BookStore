const express = require('express')
const cors = require('cors')
const app = express()

var fs = require('fs')

data = ['book1','book2']

app.use(cors())
const PORT = 5000

app.get('/', (req, res) => {
    res.send("data")
});

app.get('/book', (req, res) => {

    res.send(data)
});

app.listen(PORT, () => console.log(`App running on port ${PORT}!`),);
