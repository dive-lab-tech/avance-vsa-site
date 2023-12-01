<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { RouterLink } from 'vue-router'
import { onMounted, ref, onUnmounted } from 'vue';
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



onMounted(() => {

})
onUnmounted(() => {

});





</script>

<template>
  <div class="w-full  items-center">

    <swiper :spaceBetween="30" 
    :modules="modules"
    :centeredSlides="true"
    :navigation="{
      nextEl: '.button-next',
      prevEl: '.button-prev',
    }" 
    :loop="true" :autoplay="{
  delay: 3500,
  disableOnInteraction: true,
}" 

:speed="400" 
@swiper="onSwiper" 
@slideChange="onSlideChange" 
class="mySwiper w-full"
  ref="swiperRef"
  :breakpoints="{
      '640': {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      '768': {
        slidesPerView: 1,
        spaceBetween: 40,
      },
      '1024': {
        slidesPerView: 2,
        spaceBetween: 50,
      },
    }">

      <SwiperSlide>
        <div class="flex justify-center"><img src="@/assets/image/images-buganvilia-a/buganvilia-slider-1.jpg"></div>
      </SwiperSlide>
      <SwiperSlide>
        <div class="flex justify-center"><img src="@/assets/image/images-buganvilia-a/buganvilia-slider-2.jpg"></div>
      </SwiperSlide>
      <SwiperSlide>
        <div class="flex justify-center"><img src="@/assets/image/images-buganvilia-a/buganvilia-slider-3.jpg"></div>
      </SwiperSlide>
      <SwiperSlide>
        <div class="flex justify-center"><img src="@/assets/image/images-buganvilia-a/buganvilia-slider-5.jpg"></div>
      </SwiperSlide>
      <SwiperSlide>
        <div class="flex justify-center"><img src="@/assets/image/images-buganvilia-a/buganvilia-slider-6.jpg"></div>
      </SwiperSlide>
      <SwiperSlide>
        <div class="flex justify-center"><img src="@/assets/image/images-buganvilia-a/buganvilia-slider-7.jpg"></div>
      </SwiperSlide>
      <SwiperSlide>
        <div class="flex justify-center"><img src="@/assets/image/images-buganvilia-a/buganvilia-slider-8.jpg"></div>
      </SwiperSlide>
      <SwiperSlide>
        <div class="flex justify-center"><img src="@/assets/image/images-buganvilia-a/buganvilia-slider-9.jpg"></div>
      </SwiperSlide>
    </swiper>

    <div class="flex w-full justify-end">
      <div class="px-10">
        <button class="button-prev" @click="swiperRef.value.slidePrev()"><font-awesome-icon
            :icon="['fas', 'arrow-left-long']" /></button>
        <button class="button-next " @click="swiperRef.value.slideNext()"><font-awesome-icon
            :icon="['fas', 'arrow-right-long']" class="ml-4" /></button>
      </div>

    </div>


  </div>
</template>

<style scoped>
.button-next svg {
  width: 30px;
  height: 30px;
}

.button-prev svg {
  width: 30px;
  height: 30px;
}
</style>
