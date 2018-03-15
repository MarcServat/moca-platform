<template>
  <div class="input-search">
    <div class="wrap-icon">
      <input v-model="value"
            class="box"
            placeholder="Search"
            type="text"
            @keypress="search"
            @keyup.delete="search">
            <i class="icon fas fa-search"></i>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
  name: 'Search',
  components: {},
  data () {
    return {
      value: '',
      options: {
        shouldSort: true,
        threshold: 0.6,
        location: 0,
        distance: 100,
        maxPatternLength: 32,
        minMatchCharLength: 1,
        keys: ['first_name', 'last_name', 'profession']
      }
    }
  },
  computed: {
    ...mapState({
      oompas: state => state.response.results
    })
  },
  methods: {
    ...mapMutations(['findResult']),
    search () {
      /* eslint-disable */
      const fuse = new Fuse(this.oompas, this.options)
      const result = fuse.search(this.value)
      this.findResult(result)
    }
  },
  beforeDestroy () {
    this.value = ''
    this.search()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped src="./Search.css">

</style>
