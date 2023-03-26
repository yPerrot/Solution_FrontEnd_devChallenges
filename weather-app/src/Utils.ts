import Clear from './assets/Clear.png';
import Hail from './assets/Hail.png';
import HeavyCloud from './assets/HeavyCloud.png';
import HeavyRain from './assets/HeavyRain.png';
import LightCloud from './assets/LightCloud.png';
import LightRain from './assets/LightRain.png';
import Shower from './assets/Shower.png';
import Sleet from './assets/Sleet.png';
import Snow from './assets/Snow.png';
import Thunderstorm from './assets/Thunderstorm.png';

export function getFormatedDate(date: string) {
    const event = new Date(date)
    // Error with toLocaleDateString options' type
    const options: any = {
        weekday: 'short',
        month: 'short',
        day: 'numeric',
    };

    return event.toLocaleDateString(undefined, options);
}


export function getIconFromWeather(weather: string) {

    switch (weather) {
        case 'Ice pellets':
        case 'Light showers of ice pellets':
        case 'Moderate or heavy showers of ice pellets':
            return Hail;

        case 'Cloudy':
        case 'Overcast':
        case 'Mist':
        case 'Fog':
        case 'Freezing fog':
            return HeavyCloud;

        case 'Heavy rain':
        case 'Heavy rain at times':
            return HeavyRain;

        case 'Patchy light drizzle':
        case 'Patchy rain possible':
        case 'Patchy light rain':
        case 'Patchy sleet possible':
        case 'Patchy freezing drizzle possible':
        case 'Patchy snow possible':
        case 'Patchy light snow':
        case 'Patchy moderate snow':
        case 'Patchy heavy snow':
        case 'Patchy light rain with thunder':
        case 'Patchy light snow with thunder':
            return LightCloud;

        case 'Light drizzle':
        case 'Light rain':
        case 'Moderate rain':
            return LightRain;

        case 'Moderate rain at times':
        case 'Light rain shower':
        case 'Moderate or heavy rain shower':
        case 'Torrential rain shower':
            return Shower;

        case 'Freezing drizzle':
        case 'Heavy freezing drizzle':
        case 'Light freezing rain':
        case 'Moderate or heavy freezing rain':
        case 'Light sleet':
        case 'Moderate or heavy sleet':
        case 'Light sleet showers':
        case 'Moderate or heavy sleet showers':
            return Sleet;

        case 'Blowing snow':
        case 'Blizzard':
        case 'Light snow':
        case 'Moderate snow':
        case 'Heavy snow':
        case 'Light snow showers':
        case 'Moderate or heavy snow showers':
            return Snow;

        case 'Thundery outbreaks possible':
        case 'Moderate or heavy rain with thunder':
        case 'Moderate or heavy snow with thunder':
            return Thunderstorm;

        case 'Sunny':
        case 'Partly cloudy':
        default:
            return Clear; // Return Clear by default
    }
}
