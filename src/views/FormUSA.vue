<script setup>
import FormComponent from '@/components/ComponentsFormUSA/FormComponent.vue';

</script>

<template>
    <div class="mainContainer">
        <div class="img-container">
            <img src="https://images.pexels.com/photos/1438832/pexels-photo-1438832.jpeg" alt="" srcset="">
        </div>
        <div class="img-container-mobile">
            <img src="@/assets/image/banner-usa.jpg" alt="" srcset="">
        </div>
        <div class="flex justify-center">
            <div class="container">
                <div class="py-10 px-10 sm:px-0">
                    <h1 class="title font-bold text-primary text-3xl sm:text-4xl text-center">Llena el formulario y solicita
                        más información con nuestras
                        asesoras</h1>
                </div>
                <div class="py-5 px-5">
                    <FormComponent />
                </div>
                <div  class="py-10">
                    <div class="flex justify-center items-center"><svg xmlns="http://www.w3.org/2000/svg" width="70.051" height="88.625"
                            viewBox="0 0 70.051 88.625">
                            <g id="Grupo_90" data-name="Grupo 90" transform="translate(-504.974 -2097.508)">
                                <g id="Grupo_89" data-name="Grupo 89">
                                    <path id="Trazado_211" data-name="Trazado 211"
                                        d="M574.5,2125.763c-2.286-11.939-11.893-22.736-23.479-26.565a44.489,44.489,0,0,0-7.743-1.69h-6.57c-1.811.321-3.64.529-5.426,1a35.091,35.091,0,0,0-18.432,12.028c-6.911,8.349-9.365,17.8-6.993,28.429a55.36,55.36,0,0,0,7.882,17.85,136.331,136.331,0,0,0,17.091,20.914q3.7,3.822,7.455,7.581a2.189,2.189,0,0,0,3.419,0c.477-.459.939-.935,1.408-1.4a200.76,200.76,0,0,0,18.725-20.793c4.635-6.148,8.688-12.624,11.14-19.991A34.01,34.01,0,0,0,574.5,2125.763Zm-34.35,23.362a15.327,15.327,0,1,1,15.185-15.326A15.33,15.33,0,0,1,540.147,2149.125Z"
                                        fill="#1a3329" />
                                </g>
                            </g>
                        </svg>
                    </div>
                    <div class="text-center text-3xl sm:text-4xl">
                        <h3 class=" font-light">Vive en la mejor zona de</h3>
                        <h4 class=" font-black mt-1">San Miguel, El Salvador</h4>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>


.container {
    max-width: 900px;
}

.mainContainer {
    font-family: 'Magnify-Regular';
}

.img-container {
    width: 100%;
    height: 60vh;
}

.img-container img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}
.img-container-mobile{
    display: none;
}

@media (max-width: 768px) {
    .img-container {
    display: none;
}
.img-container-mobile{
    display: block;
}

}
</style>
