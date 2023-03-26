<script>
    export let title;
    export let value;
    export let unit;
    export let direction = undefined; // optionale
    export let isHumidity = false; // optionale
</script>

<div class="card">
    <p class="title">{title}</p>
    <p class="value"><span class="textual-value">{value}</span><span class="unit">{unit}</span></p>

    <!-- TODO: -->
    {#if direction}
        <div class="direction-container">
            <svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 96 960 960" width="20">
                <path d="M517 912 416 640 144 539v-35l672-264-264 672h-35Z" />
            </svg>
            <span>{direction}</span>
        </div>
    {/if}
    
    {#if isHumidity}
        <div class="precentage-container">
            <div class="top">
                <span>0</span>
                <span>50</span>
                <span>100</span>
            </div>
            <div class="progress">
                <div class="progress-bar" style="width: {value}%"></div>
            </div>
            <div class="bottom">%</div>
        </div>
    {/if}
</div>

<style>
.card {
    background-color: var(--sub-bg-color);
    text-align: center;
    /* padding-block: 22px 38px; */
    padding-block: 22px;
}

.value:last-child {
    /* background: green; */
    margin-bottom: 16px;
}

.textual-value {
    font-weight: 700;
    font-size: 64px;
}

.unit {
    font-size: 36px;
}

/* Direction */
.direction-container {
    margin-top: 24px;

    display: flex;
    text-align: center;
    justify-content: center;
}

.direction-container > svg {
    fill: var(--grey-1);
    background-color: var(--grey-4);
    padding: 3px;
    border-radius: 50%;
    line-height: 0;
}

.direction-container > span {
    margin-left: 8px;
    font-size: 14px;
    align-self: center;
}

/* Progress */

.precentage-container {
    margin: 12px auto 0;
    width: 70%;
    text-align: center;

    font-weight: 700;
    font-size: 12px;
    color: var(--grey-2);
}

.progress {
  border-radius: 30px;
  background-color: var(--grey-1);

  margin: 2px 0;
}

.progress-bar {
  height: 8px;
  border-radius: 30px;
  background-color: var(--yellow);
}

.top {
    display: flex;
    justify-content: space-between;
}

.bottom {
    text-align: right;
}
</style>