const router = require("express").Router();


//  GET HOME PAGE
router.get("/", (req, res, next) => {
  res.render("index");
});

// forgot to initialize the route for movies and celebrities
// but leave it like this because i don't want to break everything

// GO TO MOVIES ROUTES PAGE
const moviesRoutes = require('./movies.routes');
router.use('/', moviesRoutes);


// GO TO CELEBRITIES ROUTES PAGE
const celebritiesRoutes = require('./celebrities.routes');
router.use('/', celebritiesRoutes);



module.exports = router;
