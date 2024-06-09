<template>
    <div>
        <NavBar />
        <NuxtPage />
    </div>
</template>

<script>
import NavBar from "./components/NavBar"
export default {
    name: "App",
    components: {
        NavBar,
    }
}
</script>
