

const WeatherIcon = (props) => {
  const {icon} = props
  return (
      <img src={icon.img} alt={icon.imgAlt} />
  );
}

export default WeatherIcon