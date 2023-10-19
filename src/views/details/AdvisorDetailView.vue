<script setup lang="ts">
import { type Advisor } from '@/type'
import type { PropType } from 'vue'

defineProps({
  advisor: {
    type: Object as PropType<Advisor>,
    required: true
  }
})
</script>

<template>
  <div class="max-w-md mx-auto p-4 bg-gray-100 rounded-lg shadow-md">
    <div class="text-center">
      <div class="mb-4">
        <img :src="advisor?.image" alt="advisor image" class="rounded-lg shadow-md custom-image"> <!-- เพิ่ม custom-image ที่นี่ -->
      </div>
    </div>
  </div>
  <div class="text-center">
    <div class="mb-6 mt-4"> 
      <label for="firstName" class="block text-gray-700 text-xl font-bold mb-2">First Name:</label>
      <h2 class="text-base font-semibold mb-2">{{ advisor?.name }}</h2>
    </div>
    <div class="mb-6"> 
      <label for="lastName" class="block text-gray-700 text-xl font-bold mb-2">Last Name:</label>
      <h2 class="text-base font-semibold mb-2">{{ advisor?.surname }}</h2>
    </div>
    <div class="mb-6"> 
      <label for="lastName" class="block text-gray-700 text-xl font-bold mb-2">Department:</label>
      <h2 class="text-base font-semibold mb-2">{{ advisor?.surname }}</h2>
    </div>
    <div class="mb-6"> 
      <label for="lastName" class="block text-gray-700 text-xl font-bold mb-2">Position:</label>
      <h2 class="text-base font-semibold mb-2">{{ advisor?.surname }}</h2>
    </div>
    <div class="flex justify-center"> 
      <router-link to="/advisor" class="text-blue-500 inline-block mx-4">
        <button @click="" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Back</button>
      </router-link>
      <router-link to="/" class="text-blue-500 inline-block">
        <button @click="" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Advisee</button>
      </router-link>
    </div>
  </div>
</template>

<style>
.max-w-md {
  max-width: 30rem;
}

.custom-image {
  max-width: 100%;
  height: auto;
}
</style>
