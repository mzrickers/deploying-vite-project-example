<template>
  <div class="content">
    <router-link to="/deploying-vite-project-example/"> Home </router-link>
    <router-link to="/deploying-vite-project-example/about"> Guide </router-link>
    <router-view v-slot="{ Component }">
      <transition 
        enter-active-class="animate__animated animate__fadeInLeft"
        leave-active-class="animate__animated animate__fadeOutLeft"
        mode="out-in"
      >
        <component :is="Component"></component>
      
      </transition>
    </router-view>
  </div>
</template>

<script setup>
import HelloWorld from './components/HelloWorld.vue'
</script>


<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}

.content {
  width: 40%;
  min-width: 500px;
  margin: 0 auto;
  position: relative;
}

a:hover,
a.router-link-active {
  border-bottom: 2px solid blue;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease-out
}
</style>
