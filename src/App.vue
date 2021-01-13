<template>
  <section>
    <scroll-parallax :speed="0.35">
      <img
        class="img__background"
        :src="src1"
      />
    </scroll-parallax>
    <scroll-parallax
      :speed="0.2"
    >
    <div class="img__title" style="display: flex; justify-content: flex-end; align-item: center;">
      <img :src="src2" alt="">
    </div>
    <div class="img__title">
      <code>
          {{ scrollY }}
      </code>
    </div>
    </scroll-parallax>
  </section>
  <div class="spacing"></div>
  <section class="horizontal__content">
    <scroll-parallax :speed="0.25" :left="true" direction="x">
      <div style="display: flex; justify-content: flex-start;">
        <img
          class="img__background"
          :src="src3"
        />
        <img
          class="img__background"
          :src="src1"
        />
      </div>
    </scroll-parallax>
    <div class="horizontal__elements">
      <scroll-parallax
        :speed="0.15"
        direction="x"

      >
      <div style="display: flex; align-item: center;">
        <div class="img__title">
          <img :src="src2" alt="">
        </div>
        <div class="img__title" style="">
          <code>
              {{ scrollX }}
          </code>
        </div>
      </div>
      </scroll-parallax>
    </div>
  </section>
</template>

<script>
import ScrollParallax from './components/ScrollParallax.vue';

export default {
  components: {
    ScrollParallax
  },
  data() {
    return {
      src1: "https://images.unsplash.com/photo-1527685609591-44b0aef2400b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1791&q=80",
      src2: "https://images.unsplash.com/photo-1545062990-4a95e8e4b96d?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1500&q=80",
      src3: "https://images.unsplash.com/photo-1590880449155-b54f958ce314?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1430&q=80",
      scrollY: '<scroll-parallax direction="y"></scroll-parallax>',
      scrollX: '<scroll-parallax :left="true" direction="x"></scroll-parallax>'
    }
  }
};
</script>

<style >
  body {
    margin: 0;
    padding: 0;
    font-family: Helvetica;
  }

  .img__background {
    width: 100%;
    top: 0;
  }
  .img__title {
    position: relative;
    bottom: 30em;
    color: white;
    text-shadow: 1px 2px 4px rgba(0,0,0,0.8);
    margin-right: 32px;
  }

  .img__title img {
    width: 350px;
    box-shadow: 1px 2px 4px rgba(0,0,0,0.8);
  }

  .spacing {
    height: 250px;
  }

  code {
    color: orange;
    background-color: rgba(0,0,0,1);
    padding: 5px 15px;
    border-radiux: 4px;
    box-shadow: 1px 2px 4px rgba(0,0,0,0.8);
    text-shadow: none;
    margin-left: 30px;
    font-size: 16px;
  }

  .horizontal__content {
    overflow: hidden;
  }
</style>


