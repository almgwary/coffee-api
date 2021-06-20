const router = require('express').Router();

router.use('/api/machines', require('./generic-route').machine);
router.use('/api/pods', require('./generic-route').pod);
//  health
router.get('/health', (req, res, next) => {
	res.status(200).json({status:'UP'});
});

module.exports =  router ;
