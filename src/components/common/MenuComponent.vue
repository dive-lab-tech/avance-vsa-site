<script setup>
import { RouterLink } from 'vue-router'
</script>
<template>
    <header class="bg-primary">
        <div class="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-16">
            <div class="flex h-20 items-center justify-between">
                <div class="flex-1 md:flex md:items-center md:gap-12">
                    <a class="block text-teal-600" href="/">
                        <span class="sr-only">Home</span>
                        <img src="@/assets/image/logo-VSA.png" alt="" srcset="" class="logo">
                    </a>
                </div>

                <div class="md:flex md:items-center md:gap-12">
                    <nav aria-label="Global" class="hidden md:block">
                        <ul class="flex items-center gap-6 text-sm">
                            <li>
                                <RouterLink
                                    class="text-white transition hover:text-white/75 font-montserrat-medium font-bold text-lg"
                                    to="/">
                                    Inicio
                                </RouterLink>
                            </li>
                            <li>
                                <div class="dropdown dropdown-hover">
                                    <div tabindex="0" role="button">
                                        <RouterLink to="/" class="text-white transition hover:text-white/75 font-montserrat-medium font-bold text-lg">
                                            Modelos <font-awesome-icon :icon="['fas', 'caret-down']"  class="ml-1"/>
                                        </RouterLink>
                                    </div>
                                    <ul class="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-sm w-28 font-montserrat-medium">
                                        <li class="text-center"><RouterLink to="/">Veranera A</RouterLink></li>
                                        <li class="mt-4"><RouterLink to="/">Buganvilia A</RouterLink></li>
                                    </ul>
                                </div>
                            </li>
                            <li>
                                <RouterLink
                                    class="text-white transition hover:text-white/75 font-montserrat-medium font-bold text-lg"
                                    to="/">
                                    Amenidades
                                </RouterLink>
                            </li>
                            <li>
                                <RouterLink
                                    class="text-white transition hover:text-white/75 font-montserrat-medium font-bold text-lg"
                                    to="/">
                                    Contacto
                                </RouterLink>
                            </li>
                        </ul>
                    </nav>
                    <div class="flex items-center gap-4">
                        <div class="block md:hidden">
                            <button class="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                                    stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>

<style scoped>
.logo {
    width: 150px;
}</style>
