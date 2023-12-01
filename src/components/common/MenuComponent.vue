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
                                        <RouterLink to="/modelos" class="text-white transition hover:text-white/75 font-montserrat-medium font-bold text-lg">
                                            Modelos <font-awesome-icon :icon="['fas', 'caret-down']"  class="ml-1"/>
                                        </RouterLink>
                                    </div>
                                    <ul class="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-sm w-28 font-montserrat-medium">
                                        <li class="text-center"><RouterLink to="/modelos/veranera-a">Veranera A</RouterLink></li>
                                        <li class="mt-4"><RouterLink to="/modelos/buganvilia-a">Buganvilia A</RouterLink></li>
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
                            <button class=" transition hover:text-gray-600/75">
                                <font-awesome-icon :icon="['fas', 'bars']" class="text-white icon-bars" />
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
}

.icon-bars{
    width: 30px;
    height: 30px;
}

</style>
