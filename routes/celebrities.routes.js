
const router = require("express").Router();


// IMPORT CELIBRITY SCHEMA
const Celebrity = require('../models/Celebrity.model');


// ROUTE FOR CELEBRITIES PAGE
router.get('/celebrities', async (req, res, next) => {
    try {
        const displayCelebrity = await Celebrity.find()
        // console.log(displayCelebrity)

        res.render('celebrities/celebrities', { allCelebrity: displayCelebrity })

    } catch (error) {
        console.log(error)
    }
})


// ROUTE FOR THE CREATION OF CELIBRITY
router.get('/celebrities/create', (req, res, next) => {
    try {

        res.render('celebrities/new-celebrity')

    } catch (error) {
        next(error)
    }
})


//ROUTE FOR POST NEW CELEBRITY
router.post('/celebrities/create', async (req, res, next) => {

    const celebrity = {
        name: req.body.name,
        occupation: req.body.occupation,
        catchPhrase: req.body.catchPhrase,
    }

    try {
        const createCelebrity = await Celebrity.create(celebrity)

        res.redirect('/celebrities')
    }
    catch (error) {
        res.render('celebrities/new-celebrity')
    }
})

module.exports = router;