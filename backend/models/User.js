const mongoose = require('mongoose')
const {Schema} = mongoose;
const bcrypt = require('bcrypt')

const userSchema = new Schema({
     name:{
          type: String,
          required: true
     },
     location:{
          type: String,
          required: true
     },
     email:{
          type: String,
          required: true,
          unique: true
     },
     password:{
          type: String,
          required: true
     }
     ,
     date:{
          type:Date,
          default: Date.now
     }
})

userSchema.pre('save', async function(next){
     const person = this;
     console.log(person)
     //Hash the password only if it has been modified(or is new)
     if(!person.isModified('password')){
          return next();
     }

     //we will enter try catch block only if password is modified
     try {
          //salt ko generate krten hain phle
          const salt = await bcrypt.genSalt(10)

          //hash password ko generate krten hai abb
          const hashedPassword = await bcrypt.hash(person.password, salt)

          //now override the plain password with the hashed one
          person.password = hashedPassword

          next();
     } catch (error) {
          return next(error)
     }
})

userSchema.methods.comparePassword = async function(candidatePassword){
     try {
          //we will use bcrypt to compare the provided password with the hash password
          const isMatch = await bcrypt.compare(candidatePassword, this.password)
          return isMatch;

     } catch (error) {
          throw error;
     }
}

module.exports = mongoose.model('user', userSchema)