<script setup>
import { ref, nextTick } from 'vue'
import { useForm } from '@inertiajs/vue3'
import InputError from '@/Components/InputError.vue'

const emit = defineEmits(['confirmed'])
const showModal = ref(false)
const passwordInput = ref(null)

const form = useForm({
    password: ''
})

const open = async () => {
    showModal.value = true
    await nextTick()
    passwordInput.value?.focus()
}

const close = () => {
    showModal.value = false
    form.reset()
}

const submit = () => {
    form.post(route('password.confirm'), {
        preserveScroll: true,
        onSuccess: () => {
            emit('confirmed')
            close()
        },
    })
}

defineExpose({ open, close })
</script>

<template>
    <div v-if="showModal" class="modal-overlay">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content p-3 border-0 rounded-3 shadow">
                <div class="modal-header border-0 pb-0 gap-3">
                    <h5 class="modal-title fw-bold">Confirm Password</h5>
                    <button type="button" class="btn-close" @click="close"></button>
                </div>

                <div class="modal-body">
                    <p class="text-secondary mb-3">
                        Please confirm your password before continuing this action.
                    </p>

                    <form @submit.prevent="submit">
                        <div class="form-floating mb-3">
                            <input ref="passwordInput" v-model="form.password" type="password" id="password"
                                class="form-control" placeholder="Enter your password" required />
                            <label for="password">Password</label>
                            <InputError :message="form.errors.password" class="mt-1" />
                        </div>

                        <div class="text-end">
                            <button type="submit" class="btn btn-theme px-4 py-2 rounded-2" :disabled="form.processing">
                                Confirm
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.modal-overlay {
    position: fixed;
    inset: 0;
    z-index: 1055;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(0, 0, 0, 0.35);
}

.modal-dialog {
    background: white;
    border-radius: 12px;
    max-width: 480px;
    width: 100%;
    margin: auto;
    z-index: 1060;
}

.form-control {
    height: 42px !important;
    padding: 0.5rem 0.75rem !important;
    border-radius: 8px !important;
    font-size: 0.95rem;
}
</style>
