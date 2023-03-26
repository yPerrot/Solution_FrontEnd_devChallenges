<script lang="ts">
    import SmallCard from './Components/SmallCard.svelte';
    import BigCard from './Components/BigCard.svelte';
    import { getFormatedDate, getIconFromWeather } from '../Utils';
    import type { WeatherData } from '../WeatherAPI';
    
    export let meteoData: WeatherData;
    export let doUseMetricSystem: boolean;
    export let useMetricSystem: () => void;
    export let useCstomarySystem: () => void;

</script>
  
<main>

    <div class="content">
        <div class="unit">
            <button class="unit-selector celcius {doUseMetricSystem && "selected"}" on:click={useMetricSystem}>°C</button>
            <button class="unit-selector fahrenheit {!doUseMetricSystem && "selected"}" on:click={useCstomarySystem}>°F</button>
        </div>
    
        <div class="week-temperature">
            {#each meteoData.forecastday as forecastday}
                <SmallCard
                    date={getFormatedDate(forecastday.date)}
                    img={getIconFromWeather(forecastday.condition)} imgAlt={forecastday.condition}
                    maxTemperature={doUseMetricSystem ? forecastday.maxtemp_c : forecastday.maxtemp_f} 
                    minTemperature={doUseMetricSystem ? forecastday.mintemp_c : forecastday.mintemp_f} 
                    unit={doUseMetricSystem ? "C" : "F"}
                />
            {/each}
        </div>
    
        <div class="hightlights">
            <h2>Today's Hightlights</h2>
            <div class="hightlights-cards">
                <BigCard title="Wind status" 
                    value={doUseMetricSystem ? meteoData.wind.wind_kph : meteoData.wind.wind_mph} 
                    unit={doUseMetricSystem ? "kph" : "mph"}
                    direction={meteoData.wind.wind_dir}
                />
                <BigCard title="Humidity" value={meteoData.humidity} unit="%" isHumidity={true}/>
                <BigCard title="Visibility"
                    value={doUseMetricSystem? meteoData.vis_km : meteoData.vis_miles}
                    unit={doUseMetricSystem ? " km" : " miles"}
                />
                <BigCard title="Air Pressure"
                    value={doUseMetricSystem ? meteoData.pressure_in : meteoData.pressure_mb}
                    unit={doUseMetricSystem ? " in" : " mb"}
                />
            </div>
        </div>
    </div>

</main>

<style>

@media (min-width: 600px) {
    main {
        margin-left: var(--side-panel-width);
        padding: 28px 64px;

        display: flex;
        justify-content: center;
    }

    .content {
        max-width: 900px;
    }
}

.unit {
    display: none;
}

@media (min-width: 600px) {
    .unit {
        display: flex;
        justify-content: right;

        margin-bottom: 64px;
    }

    .unit-selector {
        font-weight: 700;
        font-size: 18px;

        padding: 10px;
        background-color: var(--grey-4);
        color: var(--grey-1);

        width: 40px;
        height: 40px;
        border-radius: 50%;

        /* width: 2ch; */
    }

    .fahrenheit {
        margin-left: 12px;
    }

    .selected {
        color: var(--dark-blue);
        background-color: var(--grey-1);
    }
}

.week-temperature {
    padding: 50px;
    display: grid;
    gap: 26px;
    grid-template-columns: 1fr 1fr;
}

@media (min-width: 600px) {
    .week-temperature {
        padding: 0;
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    }
}

.hightlights {
    padding: 20px;
}

.hightlights > h2 {
    font-size: 24px;
    font-weight: 700;
}

:global(.hightlights-cards > *) {
    margin-top: 32px;
}

@media (min-width: 600px) {
    .hightlights {
        padding: 0;
        margin-top: 72px;
    }

    .hightlights > h2 {
        margin-bottom: 32px;
    }
        
    .hightlights-cards {
        display: grid;
        gap: 48px;
        grid-template-columns: 1fr 1fr;
    }

    :global(.hightlights-cards > *) {
        margin-top: 0;
    }
}

</style>
  