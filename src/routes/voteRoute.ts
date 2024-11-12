import { Request, Response } from "express";
import { VoteDto } from "../types/dto/voteDTO";
import { handleNewVote } from "../services/vote";

export const vote = async (req: Request<any, any, VoteDto>, res: Response) => {
  try {
    const data = await handleNewVote(req.body);
    res.json({ data });
  } catch (err) {
    res.status(500).json({ err });
  }
};
