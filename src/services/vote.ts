import UserModel from "../models/userModel";
import candidateModel from "../models/candidateModel";
import { VoteDto } from "../types/dto/voteDTO";

export const handleNewVote = async (vote: VoteDto) => {
  try {
    await candidateModel.findByIdAndUpdate(vote.candidateId, {
      $inc: {
        votes: 1,
      },
    });
    await UserModel.findByIdAndUpdate(vote.userId, {
      $set: {
        hasVoted: true,
        votedFor: vote.candidateId,
      },
    });

    return {
      status: "DONE",
    };
  } catch (err) {
    return {
      status: "ERROR",
      err: err as Error,
    };
  }
};
