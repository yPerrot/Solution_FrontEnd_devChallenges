
const API_KEY = '82cb92481ac04719ba3204525230703';

export type WeatherData = {
  // Location: 
  location: string;

  // Temperature
  temp_c: number;
  temp_f: number;

  // Weather
  condition: string;

  // Wind
  wind: {
    wind_degree: number;
    wind_dir: string;
    wind_kph: number;
    wind_mph: number;
  };

  // Humidity
  humidity: number;

  // Visibility
  vis_km: number;
  vis_miles: number;

  // Air Pressure
  pressure_in: number;
  pressure_mb: number;

  forecastday: [Forecastday, Forecastday, Forecastday, Forecastday, Forecastday];
};

type Forecastday = {
  // Date
  date: string;
  date_epoch: number;

  // Temperature
  maxtemp_c: number;
  maxtemp_f: number;
  mintemp_c: number;
  mintemp_f: number;

  // Weather
  condition: string;
}

export const defaultWeatherData: WeatherData = {
  location: 'London',

  temp_c: -1,
  temp_f: -1,

  condition: "To Be Defined",

  wind: {
    wind_degree: 80,
    wind_dir: "E",
    wind_kph: 25.9,
    wind_mph: 16.1,
  },

  humidity: 93,

  vis_km: 7,
  vis_miles: 4,

  pressure_in: 29.26,
  pressure_mb: 991,

  forecastday: [
    {
      date: "2023-03-08",
      date_epoch: 1678233600,
      maxtemp_c: 1.6,
      maxtemp_f: 34.9,
      mintemp_c: 1,
      mintemp_f: 33.8,
      condition: "Heavy Rain",
    },
    {
      date: "2023-03-08",
      date_epoch: 1678233600,
      maxtemp_c: 1.6,
      maxtemp_f: 34.9,
      mintemp_c: 1,
      mintemp_f: 33.8,
      condition: "Heavy Rain",
    },
    {
      date: "2023-03-08",
      date_epoch: 1678233600,
      maxtemp_c: 1.6,
      maxtemp_f: 34.9,
      mintemp_c: 1,
      mintemp_f: 33.8,
      condition: "Heavy Rain",
    },
    {
      date: "2023-03-08",
      date_epoch: 1678233600,
      maxtemp_c: 1.6,
      maxtemp_f: 34.9,
      mintemp_c: 1,
      mintemp_f: 33.8,
      condition: "Heavy Rain",
    },
    {
      date: "2023-03-08",
      date_epoch: 1678233600,
      maxtemp_c: 1.6,
      maxtemp_f: 34.9,
      mintemp_c: 1,
      mintemp_f: 33.8,
      condition: "Heavy Rain",
    },
  ]
};

export type GetWeatherDataParam = string | { latitude: number; longitude: number } | undefined;
export type GetWeatherData = typeof getWeatherData;

export async function getWeatherData(location: GetWeatherDataParam = 'London') {
  try {
    const stringLocation = typeof location === 'string' ? location : location.latitude + ',' + location.longitude;
    const resp = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${stringLocation}&days=5&aqi=no&alerts=no`, {
      mode: 'cors',
    })
    
    if (!resp.ok) console.error('Error met during data fetching')

    const json = await resp.json();
    return objToWeatherData(json);
  } catch (error) {
    console.error(error)
  }
}

// TODO: Type direct API response
function objToWeatherData(apiResponse: any): WeatherData {
  let data: any = {
    location: apiResponse.location.name,

    temp_c: apiResponse.current.temp_c,
    temp_f: apiResponse.current.temp_f,

    condition: apiResponse.current.condition.text,

    wind: {
      wind_degree: apiResponse.current.wind_degree,
      wind_dir: apiResponse.current.wind_dir,
      wind_kph: apiResponse.current.wind_kph,
      wind_mph: apiResponse.current.wind_mph,
    },

    humidity: apiResponse.current.humidity,

    vis_km: apiResponse.current.vis_km,
    vis_miles: apiResponse.current.vis_miles,

    pressure_in: apiResponse.current.pressure_in,
    pressure_mb: apiResponse.current.pressure_mb,
  };

  data.forecastday = apiResponse.forecast.forecastday.map((forecastday) => {
    return {
      date: forecastday.date,
      date_epoch: forecastday.date_epoch,

      maxtemp_c: forecastday.day.maxtemp_c,
      maxtemp_f: forecastday.day.maxtemp_f,
      mintemp_c: forecastday.day.mintemp_c,
      mintemp_f: forecastday.day.mintemp_f,

      condition: forecastday.day.condition.text,
    }
  })

  return data;
}
