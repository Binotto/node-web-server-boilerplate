const path = require('path')
const express = require('express')


const app = express()
const publicDirectoryPath = path.join(__dirname, '../public');

app.use(express.static(publicDirectoryPath))

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


