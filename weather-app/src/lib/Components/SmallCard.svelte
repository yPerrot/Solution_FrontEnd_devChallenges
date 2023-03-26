<script>
    export let date;
    export let img;
    export let imgAlt;
    export let maxTemperature;
    export let minTemperature;
    export let unit;
</script>

<div class="card">
    <p>{date}</p>
    <img src={img} alt={imgAlt}>
    <div class="temp">
        <span class="max-temp">{Math.round(maxTemperature)}°{unit}</span>
        <span class="min-temp">{Math.round(minTemperature)}°{unit}</span>
    </div>
</div>

<style>
.card {
    padding: 18px 22px;
    background-color: var(--sub-bg-color);

    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

p {
    text-align: center;
}

img {
    width: 100%;
    margin-block: 10px 20px;
}

.temp {
    display: flex;
    justify-content: space-between;
}

.min-temp {
    color: var(--grey-2);
}
</style>