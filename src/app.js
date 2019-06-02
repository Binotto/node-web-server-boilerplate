const path = require('path')
const express = require('express')


const app = express()

const publicDirectoryPath = path.join(__dirname, '../public');

app.set('view engine', 'hbs')
app.use(express.static(publicDirectoryPath))

app.get('', (req, res) => {
    res.render('index', {
        title: 'Full Stack Web Developer',
        name:  'Matheus Binotto'
    })
})
app.get('/about', (req, res) => {
    res.render('about', {
        title: 'Full Stack Web Developer',
        name:  'Matheus Binotto'
    })
})
app.get('/help', (req, res) => {
    res.render('help', {
        title: 'Full Stack Web Developer',
        name:  'Matheus Binotto'
    })
})



app.listen(3000, () => {
    console.log('Server is up on port 3000')
})


