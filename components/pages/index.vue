<template>
  <div>
      <hero />
      <cars-container />
  </div>

</template>

<script>
  export default {
    name: 'index',
  }
</script>

<style lang="scss" scoped>

  .home-enter-active, .home-leave-active { transition: opacity .5s; }
  .home-enter, .home-leave-active { opacity: 0; }

</style>
