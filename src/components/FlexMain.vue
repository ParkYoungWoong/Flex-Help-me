<template>
  <div id="flex-main">
    <flex-dashboard></flex-dashboard>
    <flex-viewport>
      <flex-log></flex-log>
    </flex-viewport>
  </div>
</template>

<script>
import FlexDashboard from '@/components/FlexDashboard'
import FlexViewport from '@/components/FlexViewport'
import FlexLog from '@/components/FlexLog'

export default {
  name: 'FlexMain',
  data () {
    return {

    }
  },
  components: {
    FlexDashboard,
    FlexViewport,
    FlexLog
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  #flex-main {
    height: 100%;
    display: flex;
    position: relative;
  }
</style>
