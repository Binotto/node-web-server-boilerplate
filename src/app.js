const express = require('express')


const app = express()

//app.com
app.get('', (req, res) => {
    res.send('Hello Express')
})


app.listen(3000, () => {
    console.log('Server is up on port 3000')
})

//app.com/help
//app.com/about