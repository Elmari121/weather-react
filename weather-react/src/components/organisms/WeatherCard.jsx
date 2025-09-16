export default function WeatherCard({ data }) {
  return (
    <div className="weather-app-data">
      <div>
        <h1 className="weather-app-city">{data.city}</h1>
        <p className="weather-app-details">
          {data.time}, {data.description}
          <br />
          Humidity: <strong>{data.humidity}%</strong>, Wind:{" "}
          <strong>{data.wind} km/h</strong>
        </p>
      </div>
      <div className="weather-app-temperature-container">
        <img src={data.icon} alt="icon" className="weather-app-icon" />
        <div className="weather-app-temperature">{data.temperature}</div>
        <div className="weather-app-unit">°C</div>
      </div>
    </div>
  );
}
