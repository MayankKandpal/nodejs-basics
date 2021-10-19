const express = require('express')

const app = express()

const cors = require('cors')
app.get('/',(req,res)=>{
    res.send('Welcome to your first node API')
})
const PORT = 5001
app.listen(PORT, ()=>{
    console.log(`Server Listening at PORT ${PORT}`)
})