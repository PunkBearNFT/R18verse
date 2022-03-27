<script setup>
import TopBar from '@/components/TopBar.vue'
import Footer from '@/components/Footer.vue'
</script>

<template>
  <div>
    <header class="sticky top-0 z-10">
      <TopBar/>
    </header>
    <main>
      <router-view />
    </main>
    <Footer/>
  </div>
</template>
