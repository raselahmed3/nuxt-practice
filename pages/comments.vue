<template>
    <div class="dark:bg-gray-900 min-h-screen pt-6">
        <div class="container mx-auto"> 
            <Error v-if="!!error" />
            <Spinner v-if="pending" />
            <div v-else class="grid sm:grid-cols-1 lg:grid-cols-3 gap-5 lg:gap-10">
                <div v-for="comment in comments" :key="comment.id" class="text-white dark:bg-gray-700 rounded-3xl px-4 pt-2 pb-2.5">
                    <div class="font-semibold uppercase mb-6 text-sm leading-relaxed">{{ comment.name }}</div>
                    <div class="text-normal leading-snug md:leading-normal">{{ comment.body }}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
definePageMeta({
    pageTransition: {
        name: 'page'
    }
})
const { pending, error, data: comments } = await useLazyFetch('/api/comments');
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
