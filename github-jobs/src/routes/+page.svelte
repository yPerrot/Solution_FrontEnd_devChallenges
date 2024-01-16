<script lang="ts">
  import { onMount } from "svelte";

  import JobCard from "./JobCard.svelte";
  import SearchInput from "./SearchJobInput.svelte";
  import LocationPicker from "./LocationPicker.svelte";

  import "./app.css";

  let artists: Root[] = [];
  let skip = 0;

  async function loadData() {
    artists = [];
    const response = await fetch("/api/data?skip=" + skip);
    const json = await response.json();
    artists = json.result;
  }

  onMount(loadData);
</script>

<header>
  <div class="logo"><span>Github</span> Jobs</div>
  <SearchInput />
</header>

<main>
  <aside>
    <div class="full-time__container">
      <input type="checkbox" name="full-time" />
      <label for="full-time">Full time</label>
    </div>

    <LocationPicker />

  </aside>
  <section id="jobs">
    {#if artists.length === 0} 
      Loading...
    {:else}
      {#each artists as artist}
        <JobCard data={artist} />
      {/each}
    {/if}
  </section>

  <a href="#jobs" on:click={() => {skip += 5; loadData()}}>Next</a>
</main>

<style>
  .logo {
    color: #282538;

    font-family: Poppins, sans-serif;
    font-size: 1.5rem;
    font-style: normal;
    font-weight: 300;
    line-height: normal;

    margin-bottom: 2rem;
  }

  .logo > span {
    font-weight: 700;
  }

  .full-time__container {
    margin-block: 30px;
    display: flex;
  }

  .full-time__container > input {
    height: 20px;
    width: 20px;

    margin-inline: 12px 14px;
  }

  .full-time__container > label {
    color: #334680;
    font-family: Poppins, sans-serif;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }

  #jobs {
    scroll-padding-top: 20px;
  }
</style>
