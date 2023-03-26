<script lang="ts">
    import SearchPanel from "./SearchPanel.svelte";
    import { getFormatedDate, getIconFromWeather } from '../Utils';
    import type { GetWeatherDataParam, WeatherData } from '../WeatherAPI';

    export let meteoData: WeatherData;
    export let setWeatherData: (location: GetWeatherDataParam) => void ;
    export let doUseMetricSystem: boolean;
    
    let displaySearch = false;

    const openPanel = () => {
        displaySearch = true;
        document.querySelector('body').classList.add('hide-overflow');
    }

    const closePanel = () => {
        displaySearch = false;
        document.querySelector('body').classList.remove('hide-overflow');
    }

    const getCurrentLocation = () => {
        if (!navigator.geolocation) {
            console.error('Geolocation is not supported by your browser');
        } else {
            // Success
            const success = (position: GeolocationPosition) => setWeatherData({ latitude: position.coords.latitude, longitude: position.coords.longitude })
            const error = () => console.error('Unable to retrieve your location');
            
            navigator.geolocation.getCurrentPosition(success, error);
        }
    }

</script>

<aside>
    <SearchPanel {displaySearch} {closePanel} {setWeatherData} />

    <header>
        <button class="btn-search" on:click={openPanel}>Search for places</button>
        <button class="btn-location" on:click={getCurrentLocation}>
            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 96 960 960" width="24">
                <path d="M440 1014v-80q-125-14-214.5-103.5T122 616H42v-80h80q14-125 103.5-214.5T440 218v-80h80v80q125 14 214.5 103.5T838 536h80v80h-80q-14 125-103.5 214.5T520 934v80h-80Zm40-158q116 0 198-82t82-198q0-116-82-198t-198-82q-116 0-198 82t-82 198q0 116 82 198t198 82Zm0-120q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47Z"/>
            </svg>
        </button>
    </header>

    <section>
        <img class="weather-img" src={getIconFromWeather(meteoData.condition)} alt={meteoData.condition} />
        <p class="temperature">
            <span class="temperature-number">{Math.round(doUseMetricSystem ? meteoData.temp_c : meteoData.temp_f)}</span>
            <span class="temperature-unit">°{doUseMetricSystem ? "C" : "F"}</span>
        </p>
        <p class="weather-text">{meteoData.condition}</p>

        <div class="weather-footer">
            <p class="date">Today <span class="date-spliter">•</span> {getFormatedDate(new Date().toString())}</p>
            <p class="town">
                <svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 96 960 960" width="20">
                    <path d="M480.124 578Q514 578 538 553.876t24-58Q562 462 537.876 438t-58-24Q446 414 422 438.124t-24 58Q398 530 422.124 554t58 24ZM480 976Q319 837 239.5 721T160 504.2q0-151.2 96-239.7T480 176q128 0 224 88.5t96 239.7Q800 605 720.5 721 641 837 480 976Z" />
                </svg>
                <span>{meteoData.location}</span>
            </p>
        </div>
    </section>
</aside>

<style>
aside {
    min-height: 100vh;
    width: 100%;

    padding: 18px 12px;

    background: var(--sub-bg-color);
    background-image: url("../assets/Cloud-background.png");
    background-repeat: no-repeat;
    background-position-x: center;
    background-position-y: 3rem;
    background-blend-mode: soft-light;

    display: flex;
    flex-direction: column;

    position: relative;
}

@media (min-width: 600px) {
    aside {
        width: var(--side-panel-width);

        height: 100vh;
        position: fixed;
    }
}

/* Header */
header {
    display: flex;
    justify-content: space-between;
}

button {
    background-color: var(--grey-5);
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
}

.btn-search {
    font-weight: 500;
    padding-inline: 18px;
}

.btn-location {
    line-height: 0;
    padding: 8px;
    border-radius: 50%;
}

.btn-location > svg {
    fill: var(--grey-1);
}

/* Section */
section {
    flex: 1;

    margin-top: 75px;

    display: flex;
    flex-direction: column;
    /* justify-content: space-between; */
    align-items: center;

    /* Default font style */
    font-weight: 500;
    font-size: 18px;
    color: var(--grey-3);
}

@media (min-width: 600px) {
    section {
        justify-content: space-between;
    }
}

.weather-img {
    width: 150px;
}

.weather-text {
    font-size: 36px;
    font-weight: 600;
    color: var(--grey-2);

    margin-bottom: 48px;
}

.temperature {
    margin-bottom: 23px;
}

.temperature-number {
    font-size: 144px;
    color: var(--grey-1);
}

.temperature-unit {
    font-size: 48px;
    color: var(--grey-2);
}

.weather-footer {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.date {
    margin-bottom: 33px;
}

.date-spliter {
    margin-inline: 16px;
}

.town {
    display: flex;

    margin-bottom: 90px;
}

.town > svg {
    fill: var(--grey-3);
    margin-right: 2px;
}
</style>
