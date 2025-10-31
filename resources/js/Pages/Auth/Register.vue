<script setup>
import { ref } from 'vue';
import { Head, Link, useForm } from '@inertiajs/vue3';
import InputError from '@/Components/InputError.vue';
import Footer from '@/layouts/dashboard/Footer.vue';

const form = useForm({
    name: '',
    email: '',
    phone: '',
    password: '',
    password_confirmation: '',
});

// Refs for password visibility toggle
const showPassword = ref(false);
const showConfirmPassword = ref(false);

// Combine first and last name into form.name before submit
const firstName = ref('');
const lastName = ref('');

const submit = () => {
    form.name = `${firstName.value} ${lastName.value}`.trim();
    form.post(route('register'), {
        onFinish: () => form.reset('password', 'password_confirmation'),
    });
};

// Toggle password visibility
const togglePassword = () => showPassword.value = !showPassword.value;
const toggleConfirmPassword = () => showConfirmPassword.value = !showConfirmPassword.value;
</script>

<template>
    <div
        class="main-bg main-bg-opac sharpcornerui adminuiux-header-standard adminuiux-sidebar-iconic theme-blue adminuiux-header-transparent adminuiux-sidebar-fill-white bg-gradient-1 scrollup">
        <header class="adminuiux-header">
            <nav class="navbar">
                <div class="container-fluid">
                    <a class="navbar-brand" :href="route('dashboard')">
                        <img data-bs-img="light" src="/dashboard-assets/img/logo-light.svg" alt="" />
                        <img data-bs-img="dark" src="/dashboard-assets/img/logo.svg" alt="" />
                        <div class="">
                            <span class="h4">Learning<span class="fw-bold">UI</span><span>UX</span></span>
                            <p class="company-tagline">AdminUIUX HTML template</p>
                        </div>
                    </a>
                    <div class="ms-auto"></div>
                    <div class="ms-auto"></div>
                </div>
            </nav>
        </header>
        <main class="flex-shrink-0 pt-10 z-index-1">
            <div class="container-fluid">
                <div class="auth-wrapper">
                    <div class="row justify-content-center minheight-dynamic" style="--mih-dynamic: calc(100vh - 120px)">
                        <div class="col-12 col-md-8 col-xl-6">
                            <div class="h-100 py-4 px-md-3">
                                <div class="row h-100 align-items-center justify-content-center mt-md-3">
                                    <div class="col-12 col-sm-8 col-md-11 col-xl-11 col-xxl-10 login-box">
                                        <div class="text-center mb-4">
                                            <h1 class="mb-2">Let's get started&#128077;</h1>
                                            <p class="text-secondary">Provide your few details</p>
                                        </div>
    
                                        <!-- Registration Form -->
                                        <form @submit.prevent="submit">
                                            <div class="row">
                                                <div class="col">
                                                    <div class="form-floating mb-3">
                                                        <input v-model="firstName" class="form-control" id="namef"
                                                            placeholder="Enter first name" autofocus />
                                                        <label for="namef">First Name</label>
                                                        <InputError :message="form.errors.name" class="mt-1" />
                                                    </div>
                                                </div>
                                                <div class="col">
                                                    <div class="form-floating mb-3">
                                                        <input v-model="lastName" class="form-control" id="namel"
                                                            placeholder="Enter last name" />
                                                        <label for="namel">Last Name</label>
                                                    </div>
                                                </div>
                                            </div>
    
                                            <div class="form-floating mb-3">
                                                <input type="email" v-model="form.email" class="form-control" id="emailadd"
                                                    placeholder="Enter email address" />
                                                <label for="emailadd">Email Address</label>
                                                <InputError :message="form.errors.email" class="mt-1" />
                                            </div>
    
                                            <div class="form-floating mb-3">
                                                <input type="text" v-model="form.phone" class="form-control" id="phonen"
                                                    placeholder="Enter your phone number" />
                                                <label for="phonen">Phone Number</label>
                                                <InputError :message="form.errors.phone" class="mt-1" />
                                            </div>
    
                                            <div class="position-relative">
                                                <div class="form-floating mb-3">
                                                    <input :type="showPassword ? 'text' : 'password'"
                                                        v-model="form.password" class="form-control" id="checkstrength"
                                                        placeholder="Enter your password" />
                                                    <label for="checkstrength">Password</label>
                                                    <InputError :message="form.errors.password" class="mt-1" />
                                                </div>
                                                <button type="button"
                                                    class="btn btn-square btn-link text-theme-1 position-absolute end-0 top-0 mt-2 me-2"
                                                    @click="togglePassword">
                                                    <i :class="showPassword ? 'bi bi-eye-slash' : 'bi bi-eye'"></i>
                                                </button>
                                            </div>
    
                                            <div class="position-relative">
                                                <div class="form-floating mb-3">
                                                    <input :type="showConfirmPassword ? 'text' : 'password'"
                                                        v-model="form.password_confirmation" class="form-control"
                                                        id="passwd" placeholder="Confirm your password" />
                                                    <label for="passwd">Confirm Password</label>
                                                    <InputError :message="form.errors.password_confirmation" class="mt-1" />
                                                </div>
                                                <button type="button"
                                                    class="btn btn-square btn-link text-theme-1 position-absolute end-0 top-0 mt-2 me-2"
                                                    @click="toggleConfirmPassword">
                                                    <i :class="showConfirmPassword ? 'bi bi-eye-slash' : 'bi bi-eye'"></i>
                                                </button>
                                            </div>
    
                                            <button type="submit"
                                                class="btn btn-lg btn-theme w-100 mb-4 rounded-[8px] py-2">
                                                Sign up
                                            </button>
                                        </form>
    
                                        <div class="text-center mb-3">
                                            Already have account?
                                            <Link :href="route('login')">Login</Link> here.
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
