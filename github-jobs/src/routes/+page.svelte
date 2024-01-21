<script lang="ts">
  import { onMount } from "svelte";

  import JobCard from "../components/JobCard.svelte";
  import SearchPanel from "../components/SearchPanel.svelte";
  import Pagination from "../components/Pagination.svelte";

  import { getCurrentPage } from "../Utils";

  let artists: Root[] = [];
  let nbMaxElem: number;

  async function loadData(searchQuery?: string) {
    const page = getCurrentPage();

    const searchParam = searchQuery
      ? "&search=" + encodeURIComponent(searchQuery)
      : "";

    const response = await fetch(
      "/api/all?skip=" + (page - 1) * 5 + searchParam,
    );
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

<SearchPanel onClick={loadData} />

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

<Pagination {next} {previous} />

<style>
  #jobs {
    scroll-padding-top: 20px;
  }
</style>
