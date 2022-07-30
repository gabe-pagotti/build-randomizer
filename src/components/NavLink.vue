<script>

</script>

<template>
    <div class="nav-link">
        <div style="background-image: url(/images/survivor/perks/kinship.gif);"></div>
    </div>
</template>

<style scoped>
    .nav-link {
        background-color: transparent;
        position: relative;
        width: 6rem;
        height: 6rem;
        margin: auto;
        margin-bottom: 1.5rem;
        border: 0px solid #FFF;
        cursor: pointer;
        min-width: 60px;
        min-height: 60px;
        /*transform: rotate(45deg);*/
    }

    .nav-link::before,
    .nav-link::after {
        content: "";
        position: absolute;
        width: 0px;
        height: 0px;
        transition: 0.9s, border 0s;
    }

    .nav-link::before {
        top: -2px;
        left: -2px;
    }

    .nav-link::after {
        right: -2px;
        bottom: -2px;
    }

    .nav-link:hover::after {
        width: calc(100% + 3px);
        height: calc(100% + 3px);
        border-bottom: 3px solid #FFF;
        border-right: 3px solid #FFF;
    }

    .nav-link:hover::before {
        width: calc(100% + 3px);
        height: calc(100% + 3px);
        border-top: 3px solid #FFF;
        border-left: 3px solid #FFF;
    }

    .nav-link > div {
        content: "";
        position: absolute;
        width: 200%;
        height: 200%;
        top: -50%;
        left: -50%;
        z-index: 2;
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
        transform: rotate(-45deg) scale(0.7);
    }
</style>