<template>
  <div class="input-type-text">
    <div class="property-name">
      {{ inputName }}
    </div>
    <div class="property-value">
      <input type="text"
             class="form-control"
             v-model.trim="inputValue"
             @keyup.enter="updateValue"
             @blur="updateValue">
    </div>
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  export default {
    name: 'InputTypeText',
    props: ['inputName'],
    data () {
      return {
        container: null,
        inputValue: ''
      }
    },
    computed: {
      ...mapState([
        'selectValue'
      ]),
      updatedSelectValue () {
        return this.selectValue
      }
    },
    watch: {
      updatedSelectValue () {
        this.checkValue()
      }
    },
    methods: {
      checkValue () {
        this.inputValue = getComputedStyle(this.container)[this.inputName]
      },
      updateValue (event) {
        Object.assign(this.container.style, {
          [this.inputName]: this.inputValue
        })
        this.$store.commit('updatingSelectValue', {
          inputValue: this.inputValue
        })
      }
    },
    mounted () {
      this.container = document.getElementById('flex-container')
      this.checkValue()
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  .input-type-text {

  }
</style>
