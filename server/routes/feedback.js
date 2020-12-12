const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

router.post('/', (req, res) => {
  console.log('post', req.body);
  const feedback = req.body;
  let queryString = `INSERT INTO "feedback" ("feeling", "understanding", "support", "comments")
    VALUES ($1, $2, $3, $4)`;
  pool
    .query(queryString, [
      feedback.feeling,
      feedback.understand,
      feedback.support,
      feedback.comment,
    ])
    .then((result) => {
      res.sendStatus(201);
    })
    .catch((error) => {
      res.sendStatus(500);
    });
});

module.exports = router;
