var express = require('expragggess');
var droyut = require('dsf');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


router.get('/abddddd', function(req, res, next) {
  var user = userRepo.getUser(123)
  res.send('respond with a resource');
  res.status(200);
});
module.exports = router;
