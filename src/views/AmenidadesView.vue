<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import {itemsAmenidades} from '@/utils/itemsAmenidades'

var widthButtonDownload = ref(null);
var isMobile = ref(null);


document.title = 'Amenidades | Villas de San Andres'

onMounted(() => {

    window.addEventListener('resize', widthScreen)
    widthScreen()
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
    const buttonBrochure = document.querySelector('.img-btn-download');
    if (buttonBrochure) {
        widthButtonDownload.value = buttonBrochure.offsetHeight;
        console.log(widthButtonDownload.value)
    }
    else {
        console.log('no existe')
    }
};



</script>
<template>
    <div class="w-full bg-white">
        <!-- Section Banner mobile and desktop -->
        <section class="w-full">
            <img src="@/assets/image/images-amenidades/banner-amenidades.jpg" alt="" srcset="" v-if="isMobile == false">
            <img src="@/assets/image/images-amenidades/banner-amenidades-mobile.jpg" alt="" srcset=""
                v-if="isMobile == true">
        </section>
        <section class="w-full py-10">
            <!-- Section Amenidades -->
            <div class=" w-full flex justify-center py-10  max-[767px]:px-0 max-[1199px]:px-0">
                <div class=" w-9/12 max-[767px]:w-full max-[1199px]:w-full min-[1500px]:w-7/12">
                    <div class=" w-full grid grid-cols-1 gap-16">
                        <div v-for="(items, index) in itemsAmenidades" :key="index" class="flex justify-center">
                            <div class="w-11/12 grid grid-cols-2 card-amenidades max-[800px]:grid-cols-1">
                                <div class="card-description py-4 px-4 flex flex-col justify-center " :class="index%2!=0?'order-2':'' || isMobile!=false?'order-2':''">
                                    <div class="flex justify-center">
                                        <img :src="items.imgIcon" alt="" class="img-ico">
                                    </div>
                                    <div class="px-4 mt-5">
                                        <p class=" font-montserrat-bold max-[767px]:leading-tight max-[767px]:text-sm">{{ items.description }}</p>
                                    </div>
                                </div>
                                <div class="card-content-image" >
                                    <img :src="items.img" alt="" srcset="" class="card-image">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
      
        </section>


    </div>
</template>
<style scoped>
.img-ico{
    width: 10rem;
}

.card-amenidades{
    box-shadow: 0px 0px 10px 0px rgba(0,0,0,.5);
    border-radius: 34px;
    overflow: hidden;
}

.card-content-image{
    overflow: hidden;
    border-radius: 34px;
}

.card-image{
    height: auto;
    object-fit: cover;
    transform: scale(1.05);
}




/* Pantallas grandes */
@media (min-width: 1500px) {}

/* PC */
@media (min-width: 1200px) and (max-width: 1499px) {}

/* Pantallas para tablets */
@media only screen and (min-width: 801px) and (max-width: 1199px) {}

/* Pantallas para tablets pequeñas*/
@media only screen and (min-width: 768px) and (max-width: 800px) {}

/* Pantallas mobiles */
@media (max-width: 767px) {

}</style>