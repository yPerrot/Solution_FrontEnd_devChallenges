<script lang="ts">
  import { onMount } from "svelte";

  import JobCard from "../components/JobCard.svelte";
  import SearchPanel from "../components/SearchPanel.svelte";
  import Pagination from "../components/Pagination.svelte";

  import { getCurrentPage } from "../Utils";

  let artists: Root[] | undefined = undefined;
  let nbMaxElem: number;
  let currentPage = getCurrentPage();

  async function loadData(searchQuery?: string) {
    currentPage = getCurrentPage();

    const searchParam = searchQuery
      ? "&search=" + encodeURIComponent(searchQuery)
      : "";

    const response = await fetch(
      "/api/all?skip=" + (currentPage - 1) * 5 + searchParam,
    );
    const json = await response.json();

    artists = json.result;
    nbMaxElem = json.count;
  }

  function next() {
    if ((currentPage + 1) * 5 < nbMaxElem) {
      localStorage.setItem("page", (currentPage + 1).toString());
      currentPage += 1;
      loadData();
    }
  }

  function previous() {
    const page = getCurrentPage();
    if (page === 1) return;

    localStorage.setItem("page", (page - 1).toString());
    currentPage -= 1;
    loadData();
  }

  onMount(loadData);
</script>

<SearchPanel onClick={loadData} />

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

<Pagination {next} {previous} {currentPage} max={Math.round(nbMaxElem / 5)}/>

<style>
  #jobs {
    scroll-padding-top: 20px;
  }
</style>
