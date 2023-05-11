const router = require('express').Router();
const userRoutes = require('./userRoutes');
const recipe = require('./recipe')
router.use('/users', userRoutes);
router.use('/recipe', recipe)
module.exports = router;