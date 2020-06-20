# webpack_vue_example

> webpack_vue_example

This is a setup for Drupal 7 modules implementing VueJS utilising webpack 4.

With proper modification, this may be implemented to Drupal 8 as well.

Prerequisite knowledge of webpack, VueJS and how to utilise Drupal API (e.g. drupal_add_js, drupal_add_css ) is highly recommended prior using this custom module.

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:3000 using BrowserSync
npm run start

# build for production with minification
npm run build
```

## Change BrowserSync Settings

BrowserSync proxy url and port in <i>"webpack.config.js"</i> of this root folder should be changed to fit the site you're serving.

``` js
new BrowserSyncPlugin({
  host: 'localhost',
  port: 3000,
  proxy: "https://sitename.example/"
})
```

## Mount Vue Instance.

Modify the "el" tag in main.js file accordingly to match the id tag where to mount your Vue instances in the templates.

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
