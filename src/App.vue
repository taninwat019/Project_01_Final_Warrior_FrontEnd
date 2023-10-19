<script setup lang="ts">
import SideBar from './components/SideBar.vue'
</script>

<template>
  <header>
    <SideBar /> 
    <div class="flex flex-col w-full overflow-auto">
      <RouterView />
    </div>
  </header>
</template>

<style scoped>

.flex-container {
  display: flex;
  min-height: 100vh;
  background-color: #F8EAD8;
}
</style>