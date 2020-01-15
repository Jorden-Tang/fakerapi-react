const express = require('express')
const faker = require('faker')
const User = require('./User')
const Product = require('./Product')

const app = express()
app.use(express.urlencoded({extended: true}));

app.get("/api/users/new", (req, res)=>{
    res.json(new User())
})

app.get("/api/products/new", (req, res)=>{
    res.json(new Product())
})

app.get("/api/user/product", (req,res)=>{
    res.json([new User(), new Product()])
});

const server = app.listen(8000, ()=> {
    console.log(`server is hosted on port ${server.address().port}!`)
})
