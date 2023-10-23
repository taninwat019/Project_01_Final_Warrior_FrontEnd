<template>
  <div>
    <RouterLink class="student-link hover:scale-105 transform transition-transform duration-300 hover:shadow-md"
      :to="{ name: 'student-detail', params: { id: student?.id } }">
      <article class="w-full bg-white rounded-lg overflow-hidden hover:shadow-md h-96">
        <div class="relative w-full h-64 bg-cover bg-center">
          <img :src="student?.images" :alt="student?.name" class="w-full h-full object-cover" />
        </div>
        <div class="p-4">
          <p class="text-xs text-gray-500 mb-1">
            Student
          </p>
          <div class="text-gray-800 font-bold text-lg mb-1">{{ student?.name }} {{ student?.surname }}</div>
          <p class="text-gray-700 text-sm mb-1">ID: {{ student?.id }}</p>
        </div>
      </article>
    </RouterLink>
  </div>
</template>

<script setup lang="ts">
import type { StudentItem } from '@/type'
import type { PropType } from 'vue'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const props = defineProps({
  student: {
    type: Object as PropType<StudentItem>,
    require: true
  }
})
</script>

<style>
  img {
    width: 100%;
    height: 100%;
  }
</style>
