const express = require('express')
const app = express()
const port = process.argv[2] || 8080

app.set('view engine', 'ejs')

app.use(express.static('./public'))

app.get('/',(req,res)=>{
    res.render('index', { movies: getMovies() })
    // res.send('hello')
})


function getMovies() {
    return {
        title: 'Blade Runner',
        year: '1982',
        rated: 'R',
        released: '25 June 1982',
        runtime: '1h 57min',
        genre: 'Sci-Fi, Thriller',
        director: 'Ridley Scott',
        writer: 'Hampton Fancher, David Peoples',
        actors: 'Harrison Ford, Rutger Hauer, Sean Young, Edward James Olmos',
        plot: 'A blade runner must pursue and try to terminate four replicants who stole a ship in space and have returned to Earth to find their creator.',
        language: 'English',
        country: 'USA, Hong Kong'
    }
}



app.listen(port, () => {
    console.log(`Listening on port: ${port}`)
})
