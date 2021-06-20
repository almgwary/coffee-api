const sequelize=require('../config/db');
const models = {
	Machine:sequelize.import('./machine.model'),
	Pod:sequelize.import('./pod.model'),
	sequelize,
};
Object.keys(models).forEach(key => {
	if ('associate' in models[key]) {
		models[key].associate(models);
	}
});
module.exports= models;

