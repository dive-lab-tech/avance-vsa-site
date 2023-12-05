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

let isMobile = ref(null)

onMounted(() => {
    widthScreen()
    window.addEventListener('resize', widthScreen)
})
onUnmounted(() => {
    window.removeEventListener('resize', widthScreen)
})

const widthScreen = () => {
    if (window.innerWidth <= 768) {
        isMobile.value = true
    } else {
        isMobile.value = false
    }
};



</script>

<template>
  <div class="w-full flex items-center" v-if="isMobile===false">
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
      <SwiperSlide><RouterLink to="/modelos/buganvilia-a"><img src="@/assets/image/slider-home-buganvilia.jpg"></RouterLink></SwiperSlide>
      <SwiperSlide><RouterLink to="/modelos/veranera-a"><img src="@/assets/image/slider-home-veranera.jpg"></RouterLink></SwiperSlide>
    </swiper>

    <button class="button-next ml-4" @click="swiperRef.value.slideNext()"><font-awesome-icon :icon="['fas', 'arrow-right-long']" class=""/></button>
   


  </div>
  <div class="w-full flex justify-center flex-col" v-else>
    
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
      <SwiperSlide><RouterLink to="/modelos/buganvilia-a"><img src="@/assets/image/slider-home-buganvilia-mobile.jpg"></RouterLink></SwiperSlide>
      <SwiperSlide><RouterLink to="/modelos/veranera-a"><img src="@/assets/image/slider-home-veranera-mobile.jpg"></RouterLink></SwiperSlide>
    </swiper>

  <div class="flex justify-end w-full">
    <button class="button-prev " @click="swiperRef.value.slidePrev()"><font-awesome-icon :icon="['fas', 'arrow-left-long']" /></button>
    <button class="button-next ml-2" @click="swiperRef.value.slideNext()"><font-awesome-icon :icon="['fas', 'arrow-right-long']" class=""/></button>
   
  </div>


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
