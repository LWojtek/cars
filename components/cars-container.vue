<template>
  <div class="container list__container">
    <!-- <button @click="showFav = !showFav">toggle favs</button> -->
    <transition-group name="item" tag="div">
      <cars-item v-for="(car, i) in carsData"
        :key="car.id"
        :style="{'transition-delay': `${i * 250}ms`}"
        :carSection="car"
        :delay="(i * 250) + 500"
        class="cars__item"
      />
    </transition-group>
  </div>
</template>

<script>
import { mapState } from 'vuex';


export default {
  name: 'list',
  data(){
    return {
      id: this.$route.params.carId,
      showList: false,
      showFav: false,
    }
  },
  computed: {
    favorites(){
      return this.$store.state.favorites;
    },
    carsData(){
      if (this.showList) {
        let storeCars = this.$store.state.carsData;
        if (storeCars){
          let carsData = storeCars.filter(car => car.id !== this.id)
            if(this.showFav){
              return carsData.filter((car) => {
                return this.favorites.indexOf(car.id) !== -1;
              });
          } else {
              return carsData;
          }
        }
      }
      return false;
    },
  },
  mounted(){
    this.showList = true
  }

};
</script>


<style lang="scss" scoped>

.list__container {
  margin-top: 50px;
}
</style>
