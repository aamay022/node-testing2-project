const router = require("express").Router();
const Jokes = require('./jokesModel')

router.get("/", (req, res, next) => { // done for you
    Jokes.find()
      .then(j => {
        res.json(j);
      })
      .catch(next);
  });

  module.exports = router;