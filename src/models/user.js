export function userDefine(sequelize,DataTyes){
    return sequelize.define('User',{
        id : {
            type : DataTyes.INTEGER,
            primaryKey: true,
            autoIncrement : true
        },
        name :{
            type : DataTyes.STRING(50),
            allowNull: true,
            unique : {
                msg : 'Ce nom existee déjà'
            }
        },
        password:{
            type : DataTyes.STRING,
            allowNull: true
        }
    })
}