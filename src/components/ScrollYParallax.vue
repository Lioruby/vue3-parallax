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
        default: 0.15
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
      loadParallax() {
        this.el = this.$refs.scrollYParallax;
        const speedCoeff = this.down ? this.speed : -this.speed
        window.addEventListener('scroll', () => {
          this.el.style.transform = `translateY(${window.pageYOffset * speedCoeff}px)`;
        });
      }
    },
    mounted() {
      this.loadParallax();
    }
  };
</script>


