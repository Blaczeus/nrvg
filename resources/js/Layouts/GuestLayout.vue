<template>
    <div
        class="main-bg main-bg-opac sharpcornerui adminuiux-header-standard adminuiux-sidebar-iconic theme-blue adminuiux-header-transparent adminuiux-sidebar-fill-white bg-gradient-1 scrollup">
        <!-- Header -->
        <Header @toggleSidebar="toggleSidebar" guest/>

        <slot>
            <!-- Page content will be injected here -->
        </slot>

        <!-- Footer -->
        <Footer />
    </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue'
import Header from './dashboard/Header.vue'
import Footer from './dashboard/Footer.vue'


onMounted(() => {
    // Initialize Feather icons
    if (window.feather) window.feather.replace()
})

</script>

<style>
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
