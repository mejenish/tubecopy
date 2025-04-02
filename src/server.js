import dotenv from "dotenv";
import connectDB from "./db/index.js";

dotenv.config({
    path: ".env"
})

// const app = express();

connectDB();

// (async () => {
//     try {
//         const dbConnect = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
//         app.on("error", (err) => {
//             console.error("Error: ", err);
//             throw err;
//         })

//         app.listen(process.env.PORT, () => {
//             console.log(`App is listening on port ${process.env.PORT}`);
//         })

//     } catch (error) {
//         console.error("Error: ", error)
//         throw error;
//     }
// })