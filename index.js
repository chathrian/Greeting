const express = require('express');
const app = express();
const ejs = require('ejs')
const port = 3000

app.get('/', (req, res) =>{
res.render('admin.ejs')
})

app.get('/birthday/:name/:msg', (req,res) =>{
    let name = req.params.name
    let msg = req.params.msg

res.render('birthday.ejs',{name:name, msg:msg,})
})

app.get('/s/:name/:msg', (req,res) =>{
res.render('admin.ejs',)
})

app.get('/ramadan/:name/:msg', (req,res) =>{

    let name = req.params.name
    let msg = req.params.msg

res.render('ramadan.ejs',{name:name, msg:msg})
})

app.get('/love/:name/:msg', (req,res) =>{

    let name = req.params.name
    let msg = req.params.msg

res.render('love.ejs',{name:name, msg:msg})
})

app.get('/marry/:name/:msg', (req,res) =>{

    let name = req.params.name
    let msg = req.params.msg

res.render('marry.ejs',{name:name, msg:msg})
})

app.get('/anniversary/:name/:msg', (req,res) =>{

    let name = req.params.name
    let msg = req.params.msg

res.render('anniversary.ejs',{name:name, msg:msg})
})

app.get('/ghost/:name/:msg', (req,res) =>{

    let name = req.params.name
    let msg = req.params.msg

res.render('ghost.ejs',{name:name, msg:msg})
})

app.get('/hack/:name/:msg', (req,res) =>{

    let name = req.params.name
    let msg = req.params.msg

res.render('hack.ejs',{name:name, msg:msg})
})


app.listen(port, ()=>{
    console.log(`Example app listening on port ${port}`)
})