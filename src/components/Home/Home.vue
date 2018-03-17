<template>
  <div class="back">
    <ad-header></ad-header>
    <search></search>
    <ReposTable></ReposTable>
  </div>
</template>

<script>

import AdHeader from '../AdHeader/AdHeader.vue'
import Search from '../Search/Search.vue'
import ReposTable from '../ReposTable/ReposTable.vue'

export default {
  name: 'Home',
  components: {
    AdHeader,
    Search,
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
