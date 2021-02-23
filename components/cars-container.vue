<template>
  <div class="container list__container" >
    <cars-item v-for="car in carsData" :key="car.id" :carSection="car" />
  </div>


</template>

<script>
import { mapState } from 'vuex';

export default {
      name: 'list',
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
