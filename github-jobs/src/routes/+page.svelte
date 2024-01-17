<script lang="ts">
  import { onMount } from "svelte";

  import Header from "./Header.svelte";
  import JobCard from "./JobCard.svelte";
  import SearchInput from "./SearchPanel.svelte";
  import LocationPicker from "./LocationPicker.svelte";
  import Pagination from "./Pagination.svelte";

  import "./app.css";
  import { getCurrentPage } from "../Utils";

  let artists: Root[] = [];
  let nbMaxElem: number;

  async function loadData(searchQuery?: string) {
    const page = getCurrentPage();    
    
    const searchParam = searchQuery ? "&search=" + encodeURIComponent(searchQuery) : '';
    
    const response = await fetch("/api/all?skip=" + (page - 1) * 5 + searchParam);
    const json = await response.json();
    
    artists = json.result;
    nbMaxElem = json.count;
  }

  function next() {
    const page = getCurrentPage();
    
    if ((page + 1) * 5 < nbMaxElem) {
      localStorage.setItem("page", (page + 1).toString());
      loadData();
    }
  }
  
  function previous() {
    const page = getCurrentPage();    
    if (page === 1) return;

    localStorage.setItem("page", (page - 1).toString());
    loadData();
  }

  onMount(loadData);
</script>

<Header />
<SearchInput onClick={loadData}/>

<main>
  <section id="jobs">
    {#if artists.length === 0} 
      <!-- Add loader -->
      Loading...
    {:else}
      {#each artists as artist}
        <JobCard data={artist} />
      {/each}
    {/if}
  </section>

  <Pagination next={next} previous={previous} />
</main>

<style>
  #jobs {
    scroll-padding-top: 20px;
  }
</style>
