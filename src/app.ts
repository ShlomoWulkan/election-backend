import express  from "express";
import 'dotenv/config'

const port = process.env.PORT || 2224
const app = express();

app.listen(port, () => {
    console.log(`Server is up and running on port ${port}`)
})