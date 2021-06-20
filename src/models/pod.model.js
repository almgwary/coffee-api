/**
 * @typedef Pod
 * @property {string} sku.required - pod sku
 * @property {string} flavor.required - pod flavor
 * @property {number} size.required - pod size
 * @property {string} type.required - pod type
 */
const pod=(sequelize,DataTypes)=>{
	const Pod=sequelize.define('Pod',{
        sku: {type: DataTypes.STRING, unique:true},
        flavor: {type: DataTypes.STRING},
        size: {type: DataTypes.INTEGER},
        type: {type: DataTypes.STRING},
	});

    Pod.associate=(models)=>{};

	return Pod;
};

module.exports=pod;