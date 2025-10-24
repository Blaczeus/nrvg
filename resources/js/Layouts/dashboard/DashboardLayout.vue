<template>
  <div
    class="main-bg main-bg-opac sharpcornerui adminuiux-header-standard adminuiux-sidebar-iconic theme-blue adminuiux-header-transparent adminuiux-sidebar-fill-white bg-gradient-1 scrollup">
    <!-- Header -->
    <Header @toggleSidebar="toggleSidebar" />

    <div class="adminuiux-wrap">
      <!-- Sidebar -->
      <Sidebar/>
  
      <!-- Main Content -->
      <main class="adminuiux-content has-sidebar" @click="handleContentClick">
        <div class="container mt-4" id="main-content">
          <slot></slot>
        </div>
      </main>
    </div>

    <!-- Footer -->
    <Footer/>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import Header from './Header.vue'
import Sidebar from './Sidebar.vue'
import Footer from './Footer.vue'


const isSidebarOpen = ref(true)

const toggleSidebar = () => {
  isSidebarOpen.value = !isSidebarOpen.value
  document.body.classList.toggle('sidebar-open', isSidebarOpen.value)
}

onMounted(() => {
  // Initialize Feather icons
  if (window.feather) window.feather.replace()
})
</script>

<style>

.adminuiux-sidebar {
  transition: transform 0.3s ease;
}

.adminuiux-wrap {
  display: flex;
  flex-direction: row;
  min-height: 100vh;
}

.adminuiux-content {
  flex: 1;
  display: flex;
  flex-direction: column;
}

</style>
