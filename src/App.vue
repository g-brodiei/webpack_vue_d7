<template>
  <div id="app">
  </div>
</template>

<script>
var drupalData = Drupal.settings.drupalData;

export default {
  name: 'app',
  components: {
  },
  data: () => {
    return {
      data = drupalData,
    }
  },
  computed: {
  },
  watch: {
  },
  methods: {
  },
}
</script>

<style lang="scss" scoped>
</style>