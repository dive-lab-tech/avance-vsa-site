<script setup>
import { defineProps } from 'vue'

const props = defineProps ({
    urlNoCustom: String,
    urlCustom: String, 
})



</script>
<template>
    <div class="w-full py-0 lg:py-5">
        <div class="w-full container-planta ">
            <div class="  grid-planta border-primary grid grid-cols-10 max-[767px]:grid-cols-1">
                <div class="py-3 lg:py-10 flex items-center col-span-4">
                    <div class="pl-4 lg:pl-10 ">
                        <p class=" font-montserrat-medium uppercase text-2xl lg:text-4xl">Plantas</p>
                        <p class=" font-montserrat-black uppercase text-2xl lg:text-4xl">Arquitectónicas</p>
                    </div>
                </div>
                <div class="py-3 lg:py-10 col-span-2">
                    <div class="w-full h-full flex justify-center items-center">
                        <img src="@/assets/image/arrow.png" alt="" class="img-arrow">
                    </div>
                </div>
                <div class="py-3 lg:py-10 col-span-4">
                    <div class="h-full flex items-center justify-center">
                        <div class="flex flex-col justify-center items-center">
                            <div class="flex justify-center items-center"><a :href="props.urlNoCustom" target="_blank">
                                    <img src="@/assets/image/planta-sin-personalizacion.png" alt="" srcset="" class="link-plantas transition duration-600">
                                </a></div>
                            <div class="flex justify-center items-center mt-2"><a :href="props.urlCustom" target="_blank">
                                    <img src="@/assets/image/planta-con-personalizacion.png" alt="" srcset="" class="link-plantas transition duration-600">
                                </a></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
.container-planta {
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.5);
    padding: 50px 0px 50px 0px;
    border-radius: 30px 30px 30px 30px;
}

.grid-planta {
    border-bottom: 0.4rem solid;
    border-top: 0.4rem solid;
}

.img-arrow {
    width: auto;
    height: 9rem;
}
.link-plantas {
    height: 4rem;
    width: auto;
}

.link-plantas:hover {
    transform: scale(1.08);
}


@media (max-width: 767px) {
   .grid-planta{
    border-top: 0px;
    border-bottom: 0px;
    border-left: 8px solid rgb(26 51 41);
    border-right: 8px solid rgb(26 51 41);
   }

   .img-arrow{
        transform: rotate(90deg);
   }
   .container-planta{
         padding: 30px 0px ;
   }

   .link-plantas{
         height: 3rem;
   }
}


</style>