<template>
  <div class="bg-gray-800">
    <nav class="flex items-center justify-between bg-FFC288 flex-wrap p-6">
      <div class="flex items-center flex-shrink-0 text-black mr-6">
        <span class="font-semibold text-xl tracking-tight"><img src="../components/image/Screenshot_2566-10-21_at_15.33.09-transformed.png" alt="Logo" class="h-10" /></span>
      </div>
      <div class="block lg:hidden">
        <button
          @click="isOpen = !isOpen"
          class="flex items-center px-3 py-2 border rounded text-gray-200 border-gray-200 hover:text-white hover:border-white"
        >
          <svg
            class="fill-current h-3 w-3"
            :class="{'hidden': isOpen, 'block': !isOpen }"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path
              d="M0 4h20v2H0V4zm0 5h20v2H0V9zm0 5h20v2H0v-2z"
            />
          </svg>
          <svg
            class="fill-current h-3 w-3"
            :class="{'hidden': !isOpen, 'block': isOpen }"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <title>Close</title>
            <path
              d="M14.348 14.849L10 10.5l4.348-4.35l-1.415-1.414L8.582 9.086L4.231 4.736L2.817 6.15l4.35 4.348l-4.35 4.349l1.414 1.415l4.351-4.35l4.349 4.35l1.415-1.415z"
            />
          </svg>
        </button>
      </div>
      <div
        :class="{'hidden': !isOpen, 'block': isOpen }"
        class="w-full flex-grow lg:flex lg:items-center lg:w-auto"
      >
        <div class="text-sm lg:flex-grow">
          <router-link to="/" class="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-white mr-4">
            Student
          </router-link>
          <router-link to="/advisor" class="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-white mr-4">
            Advisor
          </router-link>
          <router-link to="/announcement" class="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-white mr-4">
            Announcement
          </router-link>
        </div>
        <div class="text-sm">
          <router-link to="/admin" class="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-white">
            Log out
          </router-link>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false,
    };
  },
};
</script>

<style>

</style>
