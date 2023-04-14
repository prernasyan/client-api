const {UserSchema } = require ("./User.Schema")


const insertUser = userObj => {
    UserSchema(userObj).save()
    .then(data => console.log(data))
    .catch((error) => console.log(error))
}