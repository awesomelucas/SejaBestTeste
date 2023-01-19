<script setup lang="ts">
defineProps<{ msg: string }>()

</script>

<template>
    <h1 class="mb-10 text-4xl text-center text-orange-700 font-medium">{{ msg }}</h1>
</template>

