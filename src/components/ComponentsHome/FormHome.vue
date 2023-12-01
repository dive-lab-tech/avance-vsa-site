<script setup>


</script>
<template>
    <div class="">
        <div class="grid grid-cols-2 gap-7 max-[767px]:grid-cols-1">
            <div class="max-[767px]:order-2">
                <div class="mb-7">
                    <h2 class=" font-montserrat-bold text-3xl">Mapa</h2>
                </div>
                <div class=" overflow-hidden">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15517.829735199692!2d-88.233402!3d13.507496!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f7b2be493419859%3A0x68ae21034a252fe!2sVillas%20de%20San%20Andr%C3%A9s!5e0!3m2!1ses-419!2sus!4v1701364939293!5m2!1ses-419!2sus"
                        width="550" height="300" style="border:0;" allowfullscreen="" loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
                <div class="grid grid-cols-2 gap-4 max-[767px]:grid-cols-1 mt-4">
                    <div>
                        <h3 class=" font-montserrat-bold text-lg uppercase">Dirección</h3>
                        <div class="mt-3">
                            <p class=" font-montserrat-regular font-bold">Villas de San Andrés</p>
                            <p>Crta. Panam.
                                KM 131.5 San Miguel, El Salvador</p>
                        </div>
                    </div>
                    <div>
                        <h3 class=" font-montserrat-bold text-lg uppercase">Social</h3>
                        <div>
                            <ul class=" font-montserrat-regular">
                                <li><a href="https://www.facebook.com/villasdesanandres2023"
                                        class="flex items-center w-fit"><img src="@/assets/image/icon-facebook.svg" alt=""
                                            srcset="" class="mr-2 icon-social"> Facebook</a></li>
                                <li><a href="https://www.instagram.com/villasdesanandres/?igshid=MTIyMzRjYmRlZg%3D%3D"
                                        class="flex items-center w-fit"><img src="@/assets/image/icon-instagram.svg" alt=""
                                            srcset="" class="mr-2 icon-social"> Instagram</a></li>
                                <li><a href="https://www.youtube.com/@avanceingenierosv"
                                        class="flex items-center w-fit"><img src="@/assets/image/icon-youtube.svg" alt=""
                                            srcset="" class="mr-2 icon-social"> Youtube</a></li>
                                <li><a href="" class="flex items-center w-fit"><img src="@/assets/image/icon-whatsapp.svg"
                                            alt="" srcset="" class="mr-2 icon-social"> WhatsApp</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div class=" max-[767px]:order-1">
                <div class="mb-7">
                    <h1 class=" font-montserrat-bold text-3xl">Formulario de contacto</h1>
                </div>
                <div>
                    <form action="">
                        <div class="grid grid-cols-2 gap-3 max-[767px]:grid-cols-1">
                            <input type="text" placeholder="Nombre " class="py-2">
                            <input type="email" placeholder="Correo Electrónico" class="py-2">
                        </div>
                        <div class="grid grid-cols-2 mt-2 max-[767px]:grid-cols-1">
                            <input type="number" placeholder="Número de teléfono" class="py-2">
                        </div>
                        <div class="mt-2">
                            <textarea name="" id="" placeholder="Mensaje" class="py-2"></textarea>
                        </div>
                        <div class="flex justify-end mt-2">
                            <input type="submit" value="Enviar mensaje"
                                class=" font-montserrat-medium font-bold uppercase rounded-full text-white bg-black px-3 py-1">
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
.icon-social {
    width: 20px;
    height: 20px;
}

ul li {
    margin-bottom: 5px;
}

input:focus {
    outline: none;
}

input[ type=text],
input[ type=number],
input[ type=email] {
    margin-bottom: 12px;
    border-bottom: 2px solid #000000;
    width: 90%;
}

textarea {
    width: 100%;
    height: 6rem;
    border-bottom: 2px solid #000000;
}

input::placeholder,
textarea::placeholder {
    font-family: 'Montserrat regular', sans-serif;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    color: #000000;
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

    input[ type=text],
    input[ type=number],
    input[ type=email] {
        width: 100%;
    }

    input[type=submit] {
        width: 100%;
    }
}
</style>