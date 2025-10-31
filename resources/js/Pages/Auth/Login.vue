<script setup>
import { ref } from 'vue';
import { Head, Link, useForm } from '@inertiajs/vue3';
import Footer from '@/layouts/dashboard/Footer.vue';
import InputError from '@/Components/InputError.vue';

defineProps({
    canResetPassword: {
        type: Boolean,
    },
    status: {
        type: String,
    },
});

const form = useForm({
    email: '', // now serves as "email or phone"
    password: '',
    remember: false,
});

const showPassword = ref(false);
const togglePassword = () => (showPassword.value = !showPassword.value);

const submit = () => {
    form.post(route('login'), {
        onFinish: () => form.reset('password'),
    });
};
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
                    <div class="row justify-content-center minheight-dynamic" style="--mih-dynamic: calc(100vh - 120px)">
                        <div class="col-12 col-md-8 col-xl-6">
                            <div class="h-100 py-4 px-md-3">
                                <div class="row h-100 align-items-center justify-content-center mt-md-3">
                                    <div class="col-12 col-sm-8 col-md-11 col-xl-11 col-xxl-10 login-box">
                                        <div class="text-center mb-4">
                                            <h1 class="mb-2">Welcome Back 👋</h1>
                                            <p class="text-secondary">Login to continue</p>
                                        </div>
    
                                        <div v-if="status" class="alert alert-success text-sm mb-4">
                                            {{ status }}
                                        </div>
    
                                        <!-- Login Form -->
                                        <form @submit.prevent="submit">
                                            <div class="form-floating mb-3">
                                                <input type="text" v-model="form.email" class="form-control" id="loginInput"
                                                    placeholder="Enter your email or phone" autofocus
                                                    autocomplete="username" required />
                                                <label for="loginInput">Email Address or Phone Number</label>
                                                <InputError :message="form.errors.email" class="mt-1" />
                                            </div>
    
                                            <div class="position-relative">
                                                <div class="form-floating mb-3">
                                                    <input :type="showPassword ? 'text' : 'password'"
                                                        v-model="form.password" class="form-control" id="password"
                                                        placeholder="Enter your password" required
                                                        autocomplete="current-password" />
                                                    <label for="password">Password</label>
                                                    <InputError :message="form.errors.password" class="mt-1" />
                                                </div>
                                                <button type="button"
                                                    class="btn btn-square btn-link text-theme-1 position-absolute end-0 top-0 mt-2 me-2"
                                                    @click="togglePassword">
                                                    <i :class="showPassword ? 'bi bi-eye-slash' : 'bi bi-eye'"></i>
                                                </button>
                                            </div>
    
                                            <div class="d-flex justify-content-between align-items-center mb-4">
                                                <div class="form-check">
                                                    <input class="form-check-input" type="checkbox" id="remember"
                                                        v-model="form.remember" />
                                                    <label class="form-check-label text-secondary" for="remember">
                                                        Remember me
                                                    </label>
                                                </div>
    
                                                <Link v-if="canResetPassword" :href="route('password.request')"
                                                    class="text-theme-1 small">
                                                Forgot Password?
                                                </Link>
                                            </div>
    
                                            <button type="submit" class="btn btn-lg btn-theme w-100 mb-4 rounded-[8px] py-2"
                                                :disabled="form.processing">
                                                Log in
                                            </button>
                                        </form>
    
                                        <div class="text-center mb-3">
                                            Don’t have an account?
                                            <Link :href="route('register')">Sign up</Link> here.
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
                                                    <img src="/dashboard-assets/img/g-logo.png" alt="Google" class="me-1"
                                                        style="height:24px" />
                                                </button>
                                            </div>
                                            <div class="col-auto">
                                                <button class="btn btn-link p-2">
                                                    <img src="/dashboard-assets/img/f-logo.png" alt="Facebook" class="me-1"
                                                        style="height:24px" />
                                                </button>
                                            </div>
                                            <div class="col-auto">
                                                <button class="btn btn-link p-2">
                                                    <img src="/dashboard-assets/img/github-logo.png" alt="GitHub"
                                                        class="me-1" style="height:24px" />
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
