import '/src/WeatherForecast.css'
import WeatherIcon from './WeatherIcon';
import WeatherData from './WeatherData';

const WeatherForecast = (props) => {
  const {foreCast}= props
  const icon = {...foreCast}
  const data = {...foreCast}
  return (
    <div className="weather">
      <h2>Day of the Week</h2>
      <WeatherIcon  icon={icon} />
      <WeatherData  data={data}/>
    </div>
  );
}



export default WeatherForecast
