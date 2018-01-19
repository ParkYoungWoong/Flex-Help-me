<template>
  <div id="flex-viewport">
    <div class="viewport">
      <div class="container-wrap">
        <container-box></container-box>
      </div>
    </div>

    <!--FLEX LOG AREA-->
    <slot></slot>
  </div>
</template>

<script>
  import ContainerBox from '@/components/ContainerBox'

  export default {
    name: 'FlexViewport',
    components: {
      ContainerBox
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  #flex-viewport {
    flex: 1;
    display: flex;
    flex-flow: column;
    overflow: hidden;
    .viewport {
      flex: 1;
      padding: 10px;
      position: relative;
      overflow: auto;
    }
  }
</style>
