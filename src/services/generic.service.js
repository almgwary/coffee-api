const models  = require('../models');
const Sequelize=require('sequelize');
const constants = require('../helpers/constants');

class GenericService {
	constructor(model, includes){
        this.model = model;
        this.includes = includes || [];
	}
	create(data) {
		return this.model.create(data);
	}

    /**
     * To obtain Instances for the newly created values, you will need to query for them again.
     */
    bulkCreate(list) {
        return this.model.bulkCreate(list)
    }

    getById(id) {
        const include = this.includes;
        return this.model.findByPk(id, {include});
    }

    count(where) {
        return this.model.count({where})
    }

    findOne(where) {
	    const include = this.includes;
        return this.model.findOne({ where, include});
    }
    findAll(where = {}) {
        const offset =  parseInt(where.offset) || 0;
        const limit =  parseInt(where.limit) || 100;
        delete where.offset;
        delete where.limit;

        const order = [],  {orderBy, orderDir} = where;

        if(orderBy) {
            order.push([orderBy, orderDir|| constants.ORDER_DIRECTION.DEFAULT], )
        }
        delete where.orderBy;
        delete where.orderDir;

        const include = this.includes;
        return this.model.findAll({where, include, limit, offset, order});
    }

    update(id,data){
        const options = {where:{id},returning:true,plain:true};
        return this.model.update(data,options);
    }

    bulkUpdate(where,data, returning = true){
        const options = {where,returning,plain:true};
        return this.model.update(data,options);
    }


    delete(id) {
        const where = {id};
        return this.model.destroy({where});
    }

    deleteByQuery(where) {
        return this.model.destroy({where});
    }

    destroy(ids) {
        if(!ids || ids.length ===0) {
            return Promise.reject('NOT ALLOWED DELETE')
        }
        const where = {id: ids};
        return this.model.destroy({where});
    }

}

module.exports = {
    machine: new GenericService(models.Machine, []),
    pod: new GenericService(models.Pod, []),
};