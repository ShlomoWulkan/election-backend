import userModel from "../models/userModel";
import { LoginDTO, registerDTO } from "../types/dto/userDTO";
import bcrypt from "bcrypt"

export const userLogin = async (user: LoginDTO) => {
   try {
    const oldUser = await userModel.findOne({username: user.username})
    if(!oldUser) throw new Error("No user found")
    const isMatch = await bcrypt.compare(user.password, oldUser.password)
    if(!isMatch) throw new Error("Password does not match")
    return oldUser
   } catch (err) {
    console.log(err);
    throw new Error("Could not login user")
   }
}

export const createNewUser = async (user: registerDTO) => {
   try {
    const encPass = await bcrypt.hash(user.password, 10)
    user.password = encPass
    const newUser = new userModel(user)
    await newUser.save()
   } catch (err) {
    console.log(err);
    throw new Error("Could not create user")
   }
}