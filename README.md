## vue3-parallax
A simple Vue.js 3 parallax component.

You can see the demo here : https://lioruby.github.io/vue3-parallax/

## Get Started
With yarn

```sh
yarn add vue3-parallax
```
With npm
```sh
npm i vue3-parallax
```
To use it in your Vue app
```javascript
// main.js

import { createApp } from 'vue'
import App from './App.vue'
import ScrollParallax from 'vue3-parallax/src/components/ScrollParallax.vue';


const app = createApp(App);
app.component('scroll-parallax', ScrollParallax);

// ...
```

To use it just as component:
```javascript
import ScrollParallax from 'vue3-parallax/src/components/ScrollParallax.vue';

export default {
  components: {
    ScrollParallax
  },

// ...
```


## Usage
```vue
<scroll-parallax>
  <YourComponent/>
</scroll-parallax>
```

Props | Type | Value | Default
----- | -----| ----- | -------
speed | Number | below 0.6 | 0.15
direction | String | x/y | y
up | Boolean | | true
down | Boolean | | false
left | Boolean | | false
right | Boolean | | true
