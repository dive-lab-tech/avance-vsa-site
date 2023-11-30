<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { RouterLink } from 'vue-router'
import { onMounted, ref } from 'vue';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Keyboard, Autoplay, Pagination, Navigation } from 'swiper/modules';

const swiperRef = ref(null);

// eslint-disable-next-line
const onSwiper = (swiper) => {
  //   console.log(swiper);
};

const onSlideChange = (swiper) => {
  // eslint-disable-next-line
  const activeSlideIndex = swiper.activeIndex;
  //Slider que esta activo
  //   console.log("Slide change: " + activeSlideIndex);
};

const modules = [Keyboard, Autoplay, Pagination, Navigation];

onMounted(() => {
  const swiper = swiperRef.value.swiper;

  document.querySelector('.button-next').addEventListener('click', () => {
    swiper.slideNext();
  });

  document.querySelector('.button-prev').addEventListener('click', () => {
    swiper.slidePrev();
  });
});
</script>

<template>
  <div class="w-full flex items-center">
    <button class="button-prev mr-4" @click="swiperRef.value.slidePrev()"><font-awesome-icon :icon="['fas', 'arrow-left-long']" /></button>
    <swiper
      :spaceBetween="20"
      :modules="modules"
      :navigation="{
        nextEl: '.button-next',
        prevEl: '.button-prev',
      }"
      :loop="true"
      :autoplay="{
        delay: 3500,
        disableOnInteraction: true,
      }"
      slidesPerView="1"
      :speed="400"
      @swiper="onSwiper"
      @slideChange="onSlideChange"
      class="mySwiper w-full"
      ref="swiperRef"
    >
      <SwiperSlide><RouterLink to="/"><img src="@/assets/image/slider-home-buganvilia.jpg"></RouterLink></SwiperSlide>
      <SwiperSlide><RouterLink to="/"><img src="@/assets/image/slider-home-veranera.jpg"></RouterLink></SwiperSlide>
    </swiper>

    <button class="button-next ml-4" @click="swiperRef.value.slideNext()"><font-awesome-icon :icon="['fas', 'arrow-right-long']" class=""/></button>
   


  </div>
</template>

<style scoped>
.button-next svg{
    width: 30px;
    height: 30px;
}
.button-prev svg{
    width: 30px;
    height: 30px;
}
</style>
