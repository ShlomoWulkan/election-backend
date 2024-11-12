import { Request, Response } from "express";
import { initDatabase } from "../services/candidatesService";
import { getCandidatesList } from "../services/candidatesService";


export const sid = async (req: Request, res: Response) => {
  try {
    await initDatabase();
    res.sendStatus(201);
  } catch (err) {
    console.log(err);
    res.sendStatus(400);
  }
};

export const getList = async (req: Request, res: Response) => {
  try {
    const list = await getCandidatesList();
    res.status(200).json(list);
  } catch (err) {
    console.log(err);
    res.sendStatus(400);
  }
};