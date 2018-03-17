<template>
  <div class="wrapper">
    <loading v-if="$apollo.queries.search.loading"/>
    <div v-else class="card table-card">
      <search @updateValue="onUpdatedValue"><i class="fas fa-search">Search</i></search>
      <table id="table" class="table table-hover">
        <thead>
        <tr>
          <th class="header" scope="col"></th>
            <th class="row-line header"
                scope="col"
                v-if="value !== '__typename'"
                v-for="(value, i) in headers" :key="i">
              <span class="row-line" v-if="value === 'stargazers'"><i class="fas fa-star"></i> Stars</span>
              <span v-else> {{capitalize(value)}} </span>
            </th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="(edge, i) in search.edges" :key="i">
          <th class="row-line" scope="row">{{i + 1}}</th>
            <td scope="row"
                v-if="key !== '__typename'"
                v-for="(value, key, i) in edge.node"
                :key="i">
              <span v-if="key === 'name'"><a :href="edge.node.url">{{capitalize(value)}}</a></span>
              {{formatData(value, key)}}
            </td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState, mapMutations } from 'vuex'
import { TOP_100R_EPOS } from '../../constants/graphql'
import FormatTable from '../Mixins/FormatTable'
import Loading from '../Loading/Loading.vue'
import Search from '../Search/Search.vue'

export default {
  name: 'ReposTable',
  components: {
    Loading,
    Search
  },
  mixins: [FormatTable],
  data () {
    return {
      searchValue: '',
      search: {}
    }
  },
  apollo: {
    search: {
      query: TOP_100R_EPOS,
      operationName: 'getTopRepos',
      variables () {
        return {
          queryString: `${this.searchValue} sort:stars-desc stars:>=0`
        }
      }
    }
  },
  computed: {
    ...mapState({
    })
  },
  methods: {
    ...mapActions([
    ]),
    ...mapMutations([
      'saveData'
    ]),
    onUpdatedValue (value) {
      this.searchValue = value
      this.$apollo.queries.search.refetch()
    }
  },
  created () {
  },
  beforeDestroy () {
  },
  watch: {
    search () {
      if (!this.$apollo.queries.search.loading) { this.saveData(this.search) }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style src="./ReposTable.css">
</style>
