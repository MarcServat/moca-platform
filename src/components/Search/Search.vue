<template>
  <div class="back Wrapper">
    <div class="Input">
      <i id="filtersubmit"
         class="icon fas fa-search"
          @click="onUpdate"></i>
      <input type="text"
             id="input"
             class="Input-text fa fa-input"
             placeholder="Search"
             v-model="value"
             @change="onUpdate">
      </div>
  </div>
</template>
<script>
export default {
  name: 'Search',
  data () {
    return {
      value: ''
    }
  },
  methods: {
    onUpdate () {
      this.$emit('updateValue', this.value)
    }
  }
}
</script>
<style scoped src="./Search.css">

</style>
