var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('Manager', { title: 'Search Results by Manager' });
});

module.exports = router;
