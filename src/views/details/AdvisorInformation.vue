<template>
    <div class="container mx-auto p-4">
      <div class="max-w-md mx-auto bg-white rounded-lg overflow-hidden shadow-md">
        <img class="w-full" :src="teacher.image" :alt="`${teacher.firstName} ${teacher.lastName}`">
        <div class="py-4 px-6">
          <h2 class="text-2xl font-bold">{{ teacher.firstName }} {{ teacher.lastName }}</h2>
          <p class="text-gray-600 text-sm">{{ teacher.position }}</p>
          <div class="mt-4">
            <div class="text-sm text-gray-500">ID: {{ teacher.id }}</div>
          </div>
        </div>
      </div>
      <router-link to="/advisor" class="block mt-4 text-blue-500">Back to Admin Page</router-link>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';
  
  const router = useRouter();
  
  const teacher = ref({
    id: 1,
    firstName: 'John',
    lastName: 'Doe',
    position: 'Professor',
    image: 'https://via.placeholder.com/300'
  });
  </script>
  
  <style>
  .container {
    max-width: 600px;
    margin: 0 auto;
  }
  </style>
  