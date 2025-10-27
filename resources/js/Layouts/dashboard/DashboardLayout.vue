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
import { ref, onMounted, watch } from 'vue'
import Header from './Header.vue'
import Sidebar from './Sidebar.vue'
import Footer from './Footer.vue'
import PersonalizeOffcanvas from '@/Components/PersonalizeOffcanvas.vue'
import UtilityButtons from '@/Components/UtilityButtons.vue'

const isSidebarOpen = ref(true)

// Load saved sidebar state on mount
onMounted(() => {
  const savedSidebarState = localStorage.getItem('sidebarOpen')
  isSidebarOpen.value = savedSidebarState === null ? true : savedSidebarState === 'true'

  // Apply the correct class to body
  document.body.classList.toggle('sidebar-open', isSidebarOpen.value)
  document.body.classList.toggle('sidebar-hidden', !isSidebarOpen.value)

  // Initialize Feather icons
  if (window.feather) window.feather.replace()
})

// Handle toggle
const toggleSidebar = () => {
  isSidebarOpen.value = !isSidebarOpen.value
  localStorage.setItem('sidebarOpen', isSidebarOpen.value)

  document.body.classList.toggle('sidebar-open', isSidebarOpen.value)
  document.body.classList.toggle('sidebar-hidden', !isSidebarOpen.value)
}

// Close sidebar automatically on mobile when clicking content
const handleContentClick = (event) => {
  if (window.innerWidth < 992 && isSidebarOpen.value) {
    const sidebar = document.querySelector('.adminuiux-sidebar')
    const toggleBtn = event.target.closest('.sidebar-toggler')
    if (!sidebar.contains(event.target) && !toggleBtn) {
      toggleSidebar()
    }
  }
}
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
