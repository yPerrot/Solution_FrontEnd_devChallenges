<script>
    import globe from "$lib/images/globe.svg";
</script>

<div class="location-picker__container">
    <h2>Location</h2>

    <div class="location-search">
        <img src={globe} class="logo" alt="Globe Logo" />
        <input type="text" placeholder="City, state, zip code or country" />
    </div>

    <div class="location-picker">
        <input type="radio" value="London" name="London" />
        <label for="London">London</label>
        
        <input type="radio" value="Amsterdam" name="Amsterdam" />
        <label for="Amsterdam">Amsterdam</label>

        <input type="radio" value="New York" name="New York" />
        <label for="New York">New York</label>
        
        <input type="radio" value="Berlin" name="Berlin" />
        <label for="Berlin">Berlin</label>

    </div>
</div>

<style>
    h2 {
        color: #b9bdcf;
        font-family: Poppins, sans-serif;
        font-size: 14px;
        font-weight: 700;
        text-transform: uppercase;

        margin-bottom: 14px;
    }

    /* Input */
    .location-search {
        width: 100%;

        display: flex;
        gap: 15px;
        background-color: white;
        padding: 15px 12px;

        border-radius: 4px;
        box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.05);

        margin-bottom: 24px;
    }

    .location-search > input {
        width: 100%;

        flex-grow: 1;

        border: none;
        outline: none;
        text-overflow: ellipsis;

        font-family: Roboto, sans-serif;
        font-size: 12px;
    }

    .location-search > input::placeholder {
        color: #B9BDCF;
    }

    /* Radio */
    .location-picker {
        display: grid;
        grid-template-columns: auto 1fr;
        gap: 18px 12px;
        align-items: center;

        padding-left: 14px;
    }

    .location-picker > input {
        height: 18px;
        width: 18px;
    }

    .location-picker > label {
        color: #334680;
        font-family: Poppins, sans-serif;
        font-size: 14px;
        font-weight: 500;
    }
</style>
