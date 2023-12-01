<script setup>
import {  RouterView } from 'vue-router';
import MenuComponent from '@/components/common/MenuComponent.vue';
import FooterComponent from '@/components/common/FooterComponent.vue'

</script>

<template>
   <div class="">
        <MenuComponent />
        <RouterView />
       
 <FooterComponent />
   </div>
</template>