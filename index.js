const express = require('express')
const app = express()

app.get('/', (req,res)=> {
    console.log('We did it!')
    res.send('get stub')
})

app.listen(3000)
