<template>
  <div class="container list__container">
    <cars-item class="cars__item" v-for="car in carsData" :key="car.id" :carSection="car"/>
  </div>
</template>

<script>
import { mapState } from 'vuex';


export default {
      name: 'list',
      data(){
        return {
          id: this.$route.params.carId,
        }
      },
  computed: {
    ...mapState([
      'carsData',
    ])
  },

};
</script>


<style lang="scss" scoped>

.list__container {
  margin-top: 50px;
}





</style>
