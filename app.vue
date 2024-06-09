<template>
    <div class="App">
        <NavBar/>
        <NuxtPage />
    </div>
</template>
<script>
import NavBar from "./components/NavBar.vue"

export default {
    name: "App",
    components: {
        NavBar,
    }
}
</script>
