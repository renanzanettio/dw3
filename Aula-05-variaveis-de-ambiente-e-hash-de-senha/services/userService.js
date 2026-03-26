import User from "../models/Users.js"

class userService{
    // Método para cadastrar um usuário
    async Create(name, email, password){
        try{
            const newUser = new User({
                name,
                email,
                password
            })
            // .save() -> utilizado para gravar um registro no BD
            await newUser.save()
        }
        catch(error){
            console.log(error)
        }
    }
    // método para buscar um usuario
    async getOne(email){
        try{
            const user = await User.findOne({email:email})
            return user
        } catch(error){
            console.log(error)
        }
    }
}

// quando exporta classe usa a palavra new e tem que usar o () no final
export default new userService();