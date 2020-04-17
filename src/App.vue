<template>
  <div id="app">
    <transition name="trans" mode="out-in">
      <router-view/>
    </transition>
  </div>
</template>

<script>
  export default {
    name: 'App'
  }
</script>

<style>
  html, body, #app {
    margin: 0;
    height: 100%;
  }

  .trans-enter-active, .aaa-leave-active {
    transition: all 0.4s ease;
  }

  .trans-enter {
    opacity: 0;
    transform: translateX(-100%);
  }

  .trans-leave-to {
    opacity: 0;
    transform: translateX(-100%);
    position: absolute;

  }
</style>
