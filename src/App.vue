<template>
  <vue-parallax :speed="0.25" item-id="1th">
    <img
      class="img__background"
      :src="src1"
      id="1th"
    />
  </vue-parallax>
  <vue-parallax :speed="0.09" item-id="2nd">
    <h1 class="img__title" id="2nd">
      DISCOVER
    </h1>
  </vue-parallax>
</template>

<script>
import VueParallax from './components/VueParallax.vue';

export default {
  components: {
    VueParallax
  },
  data() {
    return {
      src1: "https://images.unsplash.com/photo-1590880449155-b54f958ce314?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1430&q=80"
    }
  }
};
</script>

<style>
  body {
    margin: 0;
    padding: 0;
    font-family: Helvetica;
  }
  .img__background {
    width: 100%;
    position: absolute;
    top: 0;
  }
  .img__title {
    position: relative;
    color: white;
    display: flex;
    justify-content: center;
    margin-top: 2.7em;
    font-size: 6em;
    text-shadow: 3px 3px 8px rgba(0,0,0,0.7);
  }
</style>


