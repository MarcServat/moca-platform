<template>
  <div class="wrapper">
    <loading v-if="$apollo.queries.search.loading"></loading>
    <div v-else class="card table-card">
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

export default {
  name: 'ReposTable',
  components: {
    Loading
  },
  mixins: [FormatTable],
  data () {
    return {
      search: {}
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
    ]),
    ...mapMutations([
      'saveData'
    ]),
    orderResults () {
      this.search.edges.sort(function (a, b) {
        console.log(a.node.stargazers.totalCount, b.node.stargazers.totalCount)
        if (a < b) return -1
        if (a > b) return 1
        return 0
      })
    }
  },
  created () {
  },
  beforeDestroy () {
  },
  watch: {
    search () {
      this.orderResults()
      if (!this.$apollo.queries.search.loading) { this.saveData(this.search) }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style src="./ReposTable.css">
</style>
