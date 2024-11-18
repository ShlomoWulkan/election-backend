import { io } from '../app';
import { Socket } from "socket.io";

export const handleSocketConnection = (client: Socket) => {
    console.log(`new socket connection: ${client.id}`);
    client.on("disconnect", () => {
        console.log("user disconnected");
    })

    client.on("newVote", () => {
        console.log("new vote has occured")
        io.emit("newVoteHasOccured")
    })
};

