import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    logHistory: [],
    containerStyle: {
      display: 'flex',
      flexFlow: 'row nowrap',
      flexDirection: 'row',
      flexWrap: 'nowrap',
      background: 'royalblue',
      width: '100%',
      height: '300px'
    },
    itemStyle: {
      width: '100px',
      height: '100px',
      background: 'tomato',
      flex: '0 3 auto'
    },
    itemCount: {
      count: 10
    },
    flexProperties: {
      display: [
        'flex',
        'block'
      ],
      flexDirection: [
        'row',
        'row-reverse',
        'column',
        'column-reverse'
      ],
      flexWrap: [
        'nowrap',
        'wrap',
        'wrap-reverse'
      ],
      justifyContent: [
        'flex-start',
        'flex-end',
        'center',
        'space-between',
        'space-around'
      ],
      alignContent: [
        'stretch',
        'flex-start',
        'flex-end',
        'center',
        'space-between',
        'space-around'
      ],
      alignItems: [
        'stretch',
        'flex-start',
        'flex-end',
        'center',
        'baseline'
      ]
    },
    selectValue: null
  },
  getters: {

  },
  mutations: {
    updateLog (state, payload) {
      const target = payload.event.target
      const elName = target.innerHTML
      const width = getComputedStyle(target).width
      const height = getComputedStyle(target).height
      const flex = getComputedStyle(target).flex
      const containerWidth = document.getElementById('flex-container').style.width
      state.logHistory.push(`${elName}: ${width}(${containerWidth}) / ${height} / ${flex}`)
    },
    updatingSelectValue (state, payload) {
      state.selectValue = payload.inputValue
    }
  },
  actions: {

  }
})
