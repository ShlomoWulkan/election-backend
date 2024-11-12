import e from "express";
import candidateModel from "../models/candidateModel";

export const initDatabase = async () => {
    try {
        const cands = [
      {
        name: "John",
        image: "https://randomuser.me/api/portraits/med/men/81.jpg",
      },
      {
        name: "Johnny",
        image: "https://randomuser.me/api/portraits/med/men/13.jpg",
      },
      {
        name: "Johnnyiahoo",
        image: "https://randomuser.me/api/portraits/med/men/83.jpg",
      },
      {
        name: "Johnniel",
        image: "https://randomuser.me/api/portraits/med/men/0.jpg",
      },
      {
        name: "Johnny",
        image: "https://randomuser.me/api/portraits/med/men/6.jpg",
      },
    ];

    for (const cand of cands) {
        const newCand = new candidateModel(cand)
        await newCand.save()
    }
    } catch (err) {
        console.log("error",err)
    }
};

export const getCandidatesList = async () => {
    try {
        const candidates = await candidateModel.find({})
        return candidates
    } catch (err) {
        console.log("error",err)
        throw new Error("Could not get candidates")
    }
};