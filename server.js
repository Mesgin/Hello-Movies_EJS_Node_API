const express = require('express')
const request = require('request')
const app = express()
const port = process.argv[2] || 8080

app.set('view engine', 'ejs')

app.use(express.static('./public'))

app.get('/', (req, res) => {
    res.render('index')
})

app.get('/search', (req, res) => {
    let searchTerm = req.query.searchTerm.toLowerCase()
    if (!searchTerm){
        res.render('index')
    }
    request(`https://api.themoviedb.org/3/search/movie?api_key=d730ddf7f4c9229a1877979dcfa57302&query=${searchTerm}`, (err, response, data) => {
        const dataObject = JSON.parse(data)
        if(err) console.log(err)
        res.render('movie', { dataObject })
    })
})

app.listen(port, () => {
    console.log(`Listening on port: ${port}`)
})
