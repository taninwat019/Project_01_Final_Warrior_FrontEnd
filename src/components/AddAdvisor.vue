<template>
  <div class="container mx-auto p-4">
    <h1 class="text-2xl font-bold mb-4">Add New Teacher Information</h1>
    <div class="mb-4">
      <label for="firstName" class="block text-gray-700 text-sm font-bold mb-2">First Name:</label>
      <input v-model="firstName" type="text" id="firstName" class="w-full border-2 border-gray-300 p-2 rounded" placeholder="Enter teacher's first name">
    </div>
    <div class="mb-4">
      <label for="lastName" class="block text-gray-700 text-sm font-bold mb-2">Last Name:</label>
      <input v-model="lastName" type="text" id="lastName" class="w-full border-2 border-gray-300 p-2 rounded" placeholder="Enter teacher's last name">
    </div>
    <div class="mb-4">
      <label for="position" class="block text-gray-700 text-sm font-bold mb-2">Department:</label>
      <input v-model="department" type="text" id="position" class="w-full border-2 border-gray-300 p-2 rounded" placeholder="Enter teacher's position">
    </div>
    <div class="mb-4">
      <label for="position" class="block text-gray-700 text-sm font-bold mb-2">Position:</label>
      <input v-model="position" type="text" id="position" class="w-full border-2 border-gray-300 p-2 rounded" placeholder="Enter teacher's position">
    </div>
    <div class="mb-4">
      <label for="image" class="block text-gray-700 text-sm font-bold mb-2">Image:</label>
      <input type="file" @change="onFileChange" id="image" class="w-full border-2 border-gray-300 p-2 rounded">
    </div>
    <img v-if="image" :src="image" class="mb-4 w-full rounded">
    <div class="flex justify-between">
      <router-link to="/advisor" class="text-blue-500 inline-block"><button @click="" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"> Back to Admin Page</button></router-link>
      <button @click="addTeacher" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Add Information</button>
      
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const firstName = ref('');
const lastName = ref('');
const position = ref('');
const image = ref('');

const addTeacher = () => {
  // Add new teacher information
  console.log(`First Name: ${firstName.value}, Last Name: ${lastName.value}, Position: ${position.value}`);
  // Insert your code for adding data here
};

const onFileChange = (e) => {
  const file = e.target.files[0];
  const reader = new FileReader();
  reader.onload = (e) => {
    image.value = e.target.result;
  };
  reader.readAsDataURL(file);
};
</script>

<style>
.container {
  max-width: 600px;
  margin: 0 auto;
}

button {
  margin-top: 1rem;
}
</style>
