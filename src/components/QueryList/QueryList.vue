<template>
  <div v-if="!$apollo.queries.search.loading">
    <table>
      <tr>
          <th v-for="(value, i) in Object.keys(this.search.edges[0].node)" :key="i">{{capitalize(value)}}</th>
      </tr>
      <tr v-for="(edge, i) in search.edges" :key="i">
          <td v-for="(value, key, i) in edge.node" :key="i">{{formatData(value, key)}}</td>
      </tr>
    </table>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import { TOP_100R_EPOS } from '../../constants/graphql'
import FormatTable from '../Mixins/FormatTable'

export default {
  name: 'QueryList',
  components: {
  },
  mixins: [FormatTable],
  data () {
    return {
      search: ''
    }
  },
  apollo: {
    search: {
      query: TOP_100R_EPOS,
      operationName: 'getTopRepos',
      variables: {
        queryString: 'stars:>100'
      }
    }
  },
  computed: {
    ...mapState({
    })
  },
  methods: {
    ...mapActions([
    ])
  },
  created () {
  },
  beforeDestroy () {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style src="./QueryList.css">
</style>
