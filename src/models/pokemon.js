export function define (sequelize,DataType){
    return sequelize.define('Pokemon',{
        id:{
            type:DataType.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },
        name:{
            type:DataType.STRING,
            allowNull:false,
            // unique:{
            //     msg : 'Le nom existe déjà!!'
            // },
            validate:{
                notNull : {msg:'Le champ doit-être renseigné!!'},
                notEmpty:{msg:'Le champ ne doit pas être vide ooooh!!'}
            }
        },
        type:{
            type:DataType.STRING,
            allowNull : false,
            get (){
                return this.getDataValue('type').split()
            },
            set (type){
                this.setDataValue('type',type.join())
            }
        }
    },{
        timestamps:true,
        createdAt: 'created',
        updatedAt:false
    })
}