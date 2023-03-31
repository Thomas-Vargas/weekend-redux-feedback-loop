const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

//GET
router.get('/', (req, res) => {
  const sqlText = `SELECT * FROM "feedback"`;

  pool
    .query(sqlText)
    .then(result => {
      res.send(result.rows)
    })
    .catch(error => {
      res.sendStatus(500);
      console.log('Error in get request at /feedback', error)
    })
})

//POST
router.post('/', (req, res) => {
  let newFeedback = req.body;
  const sqlText = `INSERT INTO "feedback" ("feeling", "understanding", "support", "comments")
  VALUES ($1, $2, $3, $4)`;

  pool
    .query(sqlText, [newFeedback.feeling, newFeedback.understanding, newFeedback.supported, newFeedback.comment])
    .then (result => {
      res.sendStatus(201);
      console.log('Successful post!')
    })
    .catch(error => {
      res.sendStatus(500);
      console.log(error)
    })
})

module.exports = router

