<script>
    import globe from "$lib/images/globe.svg";
    import countries from "$lib/data/countires.json"

    const sortedCountries = countries.sort(({countryNameEn: name1}, {countryNameEn: name2}) => name1.localeCompare(name2));
</script>

<div class="location-picker picker">
    <h2>Location</h2>

    <div class="locations">
        <img src={globe} class="logo" alt="Globe Logo" />
        <select required>
            <option value="" disabled selected hidden>Select a country name</option>
            {#each sortedCountries as country}
                <option value="${country.countryId}">{country.countryNameEn.toLowerCase()}</option>
            {/each}
        </select>
    </div>
</div>

<style>
    .location-picker {
        margin-bottom: 32px;
    }

    .locations {
        width: 100%;

        display: flex;
        gap: 15px;
        background-color: var(--white);
        padding: 15px 12px;

        border-radius: 4px;
        box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.05);
    }

    select {
        width: 100%;

        flex-grow: 1;

        background-color: transparent;
        
        border: none;
        outline: none;
        text-overflow: ellipsis;

        font-family: var(--primary-font);
        font-size: 12px;
        color: var(--light-black);
    }

    select:required:invalid {
        color: var(--grey);
    }

    select:valid, 
    option {
        text-transform: capitalize;
        color: var(--light-black);
    }

</style>
