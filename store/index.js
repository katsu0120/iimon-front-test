
export const state = () => ({

  lists: {
    list1: ['Apple', 'Grape', 'Strawberry', 'Cherry', 'Plum'],
    list2: ['Watermelon', 'Banana', 'Peach']
  }
})

export const getters = {}

export const mutations = {
  rightMove (state, payload) {
    state.lists.list2.push(payload)
  },
  leftDelete (state, payload) {
    state.lists.list1 = payload
  },
  leftMove (state, payload) {
    state.lists.list1.push(payload)
  },
  rightDelete (state, payload) {
    state.lists.list2 = payload
  }
}

export const actions = {
  rightMove ({ commit }, payload) {
    commit('rightMove', payload)
  },
  leftDelete ({ commit }, payload) {
    commit('leftDelete', payload)
  },
  leftMove ({ commit }, payload) {
    commit('leftMove', payload)
  },
  rightDelete ({ commit }, payload) {
    commit('rightDelete', payload)
  }
}
