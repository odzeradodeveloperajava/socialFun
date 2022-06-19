const PORT = 9000;
const Fs = require('fs') ;
const express = require('express');
const cors = require('cors');
const axios = require('axios');
require('dotenv').config();
const app = express();
const {Buffer} = require('buffer');

app.use(cors())

const dupa = () => app.get('/', async(req,res) =>{
    const raw = await axios.get('https://cataas.com/cat',{
        responseType: 'arrayBuffer',
        responseEncoding: 'binary'
    })
    let base64 = Buffer.from(raw.data, "binary").toString("base64");  
    let image = `data:${raw.headers["content-type"]};base64,${base64}`;
    res.send(`<img src="${image}"/>`)
})
dupa()

app.listen(PORT, ()=>console.log(`server running on port ${PORT}`))