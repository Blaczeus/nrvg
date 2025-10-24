<template>
  <div class="offcanvas offcanvas-end shadow border-0" tabindex="-1" id="theming" data-bs-scroll="true"
    data-bs-backdrop="false" aria-labelledby="theminglabel">
    <!-- all your offcanvas content -->
  </div>
</template>

<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  // Enable Bootstrap tooltips (since you use data-bs-toggle="tooltip")
  const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
  const tooltipList = [...tooltipTriggerList].map(el => new bootstrap.Tooltip(el))
})
</script>
