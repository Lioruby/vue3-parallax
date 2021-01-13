<template>
  <div ref="scrollYParallax">
    <slot>
    </slot>
  </div>
</template>

<script>
  export default {
    name: 'ScrollYParallax',
    props: {
      speed: {
        type: Number,
        required: true,
        default: 0
      },
      down: {
        type: Boolean,
        default: false,
        required: false
      }
    },
    data() {
      return {
        el: null
      }
    },
    methods: {
      loadSpeedItem() {
        this.el = this.$refs.scrollYParallax;
        const speedCoeff = this.down ? this.speed : -this.speed
        window.addEventListener('scroll', () => {
          this.el.style.transform = `translateY(${window.pageYOffset * speedCoeff}px)`;
        });
      }
    },
    mounted() {
      this.loadSpeedItem();
    }
  };
</script>


