<script setup lang="ts">
import CommentForm from '@/components/CommentForm.vue'
import CommentList from '@/components/CommentList.vue'
import type { StudentItem } from '@/type'
import { defineProps, type PropType } from 'vue'

defineProps({
  student: {
    type: Object as PropType<StudentItem>,
    required: true
  }
})
</script>

<template>
  <div v-if="student" class="flex justify-center items-center">
    <div class="max-w-3xl mx-auto p-6 bg-gray-100 rounded-lg shadow-md">
      <div class="flex">
        <div class="w-1/3">
          <img :src="student.image" alt="Student Image" class="rounded-lg shadow-md max-w-full h-auto" />
        </div>
        <div class="w-2/3 p-6">
          <h2 class="text-3xl font-semibold mb-4">{{ student.name }} {{ student.surname }}</h2>
          <p class="text-lg text-gray-600 mb-2">
            <span class="font-semibold">ID:</span> {{ student.id }}
          </p>
          <p class="text-lg text-gray-600 mb-2">
            <span class="font-semibold">Department:</span> {{ student.id }}
          </p>
          <div class="text-lg text-gray-600 mb-4">
            <span class="font-semibold">Enrolled Courses:</span>
            <ul class="list-disc list-inside">
              <li v-for="courseId in student.courseId" :key="courseId">{{ courseId }}</li>
            </ul>
          </div>
        </div>
      </div>
      <CommentForm class="mt-4" :studentId="student.id" />
      <CommentList class="mt-4" :studentId="student.id" :key="student.id" />
    </div>
  </div>
</template>

<style scoped>
.max-w-3xl {
  max-width: 48rem;
}

.text-3xl {
  font-size: 1.875rem;
}

.text-lg {
  font-size: 1.125rem;
}
</style>
