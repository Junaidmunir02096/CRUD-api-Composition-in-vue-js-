<script setup>
import { RouterView } from "vue-router";

import useToast from "./compoable/useToast";

const { isVisible, message, type } = useToast();
</script>
<template>
  <div class="relative">
    <div
      v-if="isVisible"
      :class="[
        'fixed top-5 right-5 z-50 px-6 py-3 font-bold text-xl rounded-md shadow-lg transition duration-300 ease-in-out',
        type === 'success'
          ? 'bg-green-600 text-white'
          : type === 'error'
          ? 'bg-red-600 text-white'
          : 'bg-blue-600 text-white',
      ]"
    >
      {{ message }}
    </div>

    <!-- Header -->
    <div class="bg-green-500 text-center p-9">
      <h1 class="font-bold md:text-5xl text-3xl">
        Composition CRUD with API Call in Vue JS
      </h1>
    </div>
  </div>
  <RouterView />
</template>

<style></style>
