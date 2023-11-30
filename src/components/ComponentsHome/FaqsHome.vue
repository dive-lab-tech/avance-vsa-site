<script setup>
import { faqsHome } from '@/utils/listItems'

</script>

<template>
    <div class="grid grid-cols-2">
        <div>
            <div class="py-10">
                <h3 class=" font-montserrat-medium font-bold text-2xl uppercase">PREGUNTAS MÁS FRECUENTES</h3>
            </div>
            <div>
                <div class="collapse collapse-plus bg-base-200 mb-3 font-montserrat-medium px-5 py-5"
                    v-for="(item, index) in faqsHome" :key="index">
                    <input type="radio" name="my-accordion-3" :checked="index === 0 ? 'checked' : ''" />
                    <div class="collapse-title font-montserrat-bold">
                        {{ item.ask }}
                    </div>
                    <div class="collapse-content ">
                        <ul class="mt-5">
                            <li class=" text-gray-500" v-for="(answer, indexAnswer) in item.answer" :key="indexAnswer">
                                {{ indexAnswer + 1 }}. {{ answer.item }}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div class=" px-10">
            <div class="  py-10">
                <h3 class=" font-montserrat-medium font-bold text-2xl uppercase">NOTICIAS</h3>
            </div>
            <div class=" h-full">
                <div class="  bg-base-200 ">
                    <div class="container-new ">
                        <div class="section-new flex justify-center flex-col px-8">
                            <p class=" font-montserrat-regular">Suscríbete a nuestro boletín para obtener la información más
                                reciente</p>
                            <div class="py-8">
                                <form action="" class=" flex border-b border-black">
                                    <input type="email" placeholder="Correo electrónico" class="w-full pb-3">
                                    <button class="px-1"><font-awesome-icon :icon="['fas', 'arrow-right-long']"
                                            class="icon-button" /></button>
                                </form>
                            </div>
                            <p class=" font-montserrat-regular text-gray-400">*Solo información relevante no spam</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    </div>
</template>

<style scoped>
.container-new {
    height: 22rem;
    padding: 1.5rem;
    border-radius: 1rem;
}

.section-new {
    height: 100%;
    background-color: white;
}

.icon-button{
    width: 25px;
    height: 25px;
}

input:focus{
    outline: none;
}
</style>