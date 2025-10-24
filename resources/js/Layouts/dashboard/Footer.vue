<template>
  <footer class="adminuiux-footer has-adminuiux-sidebar mt-auto">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12 col-md col-lg py-2">
          <span class="small">
            Copyright
            @{{ new Date().getFullYear() }}, Creatively designed by
            <a href="https://nervego.com/" target="_blank">{{ appName }}</a>
            on Earth ❤️
          </span>
        </div>
        <div class="col-12 col-md-auto col-lg-auto align-self-center">
          <ul class="nav small">
            <li class="nav-item">
              <a class="nav-link" href="learning-help-center.html">Help</a>
            </li>
            <li class="nav-item">|</li>
            <li class="nav-item">
              <a class="nav-link" href="learning-terms-of-use.html">Terms of Use</a>
            </li>
            <li class="nav-item">|</li>
            <li class="nav-item">
              <a class="nav-link" href="learning-privacy-policy.html">Privacy Policy</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
const appName = import.meta.env.VITE_APP_NAME || 'Nrvg Laravel'

</script>
