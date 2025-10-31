<script setup>
import { computed } from 'vue'
import { Head, Link, useForm } from '@inertiajs/vue3'
import Footer from '@/layouts/dashboard/Footer.vue'
import InputError from '@/Components/InputError.vue'

const props = defineProps({
    status: {
        type: String,
    },
})

const form = useForm({})

const submit = () => {
    form.post(route('verification.send'))
}

const verificationLinkSent = computed(() => props.status === 'verification-link-sent')
</script>

<template>

    <div
        class="main-bg main-bg-opac sharpcornerui adminuiux-header-standard adminuiux-sidebar-iconic theme-blue adminuiux-header-transparent adminuiux-sidebar-fill-white bg-gradient-1 scrollup">
        <header class="adminuiux-header">
            <nav class="navbar">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">
                        <img data-bs-img="light" src="/dashboard-assets/img/logo-light.svg" alt="" />
                        <img data-bs-img="dark" src="/dashboard-assets/img/logo.svg" alt="" />
                        <div>
                            <span class="h4">Learning<span class="fw-bold">UI</span><span>UX</span></span>
                            <p class="company-tagline">AdminUIUX HTML template</p>
                        </div>
                    </a>
                    <div class="ms-auto"></div>
                </div>
            </nav>
        </header>
        <main class="flex-shrink-0 pb-10">
            <div class="container-fluid">
                <div class="auth-wrapper">
                    <div class="row justify-content-center minheight-dynamic"
                        style="--mih-dynamic: calc(100vh - 120px)">
                        <div class="col-12 col-md-8 col-xl-6">
                            <div class="card shadow-sm border-0 rounded-3 p-4 p-md-5 text-center">
                                <h2 class="mb-3 fw-semibold">Verify Your Email</h2>
                                <p class="text-secondary mb-4">
                                    Thanks for signing up! Before getting started, please verify your email address by
                                    clicking
                                    the link we just sent to your inbox. If you didn’t receive the email, click below to
                                    request
                                    another.
                                </p>

                                <!-- Success message -->
                                <div v-if="verificationLinkSent" class="alert alert-success text-sm mb-4">
                                    A new verification link has been sent to your registered email address.
                                </div>

                                <!-- Resend Verification Form -->
                                <form @submit.prevent="submit" class="mb-3">
                                    <button type="submit" class="btn btn-theme btn-lg w-100 rounded-[8px] py-2"
                                        :disabled="form.processing">
                                        Resend Verification Email
                                    </button>
                                </form>

                                <!-- Logout Button -->
                                <Link :href="route('logout')" method="post" as="button"
                                    class="btn btn-link text-danger fw-medium text-decoration-none">
                                Log Out
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
        <Footer />
    </div>
</template>

<style scoped>
.form-control {
    height: 42px !important;
    padding: 0.5rem 0.75rem !important;
    border-radius: 8px !important;
    font-size: 0.95rem;
}

.form-floating>label {
    transform: translateY(-0.6rem) scale(0.9);
    transition: all 0.2s ease;
}

.form-floating>.form-control:focus~label,
.form-floating>.form-control:not(:placeholder-shown)~label {
    opacity: 0.75;
    transform: translateY(-0.8rem) scale(0.85);
}

.card {
    background: var(--bs-body-bg);
}

.alert {
    border-radius: 8px;
    font-size: 0.9rem;
}

.btn-theme {
    background-color: var(--bs-primary);
    color: #fff;
    border: none;
}

.btn-theme:hover {
    opacity: 0.9;
}

.text-secondary {
    color: #6c757d !important;
}
</style>
