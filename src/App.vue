<script setup>
    import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
    <header>
        <div class="wrapper">
            <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />
        </div>
    </header>

    <div class="perk-icon">
        <div style="background-image: url(/images/survivor/perks/kinship.gif);"></div>
    </div>

    <RouterView />
</template>

<style scoped>
.perk-icon {
    background-color: transparent;
    position: relative;
    width: 100px;
    height: 100px;
    margin: auto;
    border: 0px solid #FFF;
    cursor: pointer;
    transform: rotate(45deg);
}

.perk-icon::before,
.perk-icon::after {
    content: "";
    position: absolute;
    width: 0px;
    height: 0px;
    transition: 0.7s, border 0s;
}

.perk-icon::before {
    top: -2px;
    left: -2px;
}

.perk-icon::after {
    right: -2px;
    bottom: -2px;
}

.perk-icon:hover::after {
    width: calc(100% + 3px);
    height: calc(100% + 3px);
    border-bottom: 3px solid #FFF;
    border-right: 3px solid #FFF;
}

.perk-icon:hover::before {
    width: calc(100% + 3px);
    height: calc(100% + 3px);
    border-top: 3px solid #FFF;
    border-left: 3px solid #FFF;
}

.perk-icon > div {
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
