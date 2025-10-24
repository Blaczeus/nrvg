<template>
  <div
    class="main-bg main-bg-opac sharpcornerui adminuiux-header-standard adminuiux-sidebar-iconic theme-blue adminuiux-header-transparent adminuiux-sidebar-fill-white bg-gradient-1 scrollup">
    <!-- Header -->
    <Header @toggleSidebar="toggleSidebar" />

    <div class="adminuiux-wrap">
      <!-- Sidebar -->
      <Sidebar />

      <!-- Main Content -->
      <main class="adminuiux-content has-sidebar" @click="handleContentClick">
        <slot>
          <!-- Page content will be injected here -->
        </slot>
      </main>
    </div>

    <!-- Personalize offcanvas -->
    <PersonalizeOffcanvas />

    <!-- Floating palette, back-to-top, modal -->
    <UtilityButtons />

    <!-- Footer -->
    <Footer />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import Header from './Header.vue'
import Sidebar from './Sidebar.vue'
import Footer from './Footer.vue'
import PersonalizeOffcanvas from '@/Components/PersonalizeOffcanvas.vue'
import UtilityButtons from '@/Components/UtilityButtons.vue'


const isSidebarOpen = ref(true)

const toggleSidebar = () => {
  isSidebarOpen.value = !isSidebarOpen.value
  document.body.classList.toggle('sidebar-hidden', isSidebarOpen.value)
}

onMounted(() => {
  // Initialize Feather icons
  if (window.feather) window.feather.replace()
})
</script>

<style>
.sidebar-hidden .adminuiux-sidebar {
  transform: translateX(-100%);
}

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
