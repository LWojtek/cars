<template>
  <div>
    <div class="list__item" v-if="carSection.id !== this.id">
      <div class="item__image">
        <nuxt-link :to="`/cars/${carSection.id}`">
          <img class="image" :src="`${ carSection.images.thumbnail[0] }`" alt="">
        </nuxt-link>
      </div>
      <div class="item__details">
        <h5>{{ carSection.title }}</h5>
        <div class="item__desc">
          <p>{{ carSection.description}}</p>
        </div>
        <div class="item__spec">
          <div>
            <h6>Year</h6>
            <p>{{ carSection.year }}</p>
          </div>
          <div>
            <h6>Milage</h6>
            <p>{{ carSection.km }}</p>
          </div>
          <div>
            <h6>Engine capacity</h6>
            <p>{{ carSection.engineCapacity }}</p>
          </div>
          <div>
            <h6>Fuel</h6>
            <p>{{ carSection.fuelType }}</p>
          </div>
        </div>
      </div>
      <div class="item__price">
        <transition name="price">
          <h5 v-if="price">{{ price }}</h5>
        </transition>
          <nuxt-link :to="`/cars/${carSection.id}`"><button class="button">Details</button></nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';



export default {
  name: 'cars-item',
  data(){
    return {
      id: this.$route.params.carId,
      price: false
          }
  },
  props: ['carSection', 'delay'],
  computed: {
    ...mapState([
      'carsData',
    ]),
  },
  mounted(){
    // this.price = this.carSection.price;
    setTimeout(() => {
        this.price = this.carSection.price;
    }, this.delay);
  }

};

</script>

<style lang="scss" scoped>

.list__item {
  display: flex;
  border-bottom: 1px solid #999;
  margin-bottom: 20px;
  min-height: 320px;
  padding: 25px;

  @media screen and(max-width: 767px){
    flex-direction: column;
    padding: 0;
  }
}



.item__image {
  flex-basis: 25%;
  display: flex;
  align-items: center;

    @media screen and(max-width: 767px){
    justify-content: center;
  }
}

.image {
  width: 300px;
  height: 200px;
}

.item__details {
  flex-basis: 60%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 10px;

.item__desc {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}

h5 {
  padding: 8px 0;

      @media screen and(max-width: 767px){
      text-align: center;
      }
    }
}

.item__price {
  flex-basis: 20%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  color: firebrick;
  padding: 10px;


      @media screen and(max-width: 767px){
      flex-basis: 40%;
      }

}

.item__spec {
  display: flex;
  justify-content: space-evenly;
  align-items: center;

    @media screen and(max-width: 767px){
    padding-top: 20px;
    }

}

h6 {
  font-size: 1rem;
  font-weight: 200;
}

p {
  font-size: 1.2rem;

    @media screen and(max-width: 767px){
    padding-top: 10px;
    text-align: center;
    }
}

.button {
  padding: 10px 40px;
  border: none;
  font-size: 1.6rem;
  border-radius: 5px;
  background: rgba(85, 85, 85, 0.8);
  color: rgba(255, 255, 255, 0.8);
  cursor: pointer;
  transition: .3s;
  outline: none;

  &:hover {
       background: rgb(85,85,85)
  }
}


</style>
