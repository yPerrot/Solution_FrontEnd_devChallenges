<script lang="ts">
    export let previous: () => void;
    export let next: () => void;
</script>

<a href="#jobs" on:click={previous}>Previous</a>
<a href="#jobs" on:click={next}>Next</a>