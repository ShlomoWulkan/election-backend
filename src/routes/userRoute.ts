import e, { Request, Response } from "express";
import { createNewUser, getUserData, userLogin } from "../services/users";
import { ProfileDto } from "../types/dto/userDTO";

export const login = async(req: Request, res: Response) => {
    try {
        const user = await userLogin(req.body);
        res.status(200).json(user)
    } catch (error) {
        res.status(400).json((error as Error).message)
    }

}

export const register = async(req: Request, res: Response) => {
    try {
        const newUser = await createNewUser(req.body);
        res.status(201).json(newUser)
    } catch (error) {
        res.status(400).json((error as Error).message)
    }
}

export const profile = async (
  req: Request<any, any, ProfileDto>,
  res: Response
) => {
  try {
    const data = await getUserData(req.body);
    res.status(201).json(data);
  } catch (err) {
    res.status(400).json((err as Error).message);
  }
};
