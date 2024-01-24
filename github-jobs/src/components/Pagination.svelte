<script lang="ts">
    import PaginationNumber from "./PaginationButtons/PaginationNumber.svelte";
    import leftArrow from "$lib/images/leftArrow.svg?raw";
    import rightArrow from "$lib/images/rightArrow.svg?raw";

    export let currentPage: number;
    export let max: number;
    export let previous: () => void;
    export let next: () => void;
    export let setPage: (page: number) => void;
</script>

<div class="pagination">
    <!-- Previous -->
    <button class="pagination-button" on:click={() => {
        window.location.href='#jobs';
        previous();
    }}>
        {@html leftArrow}
    </button>

    {#if max === 1}
        <PaginationNumber {setPage} number={1} {currentPage} />
    {:else if max === 2}
        <PaginationNumber {setPage} number={1} {currentPage} />
        <PaginationNumber {setPage} number={2} {currentPage} />
    {:else if max === 3}
        <PaginationNumber {setPage} number={1} {currentPage} />
        <PaginationNumber {setPage} number={2} {currentPage} />
        <PaginationNumber {setPage} number={3} {currentPage} />
    {:else if max === 4}
        <PaginationNumber {setPage} number={1} {currentPage} />
        <PaginationNumber {setPage} number={2} {currentPage} />
        <PaginationNumber {setPage} number={3} {currentPage} />
        <PaginationNumber {setPage} number={4} {currentPage} />
    {:else}
        <!-- 1 -->
        <PaginationNumber {setPage} number={1} {currentPage} />

        <!-- 2 -->
        {#if 2 === currentPage || 2 === currentPage + 1}
            <PaginationNumber {setPage} number={2} {currentPage} />
        {:else}
            <div class="separator">...</div>
        {/if}

        <!-- Middle -->
        {#if currentPage > 2 && currentPage < max - 1}
            <PaginationNumber {setPage} number={currentPage} {currentPage} />
        {/if}

        <!-- Max - 1-->
        {#if max - 1 === currentPage || max - 1 === currentPage - 1}
            <PaginationNumber {setPage} number={max - 1} {currentPage} />
        {:else}
            <div class="separator">...</div>
        {/if}

        <!-- Max -->
        <PaginationNumber {setPage} number={max} {currentPage} />
    {/if}

    <!-- Next -->
    <button class="pagination-button" on:click={() => {
        window.location.href='#jobs';
        next();
    }}>
        {@html rightArrow}
    </button>
</div>
