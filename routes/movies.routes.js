
const router = require("express").Router();

// IMPORT CELEBRITY SCHEMA
const Celebrity = require("../models/Celebrity.model");

// IMPORT MOVIE SCHEMA
const Movie = require('../models/Movie.model')


// ROUTE OF THE PAGE FOR SEE ALL MOVIES
router.get('/movies', async (req, res, next) => {
    try {
        const displayMovie = await Movie.find()
        const displayCelebrity = await Celebrity.find()
        res.render('movies/movies', { allMovies: displayMovie, allCelebrities: displayCelebrity })

    } catch (error) {
        next(error)
    }
})


// ROUTE FOR THE CREATION OF A MOVIE
router.get('/movies/create', async (req, res, next) => {
    try {
        const casting = await Celebrity.find()
        console.log(casting)
        res.render('movies/new-movie', { cast: casting })

    } catch (error) {
        next(error)
    }
})


//ROUTE FOR POST NEW MOVIE
router.post('/movies/create', async (req, res, next) => {

    const { title, genre, plot, cast } = req.body

    try {

        await Movie.create({ title, genre, plot, cast })
        res.redirect("/movies")
    }
    catch (error) {
        res.redirect('movies/new-movie')
    }
})



module.exports = router;