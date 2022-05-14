<template>
  <header>
  
    <div class="wrapper">
      <NavBar msg="You did it!" />
      
    </div>
  </header>

 <RouterView />
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
import NavBar from '@/views/NavBar/Navbar.vue'
</script>

<style>


</style>
