const express = require('express')
const axios = require('axios')
const { get } = require('./handlers');
const app = express()
const port = 3000

app.get('/', get(axios) )

//equivalente carretero
// app.get('/', (req, res) => get(axios)(req,res) )

app.listen(port, ()=> console.log(`Example app listening on port ${port}`))