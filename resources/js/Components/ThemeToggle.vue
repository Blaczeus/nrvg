<template>
  <button class="btn btn-link btn-square btn-link-header btnsunmoon" :aria-pressed="theme === 'dark'"
    :title="theme === 'light' ? 'Switch to dark' : 'Switch to light'" @click="toggleTheme" type="button">
    <span class="icon-wrap" v-html="iconSvg"></span>
  </button>
</template>

<script setup>
import { ref, computed, onMounted} from 'vue'
import feather from 'feather-icons'

const theme = ref('light')

onMounted(() => {
  const saved = localStorage.getItem('theme')
  theme.value = saved || (document.documentElement.getAttribute('data-bs-theme') || 'light')
  document.documentElement.setAttribute('data-bs-theme', theme.value)

  // Restore active class if dark mode was previously saved
  const btn = document.querySelector('.btnsunmoon')
  if (btn && theme.value === 'dark') {
    btn.classList.add('active')
  }
})

const toggleTheme = async (event) => {
  theme.value = theme.value === 'light' ? 'dark' : 'light'
  document.documentElement.setAttribute('data-bs-theme', theme.value)
  localStorage.setItem('theme', theme.value)

  // Apply or remove the "active" class on the button
  const btn = event?.currentTarget
  if (btn) {
    if (theme.value === 'dark') {
      btn.classList.add('active')
    } else {
      btn.classList.remove('active')
    }
  }
}

// check for the right feather icon to show (inverted)
const iconName = computed(() => (theme.value === 'light' ? 'moon' : 'sun'))

// create SVG markup for the current icon using feather.icons.toSvg
const iconSvg = computed(() => {
  try {
    return feather.icons[iconName.value].toSvg({
      width: 20,
      height: 20,
      class: `feather feather-${iconName.value}`
    })
  } catch (err) {
    return iconName.value === 'moon'
      ? `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>`
      : `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor"><circle cx="12" cy="12" r="5"></circle></svg>`
  }
})

</script>
