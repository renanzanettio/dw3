import User from "../models/Users.js";

class userService {
    async Create(name, email, password) {
        try {
            const newUser = new User({
                name,
                email, 
                password
            });
            // .save() -> Utilizado para graavrr um registro no BD
            await newUser.save();
        } catch (err) {
            console.log(err)
        }
    }

    async getOne(email) {
        try{
            // O método findOne() busca o email no banco de dados User
            const user = await User.findOne({ email : email})
            return user
        } catch(err) {
            console.log(err)
        }
    }

}

export default new userService();