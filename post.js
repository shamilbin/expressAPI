import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());

//      adding name

app.post("/add", (req, res) => {
  try {
    let userInput = req.body;
    console.log(userInput);

    res.status(200).send(`HELLO USER I AM ${userInput.fname}`);
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: error });
  }
});
//      odd or even

app.post("/oddoreven", (req, res) => {
  try {
    let number = req.body;
    console.log(number);
    if (number.numb) {
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ try: error });
  }
});

//      LISTERENER

app.listen(PORT, () => {
  console.log("Server is up and sunning. :");
});
