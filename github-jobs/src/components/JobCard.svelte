<script lang="ts">
    import globe from "$lib/images/globe.svg";
    import clock from "$lib/images/clock.svg";
    import defaultImg from "$lib/images/default.svg";
    import { getLogoURL, getReleaseDate } from "../Utils";

    export let data: Root;

    function onCartClick() {
        console.log("Click");
        window.location.href = "/" + data.id;
    }
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<!-- svelte-ignore a11y-click-events-have-key-events -->
<div class="card" on:click={onCartClick}>
    <img
        src={getLogoURL(data.organizationUrlImage)}
        alt="Oragnization URL"
        on:error={(error) => {
            const { target } = error;
            if (target instanceof HTMLImageElement) {
                target.classList.add("img-error");
                target.src = defaultImg;
            }
        }}
    />

    <div class="content">
        <div>
            <h3 class="organization">{data.organizationName.toLowerCase()}</h3>
            <h2 class="title">{data.missionTitle.toLowerCase()}</h2>
        </div>
        
        <div class="informations">
            <div class="job-duration">{data.missionDuration} months</div>

            <div class="tags">
                <div class="city tag">
                    <img src={globe} alt="Globe Logo" />
                    <p>{data.cityNameEn.toLowerCase()}</p>
                </div>
                <div class="publication tag">
                    <img src={clock} alt="Clock Logo" />
                    <p>{getReleaseDate(data.startBroadcastDate)} days ago</p>
                </div>
            </div>
        </div>
    </div>
</div>

<style>
    .card {
        display: flex;
        gap: 16px;

        margin-top: 23px;
        padding: 12px;

        border-radius: 4px;
        background: var(--white);
        box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.05);

        cursor: pointer;
    }

    .card > img {
        width: 90px;
        height: 90px;
        object-fit: contain;

        /* align-self: center; */
        align-self: start;
    }

    .card > img:not([src]) {
        content: url($lib/images/default.svg);
    }

    .content {
        display: flex;
        flex-direction: column;

        flex-grow: 1;
    }

        
    @media screen and (min-width: 1025px) {
        .informations {
            display: flex;
            flex-direction: row;

            margin-top: 24px;
        }

        .informations > .tags {
            margin-left: auto;
            margin-top: 0;
        }
        
    }

    .organization {
        color: var(--dark-blue);
        font-family: var(--primary-font);
        font-size: 12px;
        font-weight: 700;
        text-transform: capitalize;
    }

    .title {
        color: var(--dark-blue);
        font-family: var(--primary-font);
        font-size: 18px;
        font-weight: 400;

        text-transform: capitalize;

        margin-block: 8px 13px;
    }

    .tags {
        display: flex;
        flex-direction: row;
        gap: 26px;

        margin-top: 24px;
    }

    .city > p {
        text-transform: capitalize;
    }
</style>
