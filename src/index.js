import { app } from "./app.js";
import connectDB from "./db/index.js";
import dotenv from "dotenv";

dotenv.config({
  path: "./env",
});

const port = process.env.PORT || 3000;

connectDB()
  .then(() => {
    app.listen(port, () => {
      console.log(`Server is Running at http://localhost:${port}`);
    });
  })
  .catch((error) => console.log("MONGO DB CONNECTION FAILED :", error));
