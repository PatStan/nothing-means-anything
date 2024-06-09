<template>
    <header class="bg-white z-99 w-full fixed transition ease-in-out duration-75" :class="{ 'scrolled-nav': scrollPosition }">
        <nav class="flex flex-row py-12 transition ease-in-out duration-75 w-11/12 m-auto">
            <ul v-show="!mobile" class="navigation">
                <li class="text-black"><NuxtLink to="/films">Films</NuxtLink></li>
                <li class="text-black"><NuxtLink to="/contact">Contact</NuxtLink></li>
            </ul>
            <div class="icon">
                <i @click="toggleMobileNav" v-show="mobile" class="far fa-bars" :class="{'icon-active' : mobileNav}"></i>
            </div>
            <transition name="mobile-nav">
                <ul v-show="mobileNav" class="dropdown-nav">
                    <li><NuxtLink to="/films">Films</NuxtLink></li>
                    <li><NuxtLink to="/contact">Contact</NuxtLink></li>
                </ul>
            </transition>
        </nav>
    </header>
</template>

<script>
export default{};
</script>

<style lang="scss" scoped>

</style>
