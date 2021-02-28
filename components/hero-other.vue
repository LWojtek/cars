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
    min-height: 200px;
    border-bottom: 1px solid rgb(211,211,211);

        @media screen and(max-width: 1024px){
          height: 18vh;
        }

        @media screen and(max-width: 768px){
          height: 25vh
        }
  }

    h1 {
    font-size: 5rem;
    text-decoration: underline;
    text-underline-offset: 15px;
    color: #555;

        @media screen and(max-width: 1024px){
          font-size: 3rem;
        }

        @media screen and(max-width: 768px){
          font-size: 2.5rem;
        }

    }

  h2 {
    font-weight: lighter;

        @media screen and(max-width: 1024px){
          font-size: 3rem;
        }

        @media screen and(max-width: 768px){
          font-size: 1.8rem;
        }
  }

</style>
