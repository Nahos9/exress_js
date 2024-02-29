export function define (sequelize,DataType){
    return sequelize.define('Pokemon',{
        id:{
            type:DataType.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },
        name:{
            type:DataType.STRING,
            allowNull:false
        },
        type:{
            type:DataType.STRING,
            allowNull : false
        }
    },{
        timestamps:true,
        createdAt: 'created',
        updatedAt:false
    })
}