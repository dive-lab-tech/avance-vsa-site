<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import GallerySliderComponent from '@/components/ComponentsVeranera/GallerySliderComponent.vue'
import PlantasComponent from '@/components/common/PlantasComponent.vue'
import ContactComponent from '@/components/common/ContactComponent.vue'
import urlCustom from '@/assets/pdf/VERANERA-MODELO-A-O-B-PERSONALIZADA.pdf'
import urlNoCustom from '@/assets/pdf/VERANERA-MODELO-A-O-B-ESTANDAR.pdf'
import urlBrochure from '@/assets/pdf/BROCHURE-VDS-PARA-WEB-VERANERA-A.pdf'

var widthButtonDownload = ref(null);
var isMobile = ref(null);


document.title = 'Veranera A | Villas de San Andres'

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
    }
    
};



</script>
<template>
    <div class="w-full bg-white">
        <!-- Section Banner mobile and desktop -->
        <section class="w-full">
            <img src="@/assets/image/images-veranera-a/banner-veranera-a.jpg" alt="" srcset="" v-if="isMobile == false">
            <img src="@/assets/image/images-veranera-a/banner-veranera-a-mobile.jpg" alt="" srcset=""
                v-if="isMobile == true">
        </section>
        <!-- Section detail  -->
        <section>
            <div class="w-full bg-primary py-10">
                <div class=" grid grid-cols-8 gap-9 max-[767px]:grid-cols-3">
                    <div class="w-full flex justify-center">
                        <img src="@/assets/image/images-veranera-a/metros-modelo.png" alt="" class=" image-detail-model">
                    </div>
                    <div class="w-full flex justify-center">
                        <img src="@/assets/image/images-veranera-a/dormitorios-modelo.png" alt=""
                            class=" image-detail-model">
                    </div>
                    <div class="w-full flex justify-center">
                        <img src="@/assets/image/images-veranera-a/bano-modelo.png" alt="" class=" image-detail-model">
                    </div>
                    <div class="w-full flex justify-center">
                        <img src="@/assets/image/images-veranera-a/sala-modelo.png" alt="" class=" image-detail-model">
                    </div>
                    <div class="w-full flex justify-center">
                        <img src="@/assets/image/images-veranera-a/comedor-modelo.png" alt="" class=" image-detail-model">
                    </div>
                    <div class="w-full flex justify-center">
                        <img src="@/assets/image/images-veranera-a/cocina-modelo.png" alt="" class=" image-detail-model">
                    </div>
                    <div class="w-full flex justify-center">
                        <img src="@/assets/image/images-veranera-a/jardin-modelo.png" alt="" class=" image-detail-model">
                    </div>
                    <div class="w-full flex justify-center">
                        <img src="@/assets/image/images-veranera-a/parqueo-modelo.png" alt="" class=" image-detail-model">
                    </div>
                </div>
            </div>
            <div class="btn-download-brochure w-fit left-8 relative" style="margin-top: -1.25rem;">
                <a :href="urlBrochure"
                    class="flex justify-center w-fit max-[767px]:w-full" target="_blank"> <img
                        src="@/assets/image/images-veranera-a/btn-descargar.png" alt="" class="img-btn-download"></a>
            </div>
        </section>
        <!-- Section slider   -->
        <section class="w-full py-10 ">
            <div class=" px-36 py-10 max-[1199px]:px-5">
                <h1 class=" font-montserrat-bold text-4xl">Galería</h1>
            </div>
            <div class="">
                <GallerySliderComponent />
            </div>
        </section>
        <div class="w-full ">
            <!-- Section plantas arquitectónicas -->
            <section class="w-full flex justify-center py-10">
                <div class=" w-9/12 max-[767px]:w-full min-[1500px]:w-7/12">
                    <PlantasComponent :urlCustom="urlCustom" :urlNoCustom="urlNoCustom" />
                </div>
            </section>
            <!-- Section Modelo -->
            <section class=" w-full flex justify-center py-10 bg-accent max-[767px]:px-5">
                <div class=" w-9/12 max-[767px]:w-full min-[1500px]:w-7/12">
                    <div class="">
                        <h1 class="font-montserrat-bold text-3xl">Modelo Buganvilia - A</h1>
                    </div>
                    <div class="grid grid-cols-2 gap-6 py-5 max-[767px]:grid-cols-1">
                        <div class="">
                            <img src="@/assets/image/images-veranera-a/modelo-buganvilia.png" alt="" srcset="">
                        </div>
                        <div class="">
                            <div class="">
                                <p class=" font-montserrat-black mt-7 text-2xl">Descripción del modelo</p>
                                <p class=" font-montserrat-medium mb-4 mt-4">Nuestro modelo Buganvilia – A cuenta con los
                                    espacios que tu familia necesita. Puedes personalizarla de acuerdo a tu gusto, consulta
                                    con nuestros asesores de venta y conoce más de los adicionales que puedes agregar. </p>
                                <a href="/modelos/buganvilia-a"
                                    class=" bg-primary text-white rounded-full px-3 py-1 uppercase font-montserrat-medium text-sm ">Ver
                                    modelos</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <!-- Section Asesores y contáctenos  -->
            <section class=" w-full flex justify-center max-[767px]:px-5">
                <div class=" w-9/12 max-[767px]:w-full min-[1500px]:w-7/12">
                    <ContactComponent />
                </div>
            </section>
        </div>


    </div>
</template>
<style scoped>
.image-detail-model {
    width: auto;
    height: 7rem;
}

.img-btn-download {
    width: auto;
    height: 2.5rem;
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

    .btn-download-brochure {
        margin-left: 0rem;
        position: initial;
        width: 100%;

    }

}</style>