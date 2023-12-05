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
        phone: yup.string().required('El número de teléfono es obligatorio').matches(/^\d{8}$/, 'El número de teléfono debe tener exactamente 8 dígitos').nullable(),
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
        <!-- Asesores  -->
        <div class=" font-montserrat-bold py-10 px-28 max-[1199px]:px-0">
            <div class="flex flex-col justify-center">
                <h1 class=" font-montserrat-bold text-5xl text-center max-[767px]:text-3xl">Nuestros asesores de venta</h1>
                <div class="grid grid-cols-2 gap-10 max-[767px]:grid-cols-1 mt-20">
                    <div class=" flex justify-center">
                        <div class="">
                            <div class=" flex justify-center">
                                <img src="@/assets/image/ASESORA-VERONICA.png" alt="" class="img-asesor">
                            </div>
                            <div class="mt-4 max-[767px]:text-center">
                                <h4 class=" text-xl font-bold">Verónica Benitez</h4>
                                <div class=" font-montserrat-regular font-bold mt-3 max-[1199px]:text-sm">
                                    <p>Asesora de ventas</p>
                                    <a href="tel:78609724">7860-9724</a><br>
                                    <a
                                        href="mailto:VeronicaBenitez@avanceingenieros.com">VeronicaBenitez@avanceingenieros.com</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class=" flex justify-center">
                        <div class="">
                            <div class=" flex justify-center"> <img src="@/assets/image/ASESORA-NELLY.png" alt=""
                                    class="img-asesor"></div>
                            <div class="mt-4 max-[767px]:text-center">
                                <h4 class=" text-xl font-bold">Nelly Aguirre</h4>
                                <div class=" font-montserrat-regular font-bold mt-3 max-[1199px]:text-sm">
                                    <p>Asesora de ventas</p>
                                    <a href="tel:78603732">7860-3732</a><br>
                                    <a
                                        href="mailto:nelly.aguirre@avanceingenieros.com">nelly.aguirre@avanceingenieros.com</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Formulario -->
        <div class=" py-10 px-28 max-[1199px]:px-0">
            <div class="flex justify-center">
                <h1 class=" font-montserrat-bold text-5xl max-[767px]:text-3xl">Contáctanos</h1>
            </div>
            <form action="post" class=" font-montserrat-medium" @submit="onSubmit">
                <div class="w-full"><input type="text" name="name" id="" class="w-full" placeholder="Nombre" v-model="name"
                        v-bind="nameAttrs">
                    <span class=" text-red-400 pl-1 text-sm">{{ errors.name }}</span>
                </div>
                <div class="grid grid-cols-2 min-[768px]:gap-16 max-[767px]:grid-cols-1  ">
                    <div class="w-full">
                        <input type="tel" name="phone" placeholder="Número de teléfono" class="w-full" v-model="phone"
                            v-bind="phoneAttrs" step="1" maxlength="8" v-on:input="formatPhoneNumber">
                        <span class=" text-red-400 pl-1 text-sm">{{ errors.phone }}</span>
                    </div>
                    <div class="w-full">
                        <input v-model="email" v-bind="emailAttrs" type="text" name="email" placeholder="Correo Electrónico"
                            class="w-full">
                        <span class=" text-red-400 pl-1 text-sm">{{ errors.email }}</span>
                    </div>
                </div>
                <div class="w-full"><textarea name="message" id="" class="w-full" rows="8" placeholder="Mensaje"
                        v-model="message" v-bind="messageAttrs"></textarea>
                    <span class=" text-red-400 pl-1 text-sm">{{ errors.message }}</span>
                </div>
                <div class="w-full flex justify-between mt-5">
                    <ul class=" font-montserrat-regular">
                        <li><a href="https://www.facebook.com/villasdesanandres2023" class="flex items-center w-fit"><img
                                    src="@/assets/image/icon-facebook.svg" alt="" srcset="" class="mr-2 icon-social">
                                Facebook</a></li>
                        <li><a href="https://www.instagram.com/villasdesanandres/?igshid=MTIyMzRjYmRlZg%3D%3D"
                                class="flex items-center w-fit"><img src="@/assets/image/icon-instagram.svg" alt=""
                                    srcset="" class="mr-2 icon-social"> Instagram</a></li>
                        <li><a href="https://www.youtube.com/@avanceingenierosv" class="flex items-center w-fit"><img
                                    src="@/assets/image/icon-youtube.svg" alt="" srcset="" class="mr-2 icon-social">
                                YouTube</a></li>
                    </ul>
                    <input type="submit" value="enviar mensaje"
                        class=" font-montserrat-bold px-3 py-1 rounded-full uppercase text-white bg-black h-fit " />
                </div>
            </form>
        </div>

    </div>
</template>
<style scoped>
.img-asesor {
    width: auto;
    height: 10rem;

}

.icon-social {
    width: 20px;
    height: 20px;
}

ul li {
    margin-bottom: 5px;
}


input[type="text"],
input[type="tel"],
input[type="email"] {
    background-color: #f2f2f2;
    margin-top: 20px;
    height: 50px;
    padding: 20px;
    border-radius: 6px;
}

textarea {
    background-color: #f2f2f2;
    margin-top: 20px;
    padding: 20px;
    border-radius: 6px;
}

input[type="text"]:focus,
input[type="tel"]:focus,
input[type="email"]:focus,
textarea:focus {
    outline: none;
}

input[type="text"]::placeholder,
input[type="tel"]::placeholder,
input[type="email"]::placeholder,
textarea::placeholder {
    color: #0000008c;
}</style>