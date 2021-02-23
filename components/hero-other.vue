<template>

  <div class="about__hero">
    <slot></slot>
  </div>

</template>

<script>
  export default {

  }
</script>

<style lang="scss" scoped>
  .about__hero {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 30vh;
    border-bottom: 1px solid rgb(211,211,211)
  }

    h1 {
    font-size: 5rem;
    text-decoration: underline;
    text-underline-offset: 15px;
    color: #555;
      }

  h2 {
    font-weight: lighter;
  }

</style>
