<script setup>
import { Head, useForm } from '@inertiajs/vue3'
import Footer from '@/layouts/dashboard/Footer.vue'
import InputError from '@/Components/InputError.vue'

const props = defineProps({
    email: {
        type: String,
        required: true,
    },
    token: {
        type: String,
        required: true,
    },
})

const form = useForm({
    token: props.token,
    email: props.email || '',
    password: '',
    password_confirmation: '',
})

const submit = () => {
    form.post(route('password.store'), {
        onFinish: () => form.reset('password', 'password_confirmation'),
    })
}
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

        <main class="flex-shrink-0 pt-10">
            <div class="container-fluid">
                <div class="auth-wrapper">
                    <div class="row justify-content-center minheight-dynamic"
                        style="--mih-dynamic: calc(100vh - 120px)">
                        <div class="col-12 col-md-8 col-xl-6">
                            <div class="h-100 py-4 px-md-3">
                                <div class="row h-100 align-items-center justify-content-center mt-md-3">
                                    <div class="col-12 col-sm-8 col-md-11 col-xl-11 col-xxl-10 login-box">
                                        <div class="text-center mb-4">
                                            <h1 class="mb-2">Reset Password</h1>
                                            <p class="text-secondary">
                                                Enter your email and new password below to reset your account access.
                                            </p>
                                        </div>

                                        <!-- Reset Password Form -->
                                        <form @submit.prevent="submit">
                                            <div class="form-floating mb-3">
                                                <input v-model="form.email" type="email" class="form-control" id="email"
                                                    placeholder="Enter your email" required autofocus />
                                                <label for="email">Email Address</label>
                                                <InputError :message="form.errors.email" class="mt-1" />
                                            </div>

                                            <div class="form-floating mb-3">
                                                <input v-model="form.password" type="password" class="form-control"
                                                    id="password" placeholder="Enter new password" required />
                                                <label for="password">New Password</label>
                                                <InputError :message="form.errors.password" class="mt-1" />
                                            </div>

                                            <div class="form-floating mb-3">
                                                <input v-model="form.password_confirmation" type="password"
                                                    class="form-control" id="password_confirmation"
                                                    placeholder="Confirm new password" required />
                                                <label for="password_confirmation">Confirm Password</label>
                                                <InputError :message="form.errors.password_confirmation" class="mt-1" />
                                            </div>

                                            <button type="submit"
                                                class="btn btn-lg btn-theme w-100 mb-4 rounded-[8px] py-2"
                                                :disabled="form.processing">
                                                Reset Password
                                            </button>
                                        </form>

                                        <div class="text-center mb-3">
                                            <a :href="route('login')">Back to Login</a>
                                        </div>

                                        <div class="row align-items-center mb-4">
                                            <div class="col">
                                                <hr />
                                            </div>
                                            <div class="col-auto">
                                                <p class="text-secondary">or Continue with</p>
                                            </div>
                                            <div class="col">
                                                <hr />
                                            </div>
                                        </div>

                                        <div class="row gx-2 justify-content-center align-items-center">
                                            <div class="col-auto">
                                                <button class="btn btn-link p-2">
                                                    <img src="/dashboard-assets/img/g-logo.png" alt="Google"
                                                        class="me-1" style="height: 24px" />
                                                </button>
                                            </div>
                                            <div class="col-auto">
                                                <button class="btn btn-link p-2">
                                                    <img src="/dashboard-assets/img/f-logo.png" alt="Facebook"
                                                        class="me-1" style="height: 24px" />
                                                </button>
                                            </div>
                                            <div class="col-auto">
                                                <button class="btn btn-link p-2">
                                                    <img src="/dashboard-assets/img/github-logo.png" alt="GitHub"
                                                        class="me-1" style="height: 24px" />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
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
</style>
