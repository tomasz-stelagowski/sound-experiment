const express = require('express');
const router = express.Router();

/* GET api listing. */
router.get('/', (req, res) => {
  res.send('api works');
});

// Get all posts
router.route('/results')
	.get((req, res) => {
  // Get posts from the mock api
  // This should ideally be replaced with a service that connects to MongoDB
      res.status(200);
      	console.log(req.body);
		//console.log(res);
	})
	.post((req, res) => {
		console.log(req.body);
		res.status(200).send();
	});


module.exports = router;