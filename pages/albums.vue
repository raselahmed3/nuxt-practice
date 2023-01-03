<template>
    <div class="dark:bg-gray-900 min-h-screen pt-6">
        <div class="container mx-auto">
            <Error v-if="!!error" />
            <Spinner v-if="pending" />
            <div v-else class="grid sm:grid-cols-1 lg:grid-cols-3 gap-5 lg:gap-10">
                <div v-for="album in albums" :key="album.id" class="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
                    <a href="#">
                        <img class="rounded-t-lg" :src="album.url" alt="" />
                    </a>
                    <div class="p-5">
                        <a href="#">
                            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{{ album.title }}</h5>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
definePageMeta({
    pageTransition: {
        name: 'page',
        mode: 'out-in'
    }
})
const { pending, error, data: albums } = useLazyFetch('/api/albums');
</script>
<style scoped>
.page-enter-active,
.page-leave-active {
    transition: all 0.4s;
}

.page-enter-from,
.page-leave-to {
    opacity: 0;
    filter: blur(1rem);
}
</style>