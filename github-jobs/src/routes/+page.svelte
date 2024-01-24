<script lang="ts">
  import { onMount } from "svelte";

  import JobCard from "../components/JobCard.svelte";
  import SearchPanel from "../components/SearchPanel.svelte";
  import Pagination from "../components/Pagination.svelte";

  import { getConfig, getCurrentPage } from "../Utils";

  let artists: Root[] | undefined = undefined;
  let nbMaxElem: number;
  let currentPage = getCurrentPage();

  async function sendRequest() {
    artists = undefined; // Display loader

    currentPage = getCurrentPage();
    const currentConfig = getConfig();

    const searchParam = currentConfig.query ? "&search=" + encodeURIComponent(currentConfig.query) : "";
    const locationIdParam = currentConfig.locationId ? "&locationId=" + encodeURIComponent(currentConfig.locationId) : "";

    // .
    const durationsArray = Object.entries(currentConfig.duration).reduce<string[]>((acc, [key, value]) => {
      if (value) acc.push(key)
      return acc;
    }, [])
    const durationsParam = durationsArray.length > 0 ? "&duration=" + encodeURIComponent(durationsArray.join(',')) : '';

    const response = await fetch("/api/all?skip=" + (currentPage - 1) * 5 + searchParam + locationIdParam + durationsParam);
    const json = await response.json();

    artists = json.result;
    nbMaxElem = json.count;
  }

  function newQuery(queryParams: QueryParams) {
    currentPage = 1;
    localStorage.setItem("page", "1");
    localStorage.setItem("queryParams", JSON.stringify(queryParams));
    sendRequest();
  }

  function next() {
    if ((currentPage + 1) * 5 < nbMaxElem) {
      localStorage.setItem("page", (currentPage + 1).toString());
      currentPage += 1;
      sendRequest();
    }
  }

  function previous() {
    if (currentPage === 1) return;

    localStorage.setItem("page", (currentPage - 1).toString());
    currentPage -= 1;
    sendRequest();
  }

  function setPage(page: number) {
    if (page === currentPage) return; 

    localStorage.setItem("page", (page).toString());
    currentPage = page;
    sendRequest();
  }

  onMount(sendRequest);
</script>

<SearchPanel onClick={newQuery} />

<section id="jobs">
  {#if artists === undefined}
    <!-- Add loader -->
    Loading...
  {:else}
    {#each artists as artist}
      <JobCard data={artist} />
    {/each}
  {/if}
</section>

<Pagination {next} {previous} {setPage} {currentPage} max={Math.ceil(nbMaxElem / 5)}/>

<style>
  #jobs {
    scroll-padding-top: 20px;
  }
</style>
