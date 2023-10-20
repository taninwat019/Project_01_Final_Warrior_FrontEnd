<template>
  <div v-if="student" class="flex justify-center items-center">
    <div class="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-md my-4">
      <div class="grid md:grid-cols-2 gap-4">
        <div class="w-full h-72 md:h-96 lg:h-80">
          <img :src="student?.image" :alt="student?.name" class="w-full h-full object-cover rounded-lg" />
        </div>
        <div class="w-full p-6">
          <h2 class="text-3xl font-semibold mb-4">{{ student.name }} {{ student.surname }}</h2>
          <p class="text-lg text-gray-600 mb-2">
            <span class="font-semibold">ID:</span> {{ student.id }}
          </p>
          <p class="text-lg text-gray-600 mb-2">
            <span class="font-semibold">Department:</span> {{ student.department }}
          </p>
          <div class="text-lg text-gray-600 mb-4">
            <span class="font-semibold">Enrolled Courses:</span>
            <ul class="list-disc list-inside">
              <li v-for="courseId in student.courseId" :key="courseId" class="mb-2">{{ courseId }}</li>
            </ul>
          </div>
        </div>
      </div>
      <CommentForm class="mt-4" :studentId="student.id" />
      <CommentList class="mt-4" :studentId="student.id" :key="student.id" />
      
    </div>
  </div>
</template>

<script setup lang="ts">
import CommentForm from '@/components/CommentForm.vue';
import CommentList from '@/components/CommentList.vue';
import type { StudentItem } from '@/type';
import { defineProps, type PropType } from 'vue';

defineProps({
  student: {
    type: Object as PropType<StudentItem>,
    required: true
  }
});
</script>

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
