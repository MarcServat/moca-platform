<template>
  <div class="back">
    <ad-header></ad-header>
    <ReposTable></ReposTable>
  </div>
</template>

<script>

import AdHeader from '../AdHeader/AdHeader.vue'
import ReposTable from '../ReposTable/ReposTable.vue'

export default {
  name: 'Home',
  components: {
    AdHeader,
    ReposTable
  },
  data () {
    return {
    }
  },
  methods: {
  }
}
</script>
<style scoped src="./Home.css"></style>
