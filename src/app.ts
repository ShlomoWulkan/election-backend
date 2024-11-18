import express  from "express";
import 'dotenv/config'
import userController from "./controllers/userController";
import adminController from "./controllers/adminController";
import votesController from "./controllers/votesController";
import candidateController from "./controllers/candidateController";
import connectDB from "./config/db";
import cors from "cors"
import http from "http";
import { Server } from "socket.io";
import { handleSocketConnection } from "./socket/io";

const port = process.env.PORT || 2224
const app = express();
const httpServer = http.createServer(app)
export const io = new Server(httpServer, {
    cors: {
        origin: "*",
        methods: "*"
    }
})

io.on("connection", handleSocketConnection )

connectDB()

app.use(express.json())
app.use(cors())

app.use("/api/users", userController)
app.use("/api/admin", adminController)
app.use("/api/votes", votesController)
app.use("/api/candidates", candidateController)

httpServer.listen(port, () => {
    console.log(`Server is up and running on port ${port}`)
})
