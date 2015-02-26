var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});



router.post('/api', function (req, res, next) {
  res.send('We got da POST mon!');
  res.send(req.body);
});



module.exports = router;
