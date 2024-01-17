<script lang="ts">
  import { onMount } from "svelte";

  import Header from "./Header.svelte";
  import JobCard from "./JobCard.svelte";
  import SearchInput from "./SearchJobInput.svelte";
  import LocationPicker from "./LocationPicker.svelte";

  import "./app.css";

  let artists: Root[] = [];
  let skip = 0;

  async function loadData() {
    artists = [];
    const response = await fetch("/api/all?skip=" + skip);
    const json = await response.json();
    artists = json.result;
  }

  onMount(loadData);
</script>

<Header />
<SearchInput />

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
    color: var(--dark-blue);
    font-family: var(--secondary-font);
    font-size: 14px;
    font-weight: 500;
  }

  #jobs {
    scroll-padding-top: 20px;
  }
</style>
