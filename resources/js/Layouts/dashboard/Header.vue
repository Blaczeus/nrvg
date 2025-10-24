<template>
  <header class="adminuiux-header">
    <nav class="navbar navbar-expand-lg fixed-top">
      <div class="container-fluid">

        <!-- Sidebar Toggle -->
        <button class="btn btn-link btn-square sidebar-toggler" type="button" @click="$emit('toggleSidebar')">
          <i data-feather="menu" class="sidebar-svg"></i>
        </button>

        <!-- Brand -->
        <a class="navbar-brand" href="#">
          <img src="/dashboard-assets/img/logo-light.svg" alt="Logo Light" data-bs-img="light" />
          <img src="/dashboard-assets/img/logo.svg" alt="Logo Dark" data-bs-img="dark" />
          <div>
            <span class="h4">Learning<span class="fw-bold">UI</span><span>UX</span></span>
            <p class="company-tagline">AdminUIUX HTML template</p>
          </div>
        </a>

        <!-- Search (Desktop) -->
        <div class="flex-grow-1 px-3 justify-content-center">
          <div class="input-group input-group-md rounded search-wrap maxwidth-300 mx-auto d-none d-lg-flex shadow-sm">
            <span class="input-group-text border-0 bg-none">
              <i class="bi bi-search"></i>
            </span>
            <input class="form-control border-0 bg-none" type="search" placeholder="Search..." />
          </div>
        </div>

        <!-- Header Actions -->
        <div class="ms-auto d-flex align-items-center gap-3 justify-content-around">

          <!-- Search Icon (Mobile) -->
          <button class="btn btn-link btn-square btn-link-header d-lg-none" type="button">
            <i data-feather="search"></i>
          </button>

          <!-- Theme Toggle -->
          <button class="btn btn-link btn-square btn-link-header btnsunmoon" type="button" @click="toggleTheme">
            <i :class="currentTheme === 'light' ? 'sun' : 'moon'"
              :data-feather="currentTheme === 'light' ? 'moon' : 'sun'"></i>
          </button>

          <!-- Notification Dropdown -->
          <div class="dropdown d-inline-block">
            <button class="btn btn-link btn-square btn-link-header dropdown-toggle no-caret position-relative"
              type="button" data-bs-toggle="dropdown">
              <i data-feather="bell"></i>
              <span class="position-absolute top-0 end-0 badge rounded-pill bg-danger p-1" style="font-size: 0.65rem">
                9+
              </span>
            </button>
            <ul class="dropdown-menu dropdown-menu-end width-300 px-0">
              <li><a class="dropdown-item" href="#">No new notifications</a></li>
            </ul>
          </div>

          <!-- Profile Menu -->
          <div class="dropdown d-inline-block">
            <a class="dropdown-toggle btn btn-link btn-square btn-link-header style-none no-caret px-0"
              data-bs-toggle="dropdown">
              <figure class="avatar avatar-28 rounded-circle coverimg align-middle">
                <img src="/dashboard-assets/img/modern-ai-image/user-6.jpg" alt="User" />
              </figure>
            </a>
            <div class="dropdown-menu dropdown-menu-end width-250 px-0">
              <div class="px-3 py-2 text-center border-bottom">
                <figure class="avatar avatar-60 rounded-circle mx-auto mb-2">
                  <img src="/dashboard-assets/img/modern-ai-image/user-6.jpg" alt="User" />
                </figure>
                <h6 class="mb-0">John Doe</h6>
                <p class="text-muted small mb-0">Administrator</p>
              </div>
              <a class="dropdown-item" href="#">My Profile</a>
              <a class="dropdown-item" href="#">Settings</a>
              <hr class="my-1" />
              <a class="dropdown-item text-danger" href="#">Logout</a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue'
import feather from 'feather-icons'

const currentTheme = ref('light')

const toggleTheme = () => {
  const htmlEl = document.documentElement
  const newTheme = currentTheme.value === 'light' ? 'dark' : 'light'
  htmlEl.setAttribute('data-bs-theme', newTheme)
  localStorage.setItem('theme', newTheme)
  currentTheme.value = newTheme
}

onMounted(() => {
  const savedTheme = localStorage.getItem('theme') || 'light'
  currentTheme.value = savedTheme
  document.documentElement.setAttribute('data-bs-theme', savedTheme)
  feather.replace()
})

watch(currentTheme, () => {
  feather.replace() // Re-render feather icon when theme changes
})

</script>

<style scoped>
.avatar-28 img {
  width: 28px !important;
  height: 28px !important;
  object-fit: cover;
  border-radius: 50%;
  display: block;
}
</style>
