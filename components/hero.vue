<template>
  <div class="hero">
    <div class="hero__text">
      <nuxt-link to="/cars"><button>Browse cars</button></nuxt-link>
     </div>
  </div>
</template>

<script>
  export default {

  }
</script>

<style lang="scss" scoped>

.hero {
  background: url(@/static/heroimg2.jpg) center center no-repeat;
  height: 65vh;
  width: 100%;
  position: relative;

  @media screen and(max-width:1920px) {
    background: url(@/static/heroimg.jpg) center center no-repeat;
  }

  @media screen and(max-width:500px) {
    background: url(@/static/heroimg_mobile.jpg) center center no-repeat;
    height: 80vh;
  }

  @media screen and(max-width:1024px) {
    background: url(@/static/heroimg_table.jpg) center center no-repeat;
  }


}

.hero::after {
  position: absolute;
  content: "";
  width: 100%;
  height: 100%;
  z-index: 1;
  background: rgb(0,0,0);
  opacity: .6;
}

.hero__text {
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  z-index: 2;
}

button {
  padding: 20px 60px;
  margin-bottom: 30px;
  border: none;
  font-size: 2.5rem;
  border-radius: 10px;
  background: #24a8b985;
  cursor: pointer;
  outline: none;
  color: rgba(255, 255, 255, 0.85);
  transition: .3s;

  &:hover {
     background: #24A7B9;
  }
}


</style>
