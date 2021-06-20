const genericService = require('../services/generic.service');
const util = require('../helpers/helper');

const genericController = (service) => {

    const create = (req, res) => {
        const {
            body
        } = req;
        service.create(body)
            .then(data => {
                res.json(util.handleData(data))
            })
            .catch(error => {
                res.json(util.handleError(error))
            });
    };

    const bulkCreate = (req, res) => {
        const { body } = req;
        service.bulkCreate(body)
            .then(data => {
                res.json(util.handleData(data))
            })
            .catch(error => {
                res.json(util.handleError(error))
            });
    };

    const getById = (req, res) => {
        const { id } = req.params;
        service.getById(id)
            .then(data => {
                res.json(util.handleData(data))
            })
            .catch(error => {
                res.json(util.handleError(error))
            });
    };

    const findOne = (req, res) => {
        const { query } = req;
        service.findOne(query)
            .then(data => {
                res.json(util.handleData(data))
            })
            .catch(error => {
                res.json(util.handleError(error))
            });
    };

    const findAll = (req, res) => {
        const { query } = req;
        service.findAll(query)
            .then(data => {
                res.json(util.handleData(data))
            })
            .catch(error => {
                res.json(util.handleError(error))
            });
    };

    const update = (req, res) => {
        const { body } = req;
        const { id } = req.params;
        delete body.id;
        service.update(id, body)
            .then(data => {
                res.json(util.handleData(data))
            })
            .catch(error => {
                res.json(util.handleError(error))
            });
    };

    const deleteById = (req, res) => {

        const { id } = req.params;
        service.delete(id)
            .then(data => {
                res.json(util.handleData(data))
            })
            .catch(error => {
                res.json(util.handleError(error))
            });
    };

    return {
        create,
        bulkCreate,
        getById,
        findOne,
        findAll,
        update,
        delete: deleteById,
    };
};

module.exports = {
    machine: genericController(genericService.machine),
    pod: genericController(genericService.pod),
};