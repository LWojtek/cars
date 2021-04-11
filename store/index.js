export const state = () => ({
  carsData: [],
  favorites: [],
  page: 'index'
})


export const mutations = {
  updateCarData: (state, data) => {
    state.carsData = data
  },
  updatePage(state, pageName) {
    state.page = pageName;
  },
  addFavorite(state, carID) {
    state.favorites.push(carID)
    console.log('f');
  },
  removeFavorite(state, carID) {
    var carIndex = state.favorites.indexOf(carID);
    if (carIndex !== -1) {
      state.favorites.splice(carIndex, 1)
    }
  }
}

export const actions = {
  async getCarsData({
    state,
    commit
  }) {
    if (state.carsData.length) return
      try {
      await fetch('https://zabr4wty67.execute-api.us-east-2.amazonaws.com/dev/restaurants', {
          headers:{
            'Content-Type': 'application/json',
            'x-api-key': process.env.AWS_API_KEY
          }
        })
        .then(response => response.json())
        .then(data => {

          commit('updateCarData', data)
        })
      }
      catch(err) {
        console.log(err)
      }
    }
  }
