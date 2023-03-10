import { useEffect, useState } from "react";

export const useWeather = () => {
  const [temp, setTemp] = useState();
  const [rain, setRain] = useState();
  const [humidity, setHumidity] = useState();

  useEffect(() => {
    const url =
      "https://api.open-meteo.com/v1/forecast?latitude=37.34&longitude=-121.89&hourly=temperature_2m&temperature_unit=fahrenheit&hourly=rain&precipitation_unit=inch&hourly=relativehumidity_2m";

    const fetchWeather = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();

        Object.entries(json).map(([key, value]) => {
          if (key === "hourly") {
            setRain(value.rain[0]);
            setTemp(value.temperature_2m[0]);
            setHumidity(value.relativehumidity_2m[0]);
          }
          return { [key]: value };
        });
      } catch (err) {
        console.error(err);
      }
    };

    fetchWeather();
  }, []);

  return {
    temp,
    rain,
    humidity,
  };
};
