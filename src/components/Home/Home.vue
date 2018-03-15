<template>
  <div>
    <ad-header></ad-header>
    <search></search>
    <query-list></query-list>
  </div>
</template>

<script>

import AdHeader from '../AdHeader/AdHeader.vue'
import Search from '../Search/Search.vue'
import QueryList from '../QueryList/QueryList.vue'

export default {
  name: 'Home',
  components: {
    AdHeader,
    Search,
    QueryList
  },
  data () {
    return {
    }
  },
  methods: {
  }
}
</script>
