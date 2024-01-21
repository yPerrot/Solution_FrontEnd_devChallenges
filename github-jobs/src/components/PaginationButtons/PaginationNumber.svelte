<script lang="ts">
    export let number: number;
    export let currentPage: number;
</script>

<button on:click={() => {
    // window.location.href='#jobs';
    // goToPage(max);
}} class="pagination-button {currentPage === number ? 'selected' : ''}">
    {number}
</button>