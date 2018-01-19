<template>
  <div id="flex-log" v-chat-scroll>
    <ul>
      <li v-for="log in logHistory">
        {{ log }}
      </li>
    </ul>
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  import interact from 'interactjs'

  export default {
    name: 'FlexLog',
    data () {
      return {

      }
    },
    computed: {
      ...mapState([
        'logHistory'
      ])
    },
    mounted () {
      interact('#flex-log')
        .resizable({
          edges: {
            top: true,
            bottom: false,
            left: false,
            right: false
          }
        })
        .on('resizemove', (event) => {
          const target = event.target
          target.style.flexBasis = event.rect.height + 'px'
        })
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  @import "../scss/config";

  #flex-log {
    flex: 0 0 300px;
    background: $color-code-bg;
    color: $color-white;
    border-top: 10px solid brown;
    padding: 20px;
    overflow: auto;
  }
</style>
