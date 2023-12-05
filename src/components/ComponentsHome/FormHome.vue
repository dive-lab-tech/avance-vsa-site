<script setup>
import { useForm } from 'vee-validate';
import * as yup from 'yup';
import axios from 'axios';
import { onMounted } from 'vue';
import Swal from 'sweetalert2';

const { values, errors, defineField, resetForm, handleSubmit } = useForm({
    validationSchema: yup.object({
        email: yup.string().email('Ingrese una dirección de correo electrónico válida').required('El correo electrónico es obligatorio'),
        name: yup.string().min(6, 'El nombre debe tener al menos 6 caracteres').required('El nombre es obligatorio'),
        phone: yup.string().matches(/^\d{8}$/, 'El número de teléfono debe tener exactamente 8 dígitos').nullable(),
        message: yup.string().required('El mensaje es obligatorio'),
    }),
});

const [email, emailAttrs] = defineField('email');
const [name, nameAttrs] = defineField('name');
const [phone, phoneAttrs] = defineField('phone');
const [message, messageAttrs] = defineField('message');

const onSubmit = handleSubmit(
    async (values) => {
        // alert(JSON.stringify(values, null, 2));
        // resetForm();
        const data = {
            name: values.name,
            email: values.email,
            phone: values.phone,
            project_name: '',
            message: values.message,
        };

        try {
            const response = await axios.post('https://back.avanceingenieros.com/api/contacts/4', data);
            console.log(response);
            Swal.fire({
                title: '¡Gracias!',
                text: 'Su mensaje ha sido enviado con éxito.',
                icon: 'success',
                showConfirmButton: false,
                confirmButtonColor: '#000000',
                background: '#ffffff',
                timer: 2000,
            });
            resetForm();
        }
        catch (error) {
            Swal.fire({
                title: '¡Error!',
                text: 'Error al enviar el mensaje, por favor intente de nuevo.',
                icon: 'error',
                showConfirmButton: false,
                confirmButtonColor: '#000000',
                background: '#ffffff',
                timer: 2000,
            });
        }

    },
    ({ errors }) => {
        const firstError = Object.keys(errors)[0];
        const el = document.querySelector(`[name="${firstError}"]`);
        el?.scrollIntoView({
            behavior: 'smooth',
        });
        el.focus();

    },
);
const formatPhoneNumber = (e) => {
    const target = e.target;
    const input = target.value.replace(/\D/g, '').substring(0, 8);
    target.value = input.substring(0, 4) + '-' + input.substring(4, 8);
};


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
                    <form action="post" @submit="onSubmit">
                        <div class="grid grid-cols-2 gap-3 max-[767px]:grid-cols-1">
                            <input type="text" name="name" placeholder="Nombre " v-model="name" v-bind="nameAttrs"
                                class="py-2">
                            <input type="email" name="email" placeholder="Correo Electrónico" v-model="email"
                                v-bind="emailAttrs" class="py-2">
                        </div>
                        <div class="grid grid-cols-2 mt-2 max-[767px]:grid-cols-1">
                            <input type="tel" name="phone" placeholder="Numero de teléfono" v-on:input="formatPhoneNumber"
                                v-model="phone" v-bind="phoneAttrs" step="1" maxlength="8" class="py-2">
                        </div>
                        <div class="mt-2">
                            <textarea name="message" id="" placeholder="Mensaje" v-model="message" v-bind="messageAttrs"
                                class="py-2"></textarea>
                        </div>
                        <div class="flex justify-end mt-2">
                            <input type="submit" value="Enviar mensaje"
                                class=" font-montserrat-medium font-bold uppercase rounded-full text-white bg-black px-3 py-1">
                        </div>
                        <div class="grid grid-cols-1">
                            <p class=" text-red-400 pl-1" v-for="(error, index) in errors" :key="index">{{ error }}</p>
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
input[ type=tel],
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
    input[ type=tel],
    input[ type=email] {
        width: 100%;
    }

    input[type=submit] {
        width: 100%;
    }
}</style>