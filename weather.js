import express from "express";
import dotenv from "dotenv";
import axios from "axios";
dotenv.config();

const app = express();
const PORT = 8080;
app.use(express.json());

// weather

app.post("/weather", async (req, res) => {
  try {
    let city = req.body.city;
    let API = process.env.API;
    let outPut = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API}`
    );
    console.log(outPut.data);
//  data collection
    let temp = outPut.data.main.temp;
    let humidity = outPut.data.main.humidity;
    let pressure = outPut.data.main.pressure;
    let latitude = outPut.data.coord.lat;
    let longitude = outPut.data.coord.lon;
    let decribtion = outPut.data.weather[0].description;
    let speed = outPut.data.wind.speed;
    let counrty = outPut.data.sys.country;
    let name = outPut.data.name;

    let userData ={
        temp,
        humidity,
        pressure,
        latitude,
        longitude,
        decribtion,
        speed,
        counrty,
        name
    }
    /*
    lati
    logi
    descr
    speed
    coutry
    name
    */

    res.status(200).json(userData)
    //   res.status(200).send(` Hello user the weather in ${city} is as follows  :\n
    //     The temperature in ${city } is    :${(temp-273).toFixed(2)}
    //     The humidity in ${city} is :${humidity}
    //     The pressure is ${city} is    :${pressure}
    //     The latitude of ${city} is :${latitude}
    //     The Longtitude of ${city} is :${longitude}
    //     The Climate is ${decribtion}
    //     The wind speed is  :${speed}
    //     The country is : ${counrty}
    //     The City name is : ${name}`);
  } catch (error) {
    console.log(error);
    res.status(500).json({ mdg: error });
  }
});

// listerneer
app.listen(PORT, () => {
  console.log(`THE SERVER IS UP AND RUNNING AT ${PORT}`);
});
