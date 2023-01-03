<template>
    <div class="dark:bg-gray-900 min-h-screen pt-6">
        <div class="container mx-auto">
            <Error v-if="!!error" />
            <Spinner v-if="pending" />
            <div v-else class="grid sm:grid-cols-1 lg:grid-cols-3 gap-5 lg:gap-10">
                <div v-for="post in posts" :key="post.id" class="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
                    <div class="p-5">
                        <a href="#">
                            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{{ post.title }}</h5>
                        </a>
                        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{{ post.body }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
definePageMeta({
    pageTransition: {
        name: 'rotate'
    }
})
const { pending, error, data: posts } = useLazyFetch('/api/posts');
</script>

<style scoped>
.rotate-enter-active,
.rotate-leave-active {
    transition: all 0.9s;
}

.rotate-enter-from,
.rotate-leave-to {
    opacity: 0;
    transform: rotate3d(1, 1, 1, 15deg);
}
</style>