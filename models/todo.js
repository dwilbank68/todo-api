module.exports = function(sequelize, DataTypes){
    return sequelize
        .define('todo', {
            description: {
                type:DataTypes.STRING,
                allowNull: false,
                validate: { // see note 2
                    len: [1,250]
                }
            },
            completed: {
                type:DataTypes.BOOLEAN,
                allowNull: false,
                defaultValue: false
            }
        });
};