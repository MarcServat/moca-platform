<template>
  <div class="container">
      <h2 class="title">Find your Oompa Loompa</h2>
      <h4 class="subtitle">There are more than 100k</h4>
      <div class="list">
        <router-link    :to="{ name: 'Details', params: { id: oompaLoompa.id.toString(), oompaLoompa }}"
                        class="card"
                        v-for="oompaLoompa of showFullList"
                        :key="oompaLoompa.id">
            <img width="350px;" :src="oompaLoompa.image" alt="oompaLoompa">
            <p class="name">{{ oompaLoompa.first_name }} {{ oompaLoompa.last_name }}</p>
            <p class="gender">{{ resolveGender(oompaLoompa.gender) }}</p>
            <p class="gender profession">{{ oompaLoompa.profession }}</p>
        </router-link>
      </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import gql from 'graphql-tag'

export default {
  name: 'QueryList',
  components: {
  },
  data () {
    return {
      search: ''
    }
  },
  apollo: {
    search: {
      query: gql`query Top100Star($queryString: String!) {
        search(query: $queryString, type: REPOSITORY, first: 100) {
          edges {
            node {
            ... on Repository {
                name
                primaryLanguage {
                name
                color
                }
                description
                diskUsage
                forkCount
                url
                stargazers {
                  totalCount
                }
              }
            }
          }
        }
      }`,
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
      'getList',
      'getDataStored'
    ]),
    handleScroll (e) {
      if (Math.round(window.innerHeight + window.scrollY) >= Math.round(document.body.offsetHeight)) {
        window.removeEventListener('scroll', this.handleScroll, false)
        const nextPage = this.page + 1
        this.getNextPage(nextPage)
      }
    },
    getNextPage (page) {
      if (page <= this.total) {
        this.getList({ page })
          .then(res => {
            window.addEventListener('scroll', this.handleScroll, false)
          }).catch(err => {
            throw err
          })
      }
    }
  },
  created () {
    this.getDataStored().then(isStorageEmpty => {
      isStorageEmpty = false
      if (isStorageEmpty) {
        this.getList()
      }
      window.addEventListener('scroll', this.handleScroll, false)
    }).catch(err => {
      throw err
    })
  },
  beforeDestroy () {
    window.removeEventListener('scroll', this.handleScroll, false)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style src="./QueryList.css">
</style>
