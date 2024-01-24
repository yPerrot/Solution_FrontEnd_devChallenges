<script lang="ts">
    export let value: [boolean, boolean, boolean]
</script>

<div class="time-picker picker">
    <h2>Duration</h2>
    
    <div class="times">
        <div class="time">
            <input type="checkbox" name="6-12" bind:checked={value[0]} />
            <label for="6-12">6 to 12 months</label>
        </div>
        
        <div class="time">
            <input type="checkbox" name="12-18" bind:checked={value[1]} />
            <label for="12-18">12 to 18 months</label>
        </div>
        
        <div class="time">
            <input type="checkbox" name="18-24" bind:checked={value[2]} />
            <label for="18-24">18 to 24 months</label>
        </div>
    </div>
</div>

<style>
    .time-picker {
        margin-bottom: 16px;
    }

    .times {
        display: flex;
        flex-direction: column;
        gap: 16px;

        padding-left: 14px;
    }

    .time {
        display: flex;
        align-items: center;
        gap: 12px;
    }

    .time > input {
        height: 18px;
        width: 18px;

        border-radius: 2px;
        border: 1px solid #B9BDCF;
    }

    .time > label {
        color: var(--dark-blue);
        font-family: var(--secondary-font);
        font-size: 14px;
        font-weight: 500;
    }
</style>