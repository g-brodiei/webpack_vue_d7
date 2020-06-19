# webpack_vue_example

> webpack_vue_example

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

For detailed explanation on how things work, consult the [docs for vue-loader](http://vuejs.github.io/vue-loader).

## Mount Vue Instance.

modify the "el" tag in main.js file accordingly to your id tag where you want to mount your Vue instances.

``` html
<!-- Your custom Drupal templates -->

<div id='#vue-instance'></div>

```

``` js
// js/main.js file

new Vue({
  el: '#vue-instance',
  name: 'vue-instance',
  render: h => h(App),
});
```
