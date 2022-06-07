const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const dotenv = require('dotenv').config()
const cors = require('cors')
const routes = require('./src/routes')
const port = process.env.PORT || 8080


app.use(cors())
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())

app.listen(port,()=>{
    console.log('escuchando en puerto', port)
})
routes(app)