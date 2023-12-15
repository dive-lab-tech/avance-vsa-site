<script setup>
import { sustainableProjectHome } from '@/utils/listItems.js'
import ModalSliderHomeVue from '@/components/common/ModelosSliderComponent.vue'
import FaqsHome from '@/components/ComponentsHome/FaqsHome.vue'
import FormHome from '@/components/ComponentsHome/FormHome.vue'
import { onMounted, onUnmounted, ref } from 'vue'

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
    <div class="w-full">
        <!-- Banner Home-->
        <section class="w-full">
            <img src="@/assets/image/banner-home.jpg" alt="" srcset="" v-if="isMobile==false"/>
            <img src="@/assets/image/banner-home-mobile.jpg" alt="" srcset="" v-if="isMobile==true"/>
        </section>
        <!-- Introduction Site -->
        <section class="w-full bg-primary">
            <div class="w-full">
                <div class="grid grid-cols-3 gap-5 px-16 py-6 max-[767px]:px-5 max-[767px]:grid-cols-1">
                    <div class="flex flex-col justify-between">
                        <img src="@/assets/image/txt-intro-1.png" alt="" />
                        <div class="pl-16 max-[767px]:pl-0 container-btn-intro">
                            <a href="/#nuestro-proyecto" class="btn-intro-home">Ver más<font-awesome-icon :icon="['fas', 'arrow-right']"
                                    class="pl-4" /></a>
                        </div>
                    </div>
                    <div class="flex flex-col justify-between">
                        <img src="@/assets/image/txt-intro-2.png" alt="" srcset="" />
                        <div class="pl-16 max-[767px]:pl-0 container-btn-intro">
                            <a href="/#maps" class="btn-intro-home">Ver más<font-awesome-icon :icon="['fas', 'arrow-right']"
                                    class="pl-4" /></a>
                        </div>
                    </div>
                    <div class="flex flex-col justify-between">
                        <img src="@/assets/image/txt-intro-3.png" alt="" srcset="" />
                        <div class="pl-16 max-[767px]:pl-0 container-btn-intro">
                            <a href="/#contacto" class="btn-intro-home">Ver más<font-awesome-icon :icon="['fas', 'arrow-right']"
                                    class="pl-4" /></a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- Section about us -->
        <section class="w-full bg-accent px-36 py-20 max-[1199px]:px-5" id="nuestro-proyecto">
            <div class="grid grid-cols-2 max-[767px]:grid-cols-1">
                <div class="px-10 max-[767px]:px-0">
                    <h1 class="font-montserrat-black text-2xl lg:text-4xl">Sobre nuestro proyecto</h1>
                    <p class="font-montserrat-medium font-bold">Conoce tu nuevo lugar para vivir</p>
                    <br />
                    <p class="font-montserrat-medium font-bold">
                        Hemos desarrollado un proyecto residencial con detalles arquitectónicos coloniales y
                        lleno de amplios espacios confortables. Convirtiendo a Villas de San Andrés, en la mejor
                        opción para vivir.
                    </p>
                    <div class="border-y mt-5">
                        <p class="" style="color: #7a7a7a">
                            Casa Club, piscina, senderos, área de juegos y más dentro del proyecto.
                        </p>
                    </div>
                </div>
                <div class="">
                    <img src="@/assets/image/img-nuestro-proyecto.jpg" alt="" />
                </div>
            </div>
        </section>
        <div class="w-full bg-white px-36 max-[1199px]:px-5">
            <!-- Section projects  -->
            <section class="w-full py-5">
                <div class="w-full">
                    <div class="grid grid-cols-2 gap-7 max-[767px]:grid-cols-1 ">
                        <div>
                            <img src="@/assets/image/img-proyectos-home.jpg" alt="" />
                        </div>
                        <div>
                            <div class="h-full flex items-end">
                                <ul class="w-full">
                                    <li class="flex w-full mt-2 items-center"
                                        v-for="(item, index) in sustainableProjectHome" :key="index">
                                        <span class="w-1/12 flex justify-center"><img src="" alt="" /><img
                                                src="@/assets/image/sheet-icon.svg" class="sheet-icon-project" /></span>
                                        <p class="w-11/12 text-lg font-montserrat-bold">
                                            {{ item.title }}
                                            <span class="font-montserrat-medium">{{ item.description }}</span>
                                        </p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <!-- Section project two -->
            <section class="w-full py-10">
                <div class="w-full">
                    <div class="grid grid-cols-2 gap-7 max-[767px]:grid-cols-1">
                        <div class="max-[767px]:order-2">
                            <div class="h-full flex items-end px-10 max-[767px]:px-0">
                                <div class="w-full h-full flex flex-col justify-end">
                                    <p class="font-montserrat-bold text-lg">
                                        Cada modelo de vivienda cuenta con ambientes abiertos, esto permite que la sala,
                                        comedor, cocina y habitaciones estén mejor adecuados para la comodidad de toda
                                        la familia.
                                    </p>
                                    <p class="font-montserrat-bold text-lg py-8">Cada vivienda cuenta con:</p>

                                    <div class="grid grid-cols-4">
                                        <img src="@/assets/image/icon-sala-home.png" alt="" /><img
                                            src="@/assets/image/icon-comedor-home.png" alt="" /><img
                                            src="@/assets/image/icon-cocina-home.png" alt="" /><img
                                            src="@/assets/image/icon-parqueo-home.png" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class=" max-[767px]:order-1 ">
                            <img src="@/assets/image/interior-sala-home.jpg" alt="" />
                        </div>
                    </div>
                </div>
            </section>
            <!-- Section slider modelos -->
            <section class="w-full py-10">
                <div class="w-full py-10">
                    <h1 class="font-montserrat-black text-4xl">
                        Modelos de <br /><span class="font-montserrat-medium">vivienda</span>
                    </h1>
                </div>
                <ModalSliderHomeVue />
            </section>
            <!-- Section faqs -->
            <section class="w-full py-10">
                <FaqsHome />
            </section>
            <!-- Section testimonials -->
            <section class="w-full py-10">
                <div class="" v-if="isMobile == false">
                    <img src="@/assets/image/testimonio-desktop.png" alt="" srcset="" />
                </div>
                <div v-if="isMobile" class="flex justify-center">
                    <img src="@/assets/image/testimonio-mobile.png" alt="" srcset="" />
                </div>
            </section>
            <!-- Section contact -->
            <section class="w-full py-10" >
                <FormHome />
            </section>
        </div>
    </div>
</template>

<style scoped>
.sheet-icon-project {
    width: 30px;
    height: 30px;
}
</style>
