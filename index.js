import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import bodyParser from "body-parser";
import postRoutes from "./routes/posts.js";
import userRouter from "./routes/user.js";
import dotenv from "dotenv";
const app = express();
dotenv.config();
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

const PORT = process.env.PORT || 5000;

app.use("/posts", postRoutes);
app.use("/user", userRouter);
app.get("/",(req, res) =>{
    res.send("Hey your connected successfully")
})

const db_connection = "mongodb+srv://Sanjai:Sanjai123@cluster0.rsqxc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
mongoose
  .connect(db_connection, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() =>
    app.listen(process.env.PORT || 3000, () =>
      console.log(`Server Running on Port: http://localhost:${PORT}`)
    )
  )
  .catch((error) => console.log(`${error} did not connect`));

mongoose.set("useFindAndModify", false);


