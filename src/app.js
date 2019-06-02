const express = require('express')


const app = express()

//app.com
app.get('', (req, res) => {
    res.send('Hello Express')
})



//app.com/help
//app.com/about