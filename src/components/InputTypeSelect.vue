<template>
  <div class="input-type-text">
    <div class="property-name">
      {{ inputName }}
    </div>
    <div class="property-value">
      <select class="form-control"
              v-model="inputValue">
        <option v-for="(value, index) in flexProperties[inputName]">
          {{ value }}
        </option>
      </select>
    </div>
  </div>
</template>

<script>
  import { mapState } from 'vuex'

  export default {
    name: 'InputTypeSelect',
    props: ['inputName', 'defaultValue'],
    data () {
      return {
        container: null,
        inputValue: ''
      }
    },
    computed: {
      ...mapState([
        'selectValue',
        'flexProperties'
      ]),
      updatedSelectValue () {
        return this.selectValue
      }
    },
    watch: {
      inputValue () {
        this.updateValue()
      },
      updatedSelectValue () {
        this.checkValue()
      }
    },
    methods: {
      checkValue () {
        this.inputValue = getComputedStyle(this.container)[this.inputName]
      },
      updateValue () {
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
      if (this.defaultValue) {
        this.inputValue = this.defaultValue
      } else {
        this.checkValue()
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  .input-type-text {

  }
</style>
