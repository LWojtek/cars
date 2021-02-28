<template>
  <div class="container list__container">
    <transition-group name="item" tag="div">
      <cars-item v-for="(car, i) in carsData" :key="car.id"
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
      showList: false
    }
  },
  computed: {
    carsData(){
      if (this.showList) {
        return this.$store.state.carsData;
      }

      return false;
    }
  },

  created(){
    console.log('created yo');
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
