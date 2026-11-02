import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5555;

app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    status: true,
    message: "Connected and working...",
  });
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server listening at port ${PORT}`);
});
