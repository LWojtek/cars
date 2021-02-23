<template>

  <div class="container">
    <div class="flex">
        <div class="picture__wrapper">
    <h1 style="padding: 20px 50px;">{{ currentCar.title }}</h1>

            <img :src="`${currentGallery[0]}`" alt="" style="min-width: 600px;">

            <img v-for="picture in currentGallery"
            :key="picture"
            :src="`${picture}`"
            alt="" />
        </div>
        <div class="details__wrapper">
          <h2> {{ currentCar.price }} </h2>
          <p style="font-weight: bold;">Make: <span style="font-weight: lighter;">{{ currentCar.make }}</span></p>
          <p style="font-weight: bold;">Model: <span style="font-weight: lighter;">{{ currentCar.model }}</span></p>
          <p style="font-weight: bold;">Version: <span style="font-weight: lighter;">{{ currentCar.version }}</span></p>
          <p style="font-weight: bold;">Year: <span style="font-weight: lighter;">{{ currentCar.year }}</span></p>
          <p style="font-weight: bold;">Milage: <span style="font-weight: lighter;">{{ currentCar.km }}</span></p>
          <p style="font-weight: bold;">Fuel Type: <span style="font-weight: lighter;">{{ currentCar.fuel }}</span></p>
          <p style="font-weight: bold;">Fuel Type: <span style="font-weight: lighter;">{{ currentCar.engineCapacity }}</span></p>
          <p style="font-weight: bold;">Description:</p>
          <p>{{currentCar.description}}</p>


        </div>
    </div>
    <h3>Other cars</h3>
    <div>
      <cars-container/>
    </div>
  </div>

</template>

<script>

import { mapState } from 'vuex';

export default {

  data(){
      return {
        id: this.$route.params.carId,
       }
  },
  computed: {
    ...mapState([
      'carsData',
    ]),
    indexVerified(){
          return this.carsData.filter(car => {
          return car.id === this.id;
          });
    },
    currentCar(){
      return this.indexVerified[0]
    },
    currentGallery(){
      return this.currentCar.images.images
    }
  },

};


</script>

<style lang="scss" scoped>

.container {
  // height: calc(100vh - 80px);
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.flex {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
}

.picture__wrapper {

  flex-basis: 50%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  border-right: 1px solid rgb(197, 197, 197);
  }

  .details__wrapper {
    height: 100%;
    flex-basis: 50%;
    padding: 10px 30px;
  }

  img {
    max-width: 300px;
    margin: 10px;
  }

  p {
    padding: 10px 0;
  }

  h2 {
    padding: 20px 0;
  }

  h2 {
    padding-bottom: 20px;
    color: firebrick;
  }

  h3 {
    padding: 30px 0;
    text-align: center;
    box-shadow: 0 7px 10px 1px rgb(240, 239, 239);
  }

</style>
