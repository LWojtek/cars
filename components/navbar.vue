<template>
  <nav>
    <nuxt-link to="/"><div class="nav__logo">
      <img src="@/static/logo.png" alt="company logo">
    </div></nuxt-link>
    <div class="nav__links-wrapper">
      <ul class="nav__links">
        <nuxt-link to="/" class="nav__link nuxt-link-active"><li>Home</li></nuxt-link>
        <nuxt-link to="/about" class="nav__link" ><li>About</li></nuxt-link>
        <nuxt-link to="/contact" class="nav__link" ><li>Contact</li></nuxt-link>
        <nuxt-link to="/cars" class="nav__link" ><li>Our cars</li></nuxt-link>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'navbar'
}
</script>

<style lang="scss" scoped>

nav {
  position: fixed;
  width: 100%;
  z-index: 999;
  top: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  background: rgb(221, 221, 221);
  padding: 10px 100px;

  .nav__links-wrapper {
    padding-right: 30px;
    flex-basis: 40%;

    @media screen and(max-width: 767px) {
      padding: 0;
      flex-basis: 100%;
    }

    .nav__links {
    display: flex;
    justify-content: space-between;
    list-style-type: none;

        @media screen and(max-width: 767px) {
          padding: 0;

        }
    }
  }

  .nav__link {
    text-decoration: none;
    color: #000;
    border-bottom: 1px solid transparent;
    padding: 5px;

    @media screen and(max-width: 468px){
        padding: 0;
    }

    &:hover {
      border-bottom: 1px solid #24A7B9;
    }
  }

}





</style>
