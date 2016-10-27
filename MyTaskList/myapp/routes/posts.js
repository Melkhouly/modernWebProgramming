var express = require('express');
var router = express.Router();

/* GET posts listing. */
router.get('/', function (req, res, next) {
  db.collection('posts').find(function (err, postCollection) {
    if (err) {
      res.send(err)
    }
res.send('test from post')
console.dir(postCollection)
   // res.json(postCollection);

    //db.close();
  });
});





module.exports = router;
