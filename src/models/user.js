import mongoose from "mongoose"
import bcrypt from "bcrypt"
const Schema = mongoose.Schema


const UserSchema = new Schema({
    name:{
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        unique: true,
        required: true
     //enlever les espaces dans les champs
    },
    //favbook:{
        //type: String,
        //require: true,
        //trim: true
    //}
    username: {
        type:String,
        required:true,
        trim: true
    },
    password: {
        type:String,
        required:true
    }
})

//authenticate input

UserSchema.statics.authenticate = function(email, password, callback) {
    User.find({email:email})
        .exec(function(error, user) {//une méthode mongodb, on va exécuter une fonction
            if(error) {
                console.log('erreur de base de données')
                return callback(error);
            }
            else if (!user) {
                var err = new Error('User not found.')
                console.log('utilisateur pas trouvé')
                err.status = 401;
                return callback(err);
            }

            

            console.log('pb mot de passe');
            console.log('password :' + password)
            console.log('user :' + user)
            //user = JSON.parse(JSON.stringify(user))[0];

            //console.log(x.property_actually_now_defined);
            //console.log('propriétés de user :' + Object.getOwnPropertyNames(user))
            //console.log('user.password :' + x.password)

        
            bcrypt.compare(password, user.password, function(error, result) {//password (ce qu'on a ecrit dans le login) comparé avec user.password(ce qui se trouve dans la base de données)
                
                if(result === true) {//si on a bon
                    return callback(null, user)
                }  
                else {
                    
                    return callback();
                    
                }
            })
        })
}

UserSchema.pre('save', function(next) {
    const user = this; //this= chaque instance du model
    console.log(this)
    bcrypt.hash(user.password, 10, function(err, hash){
        if(err) return next(err)
        user.password = hash;
        next()
    })
})


const User = mongoose.model('User', UserSchema)

export { User }