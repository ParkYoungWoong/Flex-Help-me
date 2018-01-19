<template>
  <div id="flex-viewport">
    <div class="viewport">
      <div class="container-wrap">
        <div id="flex-container"
             :style="containerStyle">
          <div class="item"
               v-for="(index) in parseInt(itemCount.count)"
               :key="index"
               :style="itemStyle"
               @click="updateLog({ event: $event })">{{ index }}</div>
          <div id="size-log-box"></div>
        </div>
      </div>
    </div>

    <!--FLEX LOG AREA-->
    <slot></slot>
  </div>
</template>

<script>
  import { mapState, mapMutations } from 'vuex'
  import interact from 'interactjs'

  export default {
    name: 'FlexViewport',
    data () {
      return {

      }
    },
    computed: {
      ...mapState([
        'containerStyle',
        'itemStyle',
        'itemCount'
      ])
    },
    methods: {
      ...mapMutations([
        'updateLog'
      ])
    },
    mounted () {
      const gridTarget = interact.createSnapGrid({
        x: 10,
        y: 10
      })

      interact('#flex-container')
        .resizable({
          edges: {
            top: true,
            bottom: true,
            left: true,
            right: true
          },
          restrictEdges: {
            outer: 'parent',
            endOnly: true
          },
          snap: { targets: [gridTarget] }
        })
        .on('resizemove', (event) => {
          const target = event.target
          const width = `${parseInt(event.rect.width)}px`
          const height = `${parseInt(event.rect.height)}px`
          Object.assign(target.style, {
            width,
            height
          })

          const sizeBox = document.getElementById('size-log-box')
          Object.assign(sizeBox.style, {
            transition: '0s',
            opacity: '1'
          })
          sizeBox.innerHTML = `${width} x ${height}`
        })
        .on('resizeend', () => {
          const sizeBox = document.getElementById('size-log-box')
          Object.assign(sizeBox.style, {
            transition: '1s',
            opacity: '0'
          })
        })
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
      #flex-container {
        position: relative;
        #size-log-box {
          position: absolute;
          bottom: 0;
          right: 0;
          background: darkgrey;
          color: white;
          font-size: 11px;
          padding: 4px;
          z-index: 100;
          opacity: 0;
        }
      }
      .item {
        &:nth-child(2) {
          flex: 2 3 !important;
        }
        &:hover {
          background: orange !important;
          position: relative;
          z-index: 1;
          box-shadow: 0 0 20px 0 rgba(0,0,0,.4);
        }
      }
    }
  }
</style>
