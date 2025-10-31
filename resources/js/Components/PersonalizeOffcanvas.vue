<template>
  <div class="offcanvas offcanvas-end shadow border-0" tabindex="-1" id="theming" data-bs-scroll="true"
    data-bs-backdrop="false" aria-labelledby="theminglabel">
    <div class="offcanvas-header border-bottom">
      <div>
        <h5 class="offcanvas-title" id="theminglabel">Personalize</h5>
        <p class="text-secondary small">Make it more like your own</p>
      </div>
      <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>

    <div class="offcanvas-body">
      <!-- COLORS -->
      <h6 class="offcanvas-title">Colors</h6>
      <p class="text-secondary small mb-4">Change colors of templates</p>
      <div class="row mb-4 theme-select">
        <div v-for="color in colors" :key="color.class" class="col-auto">
          <div class="select-box text-center mb-2 cursor-pointer" @click="applyTheme(color.class)" :title="color.name">
            <span class="avatar avatar-40 rounded-circle mb-2" :class="color.bg"></span>
          </div>
        </div>
      </div>

      <!-- BACKGROUNDS -->
      <h6 class="offcanvas-title">Backgrounds</h6>
      <p class="text-secondary small mb-4">Change color for background</p>
      <div class="row mb-4 theme-background">
        <div v-for="bg in backgrounds" :key="bg.class" class="col-auto">
          <div class="gradient-box text-center mb-2 cursor-pointer" @click="applyBackground(bg.class)" :title="bg.name">
            <span class="avatar avatar-40 rounded-circle mb-2" :class="bg.bg"></span>
          </div>
        </div>
      </div>

      <!-- SIDEBAR LAYOUT -->
      <h6 class="offcanvas-title">Sidebar Layout</h6>
      <p class="text-secondary small mb-4">Change sidebar layout style</p>
      <div class="row mb-4 sidebar-layout">
        <div v-for="layout in sidebarLayouts" :key="layout.class" class="col-auto">
          <div class="select-box text-center mb-2 cursor-pointer" @click="applySidebarLayout(layout.class)"
            :title="layout.name">
            <span class="avatar avatar-40 rounded-circle mb-2 bg-default">
              <i :class="layout.icon"></i>
            </span>
          </div>
        </div>
      </div>

      <div class="text-center mb-4">
        <a href="#" class="btn btn-sm btn-outline-theme">
          More options <i class="bi bi-arrow-right-short"></i>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

// --- Theme, background, and sidebar data ---
const colors = ref([
  { name: 'Default', class: '', bg: 'bg-default' },
  { name: 'Blue', class: 'theme-blue', bg: 'bg-blue' },
  { name: 'Indigo', class: 'theme-indigo', bg: 'bg-indigo' },
  { name: 'Purple', class: 'theme-purple', bg: 'bg-purple' },
  { name: 'Pink', class: 'theme-pink', bg: 'bg-pink' },
  { name: 'Red', class: 'theme-red', bg: 'bg-red' },
  { name: 'Orange', class: 'theme-orange', bg: 'bg-orange' },
  { name: 'Yellow', class: 'theme-yellow', bg: 'bg-yellow' },
  { name: 'Green', class: 'theme-green', bg: 'bg-green' },
  { name: 'Teal', class: 'theme-teal', bg: 'bg-teal' },
  { name: 'Cyan', class: 'theme-cyan', bg: 'bg-cyan' },
  { name: 'Grey', class: 'theme-grey', bg: 'bg-grey' },
  { name: 'Brown', class: 'theme-brown', bg: 'bg-brown' },
  { name: 'Chocolate', class: 'theme-chocolate', bg: 'bg-chocolate' },
  { name: 'Black', class: 'theme-black', bg: 'bg-dark' },
])

const backgrounds = ref([
  { name: 'Default', class: 'bg-default', bg: 'bg-default' },
  { name: 'White', class: 'bg-white', bg: 'bg-white' },
  { name: 'Gradient 1', class: 'bg-gradient-1', bg: 'bg-gradient-1' },
  { name: 'Gradient 2', class: 'bg-gradient-2', bg: 'bg-gradient-2' },
  { name: 'Gradient 3', class: 'bg-gradient-3', bg: 'bg-gradient-3' },
  { name: 'Gradient 4', class: 'bg-gradient-4', bg: 'bg-gradient-4' },
  { name: 'Gradient 5', class: 'bg-gradient-5', bg: 'bg-gradient-5' },
  { name: 'Gradient 6', class: 'bg-gradient-6', bg: 'bg-gradient-6' },
])

const sidebarLayouts = ref([
  { name: 'Standard', class: 'adminuiux-sidebar-standard', icon: 'bi bi-arrow-clockwise' },
  { name: 'Iconic', class: 'adminuiux-sidebar-iconic', icon: 'bi bi-bezier h4' },
  { name: 'Boxed', class: 'adminuiux-sidebar-boxed', icon: 'bi bi-box h5' },
  { name: 'Iconic+Boxed', class: 'adminuiux-sidebar-boxed adminuiux-sidebar-iconic', icon: 'bi bi-bounding-box h5' },
])

// --- Apply personalization changes ---
const applyTheme = (themeClass) => {
  document.body.classList.remove(...Array.from(document.body.classList).filter(c => c.startsWith('theme-')))
  if (themeClass) document.body.classList.add(themeClass)
  localStorage.setItem('theme-color', themeClass)
}

const applyBackground = (bgClass) => {
  document.body.classList.remove(...Array.from(document.body.classList).filter(c => c.startsWith('bg-')))
  document.body.classList.add(bgClass)
  localStorage.setItem('theme-background', bgClass)
}

const applySidebarLayout = (layoutClass) => {
  document.body.classList.remove(
    'adminuiux-sidebar-standard',
    'adminuiux-sidebar-iconic',
    'adminuiux-sidebar-boxed'
  )
  document.body.classList.add(...layoutClass.split(' '))
  localStorage.setItem('sidebar-layout', layoutClass)
}

// --- Load saved preferences on mount ---
onMounted(() => {
  const savedTheme = localStorage.getItem('theme-color')
  const savedBg = localStorage.getItem('theme-background')
  const savedSidebar = localStorage.getItem('sidebar-layout')

  if (savedTheme) document.body.classList.add(savedTheme)
  if (savedBg) document.body.classList.add(savedBg)
  if (savedSidebar) document.body.classList.add(...savedSidebar.split(' '))
})
</script>

<style scoped>
.cursor-pointer {
  cursor: pointer;
}
</style>
