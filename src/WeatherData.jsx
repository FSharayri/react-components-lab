

const WeatherData = (props) => {
  const {data}= props
  return (
    <>
      <p><span>conditions: </span>{data.conditions}</p>
      <p><span>time: </span>{data.time}</p>
    </>
  );
}



export default WeatherData