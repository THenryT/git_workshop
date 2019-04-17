var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/:id', req, res, next => {
  res.render('WoW', { title: 'Express' });
  res.render('index', { title: 'Exasdfpress' });
});

module.exports = router;
