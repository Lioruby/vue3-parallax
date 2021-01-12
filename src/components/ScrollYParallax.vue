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
      width: {
        type: String,
        required: false
      },
      speed: {
        type: Number,
        required: true,
        default: 0
      },
      itemId: {
        type: String,
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

        window.addEventListener('scroll', () => {
          this.el.style.transform = `translateY(${window.pageYOffset * this.speed}px)`;
        });
      }
    },
    mounted() {
      this.loadSpeedItem();
    }
  };
</script>


