<script lang="ts">
  import SideMeteo from './lib/SideMeteo.svelte';
  import Main from './lib/Main.svelte';
  import { defaultWeatherData, getWeatherData, type GetWeatherDataParam } from './WeatherAPI';

  async function setWeatherData(newLocation: GetWeatherDataParam) {
    meteoData = await getWeatherData(newLocation);
  }

  function useMetricSystem() {
    doUseMetricSystem = true;
  }

  function useCstomarySystem() {
    doUseMetricSystem = false;
  }

  // Default data
  let meteoData = defaultWeatherData;
  let doUseMetricSystem = true;

  // Fetched data
  getWeatherData().then(data => meteoData = data);

</script>

<SideMeteo {meteoData} {setWeatherData} {doUseMetricSystem}/>
<Main {meteoData} {doUseMetricSystem} {useMetricSystem} {useCstomarySystem}/>

