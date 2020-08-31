const express = require('express')
const cors = require('cors')
const app = express()
const fetch = require('node-fetch')

var fs = require('fs')
const {Console} = require('console')
const {request} = require('http')
let key = 'AIzaSyCNYwNw-ml5P_Vj9145ACIIS1fVaalViEA';

const data = require('./data')
// const data=["a","b"]
app.use(cors())
const PORT = 5000

// let url = `https://www.googleapis.com/books/v1/volumes?q=harry&key=${key}`
// let getData = async url => {     try {         const response = await
// fetch(url);         const json = await response.json();
// console.log(json.items)          fs.writeFileSync('data.js',
// JSON.stringify(json.items));         console.log(json.items)
// console.log(json.items);          let dataFin = data.map(e => {
// console.log(e.volumeInfo)              return e.volumeInfo          })     }
// catch (error) {         console.log(error);     } }; getData(url);

app.get(`/book`, async (req, res) => {
    // const url = `https://www.googleapis.com/books/v1/volumes?q=harry&key=${key}`;
    // const options={     "method":"GET", }; const response= await
    // fetch(url,options) .then(res=>res.json()) .catch(e=>{     console.error({
    // "msg":"error",         error:e     }); }) console.log("res", response)
    // res.json(response) console.log(json);   fs.writeFileSync('data.js','123');
    res.send(data)
});

app.listen(PORT, () => console.log(`App running on port ${PORT}!`),);
