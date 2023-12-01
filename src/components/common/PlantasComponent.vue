<script setup>


</script>
<template>
    <div class="w-full py-5">
        <div class="w-full container-planta ">
            <div class="border-y grid-planta border-primary grid grid-cols-10">
                <div class="py-10 flex items-center col-span-4">
                    <div class="pl-10 ">
                        <p class=" font-montserrat-medium uppercase text-4xl">Plantas</p>
                        <p class=" font-montserrat-black uppercase text-4xl">Arquitectónicas</p>
                    </div>
                </div>
                <div class="py-10 col-span-2">
                    <div class="w-full h-full flex justify-center items-center">
                        <img src="@/assets/image/arrow.png" alt="" class="img-arrow transform max[767px]:rotate-90">
                    </div>
                </div>
                <div class="py-10 col-span-4">
                    <div class="h-full flex items-center justify-center">
                        <div class="flex flex-col justify-center items-center">
                            <div class="flex justify-center items-center"><a href="/public/pdf/BUGANVILIA-MODELO-A-O-B-ESTANDAR.pdf" target="_blank">
                                    <img src="@/assets/image/planta-sin-personalizacion.png" alt="" srcset="" class="link-plantas transition duration-600">
                                </a></div>
                            <div class="flex justify-center items-center mt-2"><a href="/public/pdf/BUGANVILIA-MODELO-A-O-B-PERSONALIZADA.pdf" target="_blank">
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


</style>