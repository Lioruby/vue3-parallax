<template>
  <slot class="caca">
  </slot>
</template>

<script>
  export default {
    name: 'VueParallax',
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
    methods: {
      loadSpeedItem() {
        const el = document.getElementById(this.itemId);

        window.addEventListener('scroll', () => {
          el.style.transform = `translateY(${window.pageYOffset * this.speed}px)`;
        });
      }
    },
    mounted() {
      this.loadSpeedItem();
      console.log(this.$slots);
    }
  };
</script>


