<template>
<div class="py-16 h-5/6 w-full w">
        <h1>gallery</h1>
        <Swiper>
            <SwiperSlide>
                <img
                    class="align"
                    src="assets/images/logo.png"
                    alt="Nothing Means Anything Logo"
                />
            </SwiperSlide>
            <SwiperSlide>
                <img
                    class=""
                    src="assets/images/logo.png"
                    alt="Nothing Means Anything Logo"
                />
            </SwiperSlide>
        </Swiper>
</div>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue';


import 'swiper/css/bundle';

const photos = [
    "logo.png",
];

</script>

<style lang="scss" scoped>
</style>
