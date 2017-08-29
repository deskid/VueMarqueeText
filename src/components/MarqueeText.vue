<template>
  <div ref="marqueeText" class="marquee"
       v-bind:style="{ position: isActive?'':'absolute', marginLeft: -scrollX + 'px' }">
  </div>
</template>

<script>
  export default {
    name: 'marquee-text',
    components: {},
    data () {
      return {
        text: 'hello world balblalablblalbllalalallalba',
        isActive: false,
        scrollX: 0,
        deltaPx: 2,
        maxScroll: 0,
        space: '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'
      }
    },
    mounted () {
      this.main()
    },

    methods: {
      main () {
        this.$nextTick(() => {
          let $marquee = this.$refs.marqueeText
          $marquee.innerHTML = this.text + this.space
          this.maxScroll = ($marquee.clientWidth + 1)

          $marquee.innerHTML = this.text + this.space + this.text

          this.isActive = true
          setTimeout(this.go, 50)
        })
      },
      go () {
        this.scrollX = this.scrollX + this.deltaPx
        if (this.scrollX > this.maxScroll) {
          this.scrollX = 0
          setTimeout(this.go, 1000)
        } else {
          setTimeout(this.go, 50)
        }
      }

    }
  }
</script>

<style scoped>
  .marquee {
    background: #eee;
    overflow: hidden;
    white-space: nowrap;
  }
</style>
