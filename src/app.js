const path = require('path')
const express = require('express')
const hbs = require('hbs')

const app = express()
const port = process.env.PORT || 3000

// Define paths for Express config
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

// Setup handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

// Setup static directory to serve
app.use(express.static(publicDirectoryPath))

app.get('', (req, res) => {
    res.render('index', {
        title: 'Full Stack Web Developer',
        name:  'Matheus Binotto',
        site: 'My site'
    })
})
app.get('/about', (req, res) => {
    res.render('about', {
        title: 'Full Stack Web Developer',
        name:  'Matheus Binotto',
        site: 'My site - About me'
    })
})
app.get('/help', (req, res) => {
    res.render('help', {
        title: 'Full Stack Web Developer',
        name:  'Matheus Binotto',
        site: 'My site - Help'
    })
})

app.get('*', (req, res) => {
    res.render('404', {
        site: 'My site - Help'
    })
})

app.listen(port, () => {
    console.log('Server is up on port 3000')
})


