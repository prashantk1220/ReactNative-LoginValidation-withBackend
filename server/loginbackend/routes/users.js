var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/', function(req, res, next){
   var username = req.body.username;
   var password = req.body.password;
  if((username === "Prash") && (password === "12345"))
   res.send( { 'success': true, 'user': username});
  else
    res.send({ 'success': false, 'user': 'user not found'});
});

module.exports = router;
