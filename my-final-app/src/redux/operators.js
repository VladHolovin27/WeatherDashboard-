import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_KEY_PIXABAY = "42629002-9d7d7e0f76ae1b8339ce7d0b4";
const API_KEY_ANIMALS = "wDey1Rvlv6GxHPaJQEH6yA==Mn4bhAtTJ28gMwrC";
const API_WEATHER_KEY = "cb8669a0aa3fe7c99e7ebba38144e4d0";

export const fetchNature = createAsyncThunk(
  "nature/fetchNature",
  async (name) => {
    const imageResponse = await axios.get(
      `https://pixabay.com/api/?key=${API_KEY_PIXABAY}&q=${name}&image_type=photo`
    );

    const titleResponse = await axios.get(
      `https://api.api-ninjas.com/v1/animals?name=${name}`,
      {
      headers: {
      "X-Api-Key": API_KEY_ANIMALS,
    },
  }
);

  return {
    img: imageResponse.data.hits[0]?.webformatURL || "",
    title: titleResponse.data[0]?.characteristics?.slogan || "Cute animal!",
  };
  }
);

export const weatherCharacteristics = createAsyncThunk(
  "nature/fetchWeather", 
  async () => {
    try {
      const res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=33.44&lon=-94.04&appid=${API_WEATHER_KEY}&units=metric`);

      return {
        feelsLike: res.data.main.feels_like,
        maxTemp: res.data.main.temp_max,
        minTemp: res.data.main.temp_min,
        humidity: res.data.main.humidity,
        pressure: res.data.main.pressure,
        windSpeed: res.data.wind.speed,
        visibility: res.data.visibility,
      };
    } catch (error) {
      console.error("Weather API error:", error.response?.data || error.message);
      throw error;
    }
  }
);


export const fetchEightDayWeather = createAsyncThunk(
    "eightCast/fetcheightCast",
    async () => {
        const eightCastResponse = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?lat=49.9808&lon=36.2527&units=metric&lang=en&appid=${API_WEATHER_KEY}`)
        console.log(eightCastResponse);
        const dailyForecasts = eightCastResponse.data.list.filter(item => item.dt_txt.includes("15:00:00"));

        const parsedData = dailyForecasts.map(item => ({
            icon: item.weather[0].icon,
            description: item.weather[0].description,
            dt: new Date(item.dt * 1000).toLocaleDateString('en', {
                weekday: 'long', month: 'short', day: 'numeric'
            }),
            feelsLike: item.main.feels_like,
            temp: item.main.temp
        }));

        return parsedData;
        // return {
        //     icon: eightCastResponse.data.list.weather.icon  '',
        //     description: eightCastResponse.data.list.weather.description  'Good/Bad weather',
        //     dt: new Date(eightCastResponse.data.list.dt * 1000).toLocaleDateString('en', { weekday: 'long', month: 'short', day: 'numeric' }),
        //     feelsLike: eightCastResponse.data.list.main.feelsLike
        // }
    }
)