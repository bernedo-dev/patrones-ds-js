//uso practico de patrones

const express = require('express')
const services = require('./services')
const handlify = require('./handlers')
const app = express()

const usersHandler = handlify('users');
const postsHandler = handlify('posts');

// parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: false }))

// parse application/json
app.use(express.json())

const port = 3000

app.get('/',  usersHandler(services).get)
app.post('/',  usersHandler(services).post)
app.put('/:id',  usersHandler(services).put)
app.delete('/:id',  usersHandler(services).delete)

app.get('/posts',  postsHandler(services).get)
app.post('/posts',  postsHandler(services).post)
app.put('/posts/:id',  postsHandler(services).put)
app.delete('/posts/:id',  postsHandler(services).delete)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})