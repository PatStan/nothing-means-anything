<template>
        <Swiper
            class="h-svh"
            :modules="modules"
            :loop="true"
            :grabCursor="true"
            :pagination="true"
            :navigation="true"
        >
            <SwiperSlide>
                <img
                    class="align py-16"
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
</template>

<script>
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/vue';

import 'swiper/css/bundle';




// TODO: SWAP OFF OF SWIPER VUE FOR NORMAL SWIPER FUCKING SHIT CUNT





export default {
    components: {
        Swiper,
        SwiperSlide,
    },
    setup() {
        const onSwiper = (swiper) => {
            console.log(swiper);
        };
        const onSlideChange = () => {
            console.log('slide change');
        };
        return {
            onSwiper,
            onSlideChange,
            modules: [Navigation, Pagination, Scrollbar, A11y],
        };
    },
};
</script>

<style lang="scss" scoped>
</style>
