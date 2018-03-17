<template>
  <div class="fixed-top header">
    <img @click="toHome" width="100px" src="../../assets/img/logo-moca-red.svg" alt="moca-logo">
    <span class="title-header">Top 100 Repos on GitHub <i class="fab fa-github"></i></span>
  </div>
</template>

<script>
export default {
  name: 'AdHeader',
  data () {
    return {}
  },
  methods: {
    toHome () {
      this.$router.push({name: 'Home'})
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped src="./AdHeader.css"></style>
