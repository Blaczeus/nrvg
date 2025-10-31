<script setup>
import { ref } from 'vue'
import DashboardLayout from '@/layouts/dashboard/DashboardLayout.vue'
import ConfirmPasswordModal from './Auth/ConfirmPassword.vue'

const confirmModal = ref(null)

const attemptSensitiveAction = () => {
    confirmModal.value.open()
}

const handleConfirmed = () => {
    console.log('✅ Password confirmed! Proceed with the sensitive action here.')
    // e.g., deleteAccount() or make API request
}
</script>

<template>
    <DashboardLayout>
        <div class="container py-4">
            <h2 class="mb-4">Account Settings</h2>
            <button class="btn btn-danger" @click="attemptSensitiveAction">
                Delete Account
            </button>
        </div>

        <ConfirmPasswordModal ref="confirmModal" @confirmed="handleConfirmed" />
    </DashboardLayout>
</template>
