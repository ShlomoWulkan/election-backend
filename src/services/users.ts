import userModel from "../models/userModel";
import { LoginDTO, ProfileDto, registerDTO } from "../types/dto/userDTO";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

export const userLogin = async (user: LoginDTO) => {
   try {
    const oldUser = await userModel.findOne({username: user.username}).lean()
    if(!oldUser) throw new Error("No user found")
    const isMatch = await bcrypt.compare(user.password, oldUser.password)
    if(!isMatch) throw new Error("Password does not match")

   const token = await jwt.sign({
      user_id: oldUser._id,
      username: oldUser.username,
      isAdmin: oldUser.isAdmin
   }, 
   process.env.JWT_SECRET!,
   {
      expiresIn: "10m"
   })

   return {...oldUser, token, password: "*******"}

   } catch (err) {
    console.log(err);
    throw new Error("Could not login user")
   }
};

export const createNewUser = async (user: registerDTO) => {
   try {
    if(!user.username || !user.password) throw new Error("Missing username or password")
    const encPass = await bcrypt.hash(user.password, 10)
    user.password = encPass
    const newUser = new userModel(user)
    return await newUser.save()
   } catch (err) {
    console.log(err);
    throw new Error("Could not create user")
   }
};

export const getUserData = async (user: ProfileDto) => {
  try {
    if (!user.id) throw new Error("Missing user data, [id] is required");
    const currUser = await userModel.findById(user.id).lean();
    return { hasVoted: currUser?.hasVoted, votedFor: currUser?.votedFor };
  } catch (err) {
    console.log(err);
    throw new Error("Can't create new user");
  }
};
