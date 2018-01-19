<template>
  <div id="flex-dashboard">
    <div class="properties">
      <input-type-select input-name="display"></input-type-select>
      <input-type-text input-name="flexFlow"></input-type-text>
      <input-type-select input-name="flexDirection"></input-type-select>
      <input-type-select input-name="flexWrap"></input-type-select>
      <input-type-select input-name="justifyContent" default-value="flex-start"></input-type-select>
      <input-type-select input-name="alignContent" default-value="stretch"></input-type-select>
      <input-type-select input-name="alignItems" default-value="stretch"></input-type-select>
    </div>
  </div>
</template>

<script>
  import interact from 'interactjs'
  import InputTypeText from '@/components/InputTypeText'
  import InputTypeSelect from '@/components/InputTypeSelect'

  export default {
    name: 'FlexDashboard',
    components: {
      InputTypeText,
      InputTypeSelect
    },
    mounted () {
      interact('#flex-dashboard')
        .resizable({
          edges: {
            top: false,
            bottom: false,
            left: false,
            right: true
          }
        })
        .on('resizemove', (event) => {
          const target = event.target
          target.style.flexBasis = event.rect.width + 'px'
        })
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  @import "../scss/config";

  #flex-dashboard {
    /*width: 350px;*/
    flex: 0 0 350px;
    height: 100%;
    background: $color-red;
    position: relative;
    padding: 12px;
    box-sizing: border-box;
    border-right: 10px solid brown;
    .properties {
      height: 80%;
      overflow: auto;
    }
  }
</style>
