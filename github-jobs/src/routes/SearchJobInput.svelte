<script>
    import briefcase from "$lib/images/briefcase.svg";
</script>

<div class="search-container">
    <div class="search">
        <img src={briefcase} alt="Briefcase icon" />
        <input
            type="text"
            placeholder="Title, companies, expertise or benefits"
        />
        <button>Search</button>
    </div>
</div>

<style>
    .search-container {
        padding: 42px 18px;
        background-image: url($lib/images/backgroundImg.png);
        background-size: cover;

        border-radius: 8px;
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
    }
</style>
