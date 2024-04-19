<script setup>
import { useForm } from 'vee-validate';
import * as yup from 'yup';
import axios from 'axios';
import { onMounted, ref } from 'vue';
import Swal from 'sweetalert2';




const {  errors, defineField, resetForm, handleSubmit } = useForm({
    validationSchema: yup.object({
        email: yup.string().email('Ingrese una dirección de correo electrónico válida').required('El correo electrónico es obligatorio'),
        name: yup.string().min(6, 'El nombre debe tener al menos 6 caracteres').required('El nombre es obligatorio'),
        phone: yup.string().matches(/^\d{8}$/, 'El número de teléfono debe tener exactamente 8 dígitos').required('El número de teléfono es obligatorio'),
        option: yup.string().required('Seleccione una opción'),
    }),

});

const [email, emailAttrs] = defineField('email');
const [name, nameAttrs] = defineField('name');
const [phone, phoneAttrs] = defineField('phone');
const [option, optionAttrs] = defineField('option');
option.value = '';



const onSubmit = handleSubmit(
    async (values) => {
      
        // alert(JSON.stringify(values, null, 2));
        // resetForm();
        const data = {
            name: values.name,
            email: values.email,
            phone: values.phone,
            project_name: '',
            message: '',
            option: values.option,
        };

        try {
            console.log(data);
            const response = await axios.post('https://back.avanceingenieros.com/api/contacts/42', data);
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
        <div class="grid grid-cols-1 gap-7 ">

            <div class=" " id="contacto">

                <div>
                    <form action="post" @submit="onSubmit">
                        <div class="grid gap-5">
                            <input type="text" name="name" placeholder="Tu nombre " v-model="name" v-bind="nameAttrs"
                                class="py-2">
                            <input type="email" name="email" placeholder="Tu correo" v-model="email"
                                v-bind="emailAttrs" class="py-2">

                            <input type="tel" name="phone" placeholder="Tu número de contácto"
                                v-on:input="formatPhoneNumber" v-model="phone" v-bind="phoneAttrs" step="1"
                                maxlength="8" class="py-2">


                            <select name="option" id="" v-model="option" v-bind="optionAttrs">
                                <option value=""  disabled selected>¿Por qué medio quieres que te contacten?</option>
                                <option value="Proyecto 1">Correo electrónico</option>
                                <option value="Proyecto 2">Número de teléfono </option>
                            </select>


                            <input type="submit" value="Enviar mensaje"
                                class=" font-montserrat-medium font-bold uppercase rounded-full text-white bg-black px-3 py-1">

                       
                            <p class=" text-red-400 pl-1" v-for="(error, index) in errors" :key="index"><span >{{ error }}</span></p>

                            
                           
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
input, select{
    border: 0px solid #000000;
    padding: 0.9rem 1rem;
    width: 100%;
    border-radius: 15px;
    font-size: 1.2rem;
    font-weight: 500;
    background-color: #c1c7c5;
    color: #1A3329;
}


input[type="submit"]{
    background-color: #000000;
    color: #ffffff;
    cursor: pointer;
}

@media (max-width: 768px) {
    input, select{
        padding: 0.5rem 0.5rem;
        font-size: 1.2rem;
    }
    
}

</style>