<template>
  <div ref="scrollParallax">
    <div ref="scrollParallaxChild">
      <slot> </slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ScrollParallax',
  props: {
    speed: {
      type: Number,
      required: true,
      default: 0.15,
    },
    down: {
      type: Boolean,
      default: false,
      required: false,
    },
    up: {
      type: Boolean,
      default: true,
      required: false,
    },
    right: {
      type: Boolean,
      default: true,
      required: false,
    },
    left: {
      type: Boolean,
      default: false,
      requiredequired: false,
    },
    direction: {
      type: String,
      default: 'y',
      required: false,
    },
  },
  data() {
    return {
      el: null,
      elChild: null,
      axes: null,
      speedCoeff: null,
    }
  },
  methods: {
    loadParallax() {
      this.initDirection()
      this.el = this.$refs.scrollParallax
      this.elChild = this.$refs.scrollParallaxChild
      window.addEventListener('scroll', this.update)
    },
    update() {
      let rect = this.el.getBoundingClientRect()
      let elY = rect.y + rect.height / 2 - window.innerHeight / 2 // how far down the page the center of the element is
      this.elChild.style.transform = `translate${this.axes}(${elY * this.speedCoeff}px)`
    },
    initDirection() {
      if (this.direction === 'x') {
        this.axes = 'X'
        if (this.left) {
          this.speedCoeff = -this.speed
        } else {
          this.speedCoeff = this.speed
        }
      } else if (this.direction === 'y') {
        this.axes = 'Y'
        if (this.down) {
          this.speedCoeff = -this.speed
        } else {
          this.speedCoeff = this.speed
        }
      }
    },
  },
  mounted() {
    this.loadParallax()
  },
}
</script>
