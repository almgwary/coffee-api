/**
 * @typedef Machine
 * @property {string} sku.required - machine sku
 * @property {string} size.required - machine size
 * @property {string} type.required - machine type
 * @property {boolean} waterCompatible.required - machine waterCompatible
 */
const machine=(sequelize,DataTypes)=>{

	const Machine=sequelize.define('Machine',{
        sku: {type: DataTypes.STRING, unique:true},
        type: {type: DataTypes.STRING},
        model: {type: DataTypes.STRING},
        waterCompatible: {type: DataTypes.BOOLEAN},
	});

    Machine.associate=(models)=>{};

	return Machine;
};

module.exports=machine;