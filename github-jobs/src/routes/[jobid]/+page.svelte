<script lang="ts">
    import Header from "../../components/Header.svelte";

    import clock from "$lib/images/clock.svg";
    import globe from "$lib/images/globe.svg";
    import defaultImg from "$lib/images/default.svg";

    import { getLogoURL, getReleaseDate } from "../../Utils";

    export let data: Root;
</script>

<Header />

<a class="back" href="/">← Back to search</a>

<section class="content">
    <div class="apply">
        <h3>how to apply</h3>
        <div>
            Please apply directly on
            <a
                href={"https://mon-vie-via.businessfrance.fr/en/offres/" +
                    data.id}
                target="_blank">businessfrance.fr</a
            >
        </div>
    </div>

    <div class="job">
        <h2>{data.missionTitle.toLocaleLowerCase()}</h2>
        <div class="job-duration">{data.missionDuration} months</div>
        <div class="publication tag">
            <img src={clock} class="logo" alt="Clock Logo" />
            <p>{getReleaseDate(data.startBroadcastDate)} days ago</p>
        </div>
    </div>

    <div class="company">
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

        <div>
            <h3 class="organization">{data.organizationName.toLowerCase()}</h3>
            <div class="city tag">
                <img src={globe} alt="Globe Logo" />
                <p>{data.cityNameEn.toLowerCase()}</p>
            </div>
        </div>
    </div>

    <div class="description">
        {@html data.missionDescription}
        <br />
        {@html data.missionProfile}
    </div>
</section>

<style>
    .back {
        display: block;
        text-decoration: none;

        color: var(--blue);
        font-family: var(--secondary-font);
        font-size: 14px;
        font-weight: 500;

        margin-bottom: 36px;
    }

    /* Content */
    .apply {
        margin-bottom: 36px;
    }

    .apply > h3 {
        color: var(--grey);
        font-family: var(--secondary-font);
        font-size: 14px;
        font-weight: 700;
        text-transform: uppercase;

        margin-bottom: 16px;
    }

    .apply > div {
        color: var(--dark-blue);
        font-family: var(--secondary-font);
        font-size: 14px;
        font-weight: 500;
    }

    .apply > div > a {
        color: var(--blue);
        text-decoration: none;
    }

    /* Job */
    .job {
        margin-bottom: 32px;
    }

    h2 {
        color: var(--dark-blue);
        font-family: var(--primary-font);
        font-size: 24px;
        font-weight: 700;
        text-transform: capitalize;

        margin-bottom: 4px;
    }

    .job-duration {
        margin-bottom: 10px;
    }


    /* Company */
    .company {
        display: flex;
        gap: 12px;
        align-items: center;

        margin-bottom: 32px;
    }

    .company > img {
        width: 42px;
        height: 42px;
    }

    .company > img:not([src]) {
        content: url($lib/images/default.svg);
    }

    .company h3 {
        color: var(--dark-blue);
        font-family: var(--primary-font);
        font-size: 18px;
        font-weight: 700;

        margin-bottom: 10px;
    }

    .city > p {
        text-transform: capitalize;
    }

    .description {
        white-space: pre-wrap;
        color: var(--dark-blue);
        font-family: var(--primary-font);
        font-size: 16px;
        line-height: 150%; /* 24px */
    }
</style>
