import dotenv from "dotenv";
import connectDB from "./db/index.js";
import app from "./app.js";

dotenv.config({
    path: ".env"
})

// const app = express();

connectDB().then(()=>{
    app.listen(process.env.PORT || 8000, ()=>{
        console.log(`Server is running on PORT: ${process.env.PORT}`);
    })
    app.on("error",(err)=>{
        console.log("App error occured: ", err);
        throw err;
    });
}).catch((error)=>{
    console.error("MONGODB Connection FAILED: ", error);
});

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