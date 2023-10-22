<template>
  <div class="container mx-auto p-4">
    <h1 class="text-2xl font-bold mb-4">Add New Teacher Information</h1>
    <form @submit.prevent="onSubmit">
    <div class="mb-4">
      <label for="firstName" class="block text-gray-700 text-sm font-bold mb-2">First Name:</label>
      <input v-model="firstName" type="text" id="firstName" class="w-full border-2 border-gray-300 p-2 rounded" placeholder="Enter teacher's first name">
    </div>
    <div class="mb-4">
      <label for="lastName" class="block text-gray-700 text-sm font-bold mb-2">Last Name:</label>
      <input v-model="lastName" type="text" id="lastName" class="w-full border-2 border-gray-300 p-2 rounded" placeholder="Enter teacher's last name">
    </div>
    <div class="mb-4">
      <label for="position" class="block text-gray-700 text-sm font-bold mb-2">Email:</label>
      <input v-model="email" type="text" id="position" class="w-full border-2 border-gray-300 p-2 rounded" placeholder="Enter teacher's position">
    </div>
    <div class="mb-4">
      <label for="position" class="block text-gray-700 text-sm font-bold mb-2">Username:</label>
      <input v-model="username" type="text" id="position" class="w-full border-2 border-gray-300 p-2 rounded" placeholder="Enter teacher's position">
    </div>
    <div class="mb-4">
      <label for="position" class="block text-gray-700 text-sm font-bold mb-2">Password:</label>
      <input v-model="password" type="text" id="position" class="w-full border-2 border-gray-300 p-2 rounded" placeholder="Enter teacher's position">
    </div>
    <!-- <div class="mb-4">
      <label for="image" class="block text-gray-700 text-sm font-bold mb-2">Image:</label>
      <input type="file" @change="onFileChange" id="image" class="w-full border-2 border-gray-300 p-2 rounded">
    </div>
    <img v-if="image" :src="image" class="mb-4 w-full rounded"> -->
    <div class="flex justify-between">
      <router-link to="/advisor" class="text-blue-500 inline-block"><button @click="" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"> Back to Admin Page</button></router-link>
      <button @click="addTeacher" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Add Information</button>
    </div>
  </form>
  </div>
</template>

<script setup lang="ts">
import { useField, useForm } from 'vee-validate'
import { useAuthStore } from '@/stores/auth'
import { useRouter } from 'vue-router'
import { useMessageStore } from '@/stores/message'

const authStore = useAuthStore()
const router = useRouter()
const storeMessage = useMessageStore()

const { message } = storeMessage

const { handleSubmit } = useForm()

const onSubmit = handleSubmit(async (values) => {
  try {
    console.log("hh")
    await authStore.advisorRegister(
      values.firstName,
      values.lastName,
      values.email,
      values.username,
      values.password
    );
    router.push({ name: 'advisor-list' });
    storeMessage.updateMessage('Registration successful');
    setTimeout(() => {
      storeMessage.resetMessage();
    }, 4000);
  } catch (error) {
    storeMessage.updateMessage('could not register');
    setTimeout(() => {
      storeMessage.resetMessage();
    }, 3000);
  }
});

const { value: firstName } = useField<string>('firstName')
const { value: lastName } = useField<string>('lastName')
const { value: email } = useField<string>('email')
const { value: username } = useField<string>('username')
const { value: password } = useField<string>('password')
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
