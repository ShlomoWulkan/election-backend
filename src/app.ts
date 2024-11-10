import express  from "express";
import 'dotenv/config'
import userController from "./controllers/userController";
import adminController from "./controllers/adminController";
import votesController from "./controllers/votesController";
import candidateController from "./controllers/candidateController";

const port = process.env.PORT || 2224
const app = express();

app.use(express.json())

app.use("/api/users", userController)
app.use("/api/admin", adminController)
app.use("/api/votes", votesController)
app.use("/api/candidates", candidateController)

app.listen(port, () => {
    console.log(`Server is up and running on port ${port}`)
})