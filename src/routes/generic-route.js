const genericController = require('../controllers/generic.controller');
const express = require('express');
const routes = (controller) => {
    const router = express.Router();

    router.route('/')
        .get(controller.findAll)
        .post(controller.create);

    router.route('/find-one')
        .get(controller.findOne);

    router.route('/create-many')
        .post(controller.bulkCreate);

    router.route('/:id')
        .get(controller.getById)
        .delete(controller.delete)
        .put(controller.update);

	return router;
};

module.exports = {
    machine: routes(genericController.machine),
    pod: routes(genericController.pod),
};