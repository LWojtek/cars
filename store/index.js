export const state = () => ({
  carsData: [],
  page: 'index'
})

export const getters = {
  getterValue: state => {
    return state.value
  }
}

export const mutations = {
  updateCarData: (state, data) => {
    state.carsData = data
  },
  updatePage(state, pageName) {
    state.page = pageName;
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
