<template>
  <div class="shadow-sm adminuiux-sidebar py-16">
    <div class="adminuiux-sidebar-inner">
      <!-- Navigation Menu -->
      <ul class="nav flex-column menu-active-line">
        <li class="nav-item">
          <a :href="route('dashboard')" class="nav-link" :class="{ active: isActiveRoute('dashboard').value }"
            @click="setActiveRoute('dashboard')">
            <i class="menu-icon bi bi-columns-gap"></i>
            <span class="menu-name">Dashboard</span>
          </a>
        </li>

        <!-- Students Dropdown -->
        <li class="nav-item dropdown" :class="{ show: isDropdownActive('students').value }">
          <a href="javascript:void(0)" class="nav-link dropdown-toggle" data-bs-toggle="dropdown"
            :class="{ active: isDropdownActive('students').value }">
            <i class="menu-icon bi bi-mortarboard"></i>
            <span class="menu-name">Students</span>
          </a>
          <div class="dropdown-menu" :class="{ show: isDropdownActive('students').value }">
            <div class="nav-item">
              <a href="#" class="nav-link" :class="{ active: isActiveRoute('students.academic').value }"
                @click="setActiveRoute('students.academic')">
                <i class="menu-icon bi bi-house-gear"></i>
                <span class="menu-name">Academic</span>
              </a>
            </div>
            <div class="nav-item">
              <a href="#" class="nav-link" :class="{ active: isActiveRoute('students.attendance').value }"
                @click="setActiveRoute('students.attendance')">
                <i class="menu-icon bi bi-clipboard-check"></i>
                <span class="menu-name">Attendance</span>
              </a>
            </div>
            <div class="nav-item">
              <a href="#" class="nav-link" :class="{ active: isActiveRoute('students.all').value }"
                @click="setActiveRoute('students.all')">
                <i class="menu-icon bi bi-people"></i>
                <span class="menu-name">All Students</span>
              </a>
            </div>
            <div class="nav-item">
              <a href="#" class="nav-link" :class="{ active: isActiveRoute('students.profile').value }"
                @click="setActiveRoute('students.profile')">
                <i class="menu-icon bi bi-people"></i>
                <span class="menu-name">
                  Profile <i class="bi bi-star-fill text-warning fs-14"></i>
                </span>
              </a>
            </div>
          </div>
        </li>

        <!-- Courses Dropdown -->
        <li class="nav-item dropdown" :class="{ show: isDropdownActive('courses').value }">
          <a href="javascript:void(0)" class="nav-link dropdown-toggle" data-bs-toggle="dropdown"
            :class="{ active: isDropdownActive('courses').value }">
            <i class="menu-icon bi bi-journals"></i>
            <span class="menu-name">Courses</span>
          </a>
          <div class="dropdown-menu" :class="{ show: isDropdownActive('courses').value }">
            <div class="nav-item">
              <a href="#" class="nav-link" :class="{ active: isActiveRoute('courses.inschool').value }"
                @click="setActiveRoute('courses.inschool')">
                <i class="menu-icon bi bi-book"></i>
                <span class="menu-name">In-School</span>
              </a>
            </div>
            <div class="nav-item">
              <a href="#" class="nav-link" :class="{ active: isActiveRoute('courses.ecourses').value }"
                @click="setActiveRoute('courses.ecourses')">
                <i class="menu-icon bi bi-play-btn"></i>
                <span class="menu-name">e-Courses</span>
              </a>
            </div>
            <div class="nav-item">
              <a href="#" class="nav-link" :class="{ active: isActiveRoute('courses.parttime').value }"
                @click="setActiveRoute('courses.parttime')">
                <i class="menu-icon bi bi-clock-history"></i>
                <span class="menu-name">Part-Time</span>
              </a>
            </div>
          </div>
        </li>

        <!-- Other static links -->
        <li class="nav-item">
          <a href="#" class="nav-link" :class="{ active: isActiveRoute('calendar').value }"
            @click="setActiveRoute('calendar')">
            <i class="menu-icon bi bi-calendar2-range"></i>
            <span class="menu-name">Calendar</span>
          </a>
        </li>
        <li class="nav-item">
          <a href="#" class="nav-link" :class="{ active: isActiveRoute('fees').value }" @click="setActiveRoute('fees')">
            <i class="menu-icon bi bi-receipt-cutoff"></i>
            <span class="menu-name">Fees</span>
          </a>
        </li>
        <li class="nav-item">
          <a href="#" class="nav-link" :class="{ active: isActiveRoute('teachers').value }"
            @click="setActiveRoute('teachers')">
            <i class="menu-icon bi bi-people"></i>
            <span class="menu-name">Teachers</span>
          </a>
        </li>
        <li class="nav-item">
          <a href="#" class="nav-link" :class="{ active: isActiveRoute('settings').value }"
            @click="setActiveRoute('settings')">
            <i class="menu-icon" data-feather="settings"></i>
            <span class="menu-name">Settings</span>
          </a>
        </li>
        <li class="nav-item">
          <a href="#" class="nav-link" :class="{ active: isActiveRoute('about').value }"
            @click="setActiveRoute('about')">
            <i class="menu-icon bi bi-building"></i>
            <span class="menu-name">About School</span>
          </a>
        </li>
        <li class="nav-item">
          <a href="#" class="nav-link" :class="{ active: isActiveRoute('pages').value }"
            @click="setActiveRoute('pages')">
            <i class="menu-icon bi bi-layers"></i>
            <span class="menu-name">Pages</span>
            <span class="badge text-bg-primary mx-2">50+</span>
          </a>
        </li>
        <li class="nav-item">
          <a href="#" class="nav-link" :class="{ active: isActiveRoute('personalize').value }"
            @click="setActiveRoute('personalize')">
            <i class="menu-icon bi bi-palette h4"></i>
            <span class="menu-name">Personalize ❤️</span>
          </a>
        </li>
        <li class="nav-item">
          <a href="#" class="nav-link" :class="{ active: isActiveRoute('components').value }"
            @click="setActiveRoute('components')">
            <i class="menu-icon bi bi-cpu"></i>
            <span class="menu-name">Components</span>
          </a>
        </li>
      </ul>

      <div class="mt-auto"></div>

      <!-- Quick Chat Section -->
      <ul class="nav flex-column menu-active-line mb-2">
        <li class="nav-item">
          <a href="#" class="nav-link d-flex align-items-center">
            <div class="col-auto">
              <div class="avatar avatar-30 coverimg rounded d-block align-top"
                :style="{ backgroundImage: `url('/dashboard-assets/img/modern-ai-image/user-5.jpg')` }">
                <img src="/dashboard-assets/img/modern-ai-image/user-5.jpg" alt="User" style="display: none" />
              </div>
            </div>
            <div class="col px-2 menu-name text-start not-iconic">
              <p class="mb-0 fs-14 lh-20">
                Alice Johanson<br /><small class="opacity-50">Teacher</small>
              </p>
            </div>
            <div class="col-auto not-iconic">
              <i class="bi bi-chat-dots"></i>
            </div>
          </a>
        </li>
      </ul>

      <!-- Bottom Icons -->
      <div class="px-3 not-iconic">
        <div class="card border-0">
          <div class="card-body p-2">
            <div class="row gx-2">
              <div class="col-12 d-flex justify-content-between">
                <a href="#" class="btn btn-square btn-link position-relative">
                  <i data-feather="heart"></i>
                  <span class="position-absolute top-0 start-100 translate-middle p-1 bg-success rounded-circle"></span>
                </a>
                <a href="#" class="btn btn-square btn-link position-relative">
                  <i data-feather="calendar"></i>
                  <span class="position-absolute top-0 start-100 translate-middle p-1 bg-warning rounded-circle"></span>
                </a>
                <a href="#" class="btn btn-square btn-link"><i data-feather="inbox"></i></a>
                <a href="#" class="btn btn-square btn-link"><i data-feather="help-circle"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, watch, ref, onMounted } from 'vue'
import { usePage } from '@inertiajs/vue3'
import feather from 'feather-icons'

const page = usePage()
const currentRoute = ref(page.value?.props?.route?.name || localStorage.getItem('activeRoute') || '')

// Persist active route on click
const setActiveRoute = (routeName) => {
  currentRoute.value = routeName
  localStorage.setItem('activeRoute', routeName)
}

// Watch for Inertia route changes
watch(
  () => page.value?.props?.route?.name,
  (newRoute) => {
    if (newRoute) {
      currentRoute.value = newRoute
      localStorage.setItem('activeRoute', newRoute)
    }
  },
  { immediate: true }
)

// Determine if a route is active
const isActiveRoute = (routeName) =>
  computed(() => currentRoute.value === routeName)

// Expand dropdown if any child route is active
const isDropdownActive = (section) =>
  computed(() => currentRoute.value.startsWith(`${section}.`))

// Initialize icons on mount
onMounted(() => {
  feather.replace()

  // Restore saved active route
  const saved = localStorage.getItem('activeRoute')
  if (saved) currentRoute.value = saved
})
</script>
