<template>
  <div class="loading">
    <slot name="loading-in">
      <slot name="title-loading"></slot>
      <slot name="subtitle-loading"></slot>

    </slot>
    <div class="spinner">
      <div class="bounce1"></div>
      <div class="bounce2"></div>
      <div class="bounce3"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'loading',
  components: {
  },
  props: {
    query: {
      type: Object
    }
  },
  computed: {},
  methods: {}
}
</script>

<style scoped src="./Loading.css"></style>
