<template>
  <div>
    <nav class="navbar is-link">
      <div class="navbar-brand">
        <router-link to="/" class="navbar-item">
          App
        </router-link>
        <div class="navbar-burger burger" data-target="navbarExampleTransparentExample">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <div id="navbarExampleTransparentExample" class="navbar-menu">
        <div class="navbar-start">
          <router-link to="/" class="navbar-item">
            Home
          </router-link>
          <router-link to="/about" class="navbar-item">
            About
          </router-link>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
  export default {
    name: 'TheNavBar'
  };
</script>

<style>
</style>