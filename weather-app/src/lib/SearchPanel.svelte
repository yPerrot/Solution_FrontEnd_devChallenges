<script lang="ts">
    import type { GetWeatherDataParam } from '../WeatherAPI';

    export let displaySearch = false; 
    export let setWeatherData: (location: GetWeatherDataParam) => void ;;
    export let closePanel: () => void;
    
    let search = '';

    let locations = ['London', 'Barcelona', 'Long Beach']

    function locationClickHandler(location: string) {
        setWeatherData(location);
        closePanel();
    }

    function handleSearchClick() {
        if (search && search.length > 2) {
            locationClickHandler(search);
            search = '';
        }
    }

</script>

<!-- <div class="panel open"> -->
<div class="panel {displaySearch ? 'open' : ''}">
    <header>
        <button class="close" on:click={closePanel}>
            <svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 96 960 960" width="20">
                <path d="m291 816-51-51 189-189-189-189 51-51 189 189 189-189 51 51-189 189 189 189-51 51-189-189-189 189Z" />
            </svg>
        </button>

        <div class="search-container">
            <div class="input">
                <svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 96 960 960" width="20">
                    <path d="M765 912 526 673q-30 22-65.792 34.5T384.035 720Q284 720 214 650t-70-170q0-100 70-170t170-70q100 0 170 70t70 170.035q0 40.381-12.5 76.173T577 622l239 239-51 51ZM384 648q70 0 119-49t49-119q0-70-49-119t-119-49q-70 0-119 49t-49 119q0 70 49 119t119 49Z" />
                </svg>
                <input type="text" placeholder="search lcoation" bind:value={search}>
            </div>
            <button class="search" on:click={handleSearchClick}>Search</button>
        </div>
    </header>
    
    <div class="container">
        {#each locations as location }
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <div class="location" on:click={() => locationClickHandler(location)}>
                <span>{location}</span>
                <svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 96 960 960" width="20">
                    <path d="m384 816-51-51 189-189-189-189 51-51 240 240-240 240Z" />
                </svg>
            </div>
        {/each}
    </div>

</div>

<style>
.panel {
    position: absolute;
    height: 100vh;
    width: 100%;

    left: -100%;
    transition: left 0.3s ease-in-out;

    background-color: var(--sub-bg-color);
    z-index: 1;

    padding: 16px 12px;
}

@media (min-width: 600px) {
    .panel {
        padding: 16px 48px;
    }
}

.open {
    left: 0;
}

/* Close */
.close {
    display: block;
    margin-left: auto;
}

.close > svg {
    fill: var(--grey-1);
    transform: scale(1.5);
}

/* Search */
.search-container {
    display: flex;
    gap: 12px;
    margin-block: 30px;
}

.search {
    background-color: var(--blue);
    padding: 14px 18px;
    font-weight: 600;
}

.input {
    flex: 1;
    position: relative;

}

.input > svg {
    position: absolute;
    scale: 1.25;
    top: 12px;
    left: 7px;

    fill: var(--grey-4);
}

.input > input {
    width: 100%;
    height: 100%;
    
    padding-left: 2rem;
    font-family: inherit;
    color: inherit;
    
    border: 1px solid var(--grey-1);
    background-color: transparent;
}

.input > input:focus-visible {
    outline: none;
}

.input > input::placeholder {
    color: var(--grey-4);
    opacity: 1;
}

/* Location */
.location {
    display: flex;
    justify-content: space-between;

    padding: 22px 12px;
    margin-top: 1rem;
    
    border: 1px solid var(--sub-bg-color);
    cursor: pointer;
}

.location > svg {
    fill: var(--sub-bg-color);
}

.location:hover > svg {
    fill: var(--grey-4);
}

.location:hover {
    border-color: var(--grey-4);
}
</style>