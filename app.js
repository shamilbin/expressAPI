import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = 8080;

app.get("/", (req, res) => {
  try {
    res.status(200).send("WEOLCOME TO HOME PAGE");
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: error });
  }
});
app.get("/shamil", (req, res) => {
  try {
    res.status(200).send("WELCOME TO SHAMIL HOME PAGE");
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: error });
  }
});

app.get("/date", (req, res) => {
  try {
    let date = new Date();
    res.status(200).send(`Hello user TODAYS date is ${date}`);
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: error });
  }
});
//      year
app.get("/year", (req, res) => {
  try {
    const date = new Date();
    let year = date.getFullYear();
    res.status(200).send(`Hello user current YEAR is ${year}`);
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: error });
  }
});
//      Days
app.get("/day", (req, res) => {
  try {
    const date = new Date();
    let day = date.getDay();

    // switch (day) {
    //   case 0:
    //     console.log("Sunday");

    //     break;
    //   case 1:
    //     console.log("Monday");

    //     break;
    //   case 2:
    //     console.log("Tuesday");

    //     break;
    //   case 3:
    //     console.log("Wednesday");

    //     break;
    //   case 4:
    //     console.log("Thursday");

    //     break;
    //   case 5:
    //     console.log("Friday");

    //     break;
    //   case 6:
    //     console.log("Saturday");

    //     break;

    //   default:
    //     console.log("invalid input");
    //     break;
    // }

    let arr = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    let currDay = arr[day];

    res.status(200).send(`Hello user current DAY is ${currDay}`);
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: error });
  }
});
//      status
app.get("/status", (req, res) => {
  try {
    let date = new Date();
    let hour = date.getHours();
    let greet;
    if (hour < 12) {
      greet = "GOOD MORING";
    }
    if (hour > 12 && hour < 18) {
      greet = "GOOD AFTER NOON";
    }
    if (hour > 18 && hour < 24) {
      greet = "GOOD NIGHT";
    }

    res.status(200).send(` ${greet}`);
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: error });
  }
});
//          season

app.get("/season", (req, res) => {
  try {
    let date = new Date();

    let number = date.getMonth();
    let season;
    if ((number = 12 || number < 2)) {
      season = "winter";
    }
    if (number > 3 || number < 5) {
      season = "Monsoon";
    }
    if (number > 6 || number < 8) {
      season = "Summer";
    }
    if (number > 9 || number < 11) {
      season = "Autum";
    }
    res.status(200).send(`Hello user The current season is ${season}`);
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: error });
  }
});

app.listen(PORT, () => {
  console.log(`SERVER IS UP AND RUNNING AT ${PORT}`);
});
