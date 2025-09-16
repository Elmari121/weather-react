import { useState, useEffect } from "react";
import axios from "axios";
import SearchBar from "../molecules/SearchBar";
import WeatherCard from "../organisms/WeatherCard";

export default function WeatherPage() {
  const [weather, setWeather] = useState(null);

  const fetchWeather = (city) => {
    let apiKey = "30927dtfa44b4770359oe8258a9c5b2c";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;

    axios.get(apiUrl).then((res) => {
      let data = res.data;
      setWeather({
        city: data.city,
        time: new Date(data.time * 1000).toLocaleTimeString(),
        description: data.condition.description,
        humidity: data.temperature.humidity,
        wind: data.wind.speed,
        temperature: Math.round(data.temperature.current),
        icon: data.condition.icon_url,
      });
    });
  };

  useEffect(() => {
    fetchWeather("Paris");
  }, []);

  return (
    <div className="weather-app">
      <header>
        <SearchBar onSearch={fetchWeather} />
      </header>
      <main>{weather && <WeatherCard data={weather} />}</main>
    </div>
  );
}
