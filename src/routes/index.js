const router = require('express').Router();

router.get('/', (req, res) => res.send("do u even api?"));

router.use('/projects', require('./projects'));
router.use('/resources', require('./resources'));

module.exports = router;