import dotenv from "dotenv"
import { app } from "./app.js"
import { connectDB } from "./db/db.connection.js"


dotenv.config({
    path: './env'
})

connectDB()
    .then(app.listen(process.env.PORT || 8080, () => {
        console.log(`Server is running on ${process.env.PORT}`);
    })).catch((error) => {
        console.log("error : ", error);

    })