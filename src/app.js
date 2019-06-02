const express = require('express')


const app = express()

//app.com
app.get('', (req, res) => {
    res.send('<h1>Hello Express!</h1>')
})

//app.com/help
app.get('/help', (req, res) => {
    res.send('Help page')
})

//app.com/about
app.get('/about', (req, res) => {
    res.send({
        name: 'Matheus Binotto'
    })
})

app.listen(3000, () => {
    console.log('Server is up on port 3000')
})


