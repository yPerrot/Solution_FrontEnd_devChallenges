<script lang="ts">
    import briefcase from "$lib/images/briefcase.svg";
    import LocationPicker from "./LocationPicker.svelte";
    import DurationPicker from "./DurationPicker.svelte";

    export let onClick: (queryParams: QueryParams) => void;

    let searchQuery: string;
    let durations: [boolean, boolean, boolean] = [false, false, false];
    let location: number;

    function btnClickCB() {
        onClick({
            query: searchQuery,
            locationId: location,
            duration: {
                "12": durations[0],
                "18": durations[1],
                "24": durations[2],
            },
        });
    }
</script>

<div class="search-container">
    <div class="search">
        <img src={briefcase} alt="Briefcase icon" />
        <input
            type="text"
            placeholder="Title, companies, expertise or benefits"
            bind:value={searchQuery}
        />
        <button on:click={btnClickCB}>Search</button>
    </div>
</div>

<!-- <DurationPicker value={durations} />
<LocationPicker bind:location /> -->

<style>
    .search-container {
        padding: 42px 18px;
        background-image: url($lib/images/backgroundImg.png);
        background-size: cover;

        border-radius: 8px;

        margin-bottom: 16px;
    }

    .search {
        display: flex;
        align-items: center;

        padding: 4px;

        border-radius: 4px;
        background: var(--white);
        box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.1);
    }

    .search > img {
        color: var(--grey);
        align-items: center;

        margin-left: 12px;
    }

    .search > input {
        flex-grow: 1;

        border: none;
        outline: none;
        text-overflow: ellipsis;
        margin-left: 8px;
        margin-right: 12px;

        min-width: 0;
    }

    .search > input::placeholder {
        color: var(--grey);
        font-family: var(--primary-font);
        font-size: 12px;
    }

    .search > button {
        flex-shrink: 0;

        border-radius: 4px;
        background-color: var(--blue);

        color: var(--white);
        font-family: var(--primary-font);
        font-size: 16px;
        font-weight: 500;

        padding: 14px 27px;
        cursor: pointer;
    }
</style>
