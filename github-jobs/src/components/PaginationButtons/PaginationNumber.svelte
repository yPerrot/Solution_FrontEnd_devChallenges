<script lang="ts">
    export let number: number;
    export let currentPage: number;
    export let setPage: (page: number) => void;
</script>

<button on:click={() => {
    window.location.href='#jobs';
    setPage(number);
}} class="pagination-button {currentPage === number ? 'selected' : ''}">
    {number}
</button>