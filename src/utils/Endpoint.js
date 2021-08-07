import {create} from 'apisauce';

const client = create({
  baseURL: `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=hourly,minutely&units=metric&appid=${e507427d55b61a434a9b37fba828156f}`,
});

export default client;
