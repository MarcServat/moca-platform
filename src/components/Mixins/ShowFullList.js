import {mapState} from 'vuex'
export default {
  computed: {
    ...mapState({
      matches: state => state.resultsMatches,
      oompaLoompas: state => state.response.results
    }),
    showFullList () {
      if (this.matches.length > 0) {
        window.removeEventListener('scroll', this.handleScroll, false)
        return this.matches
      } else {
        window.addEventListener('scroll', this.handleScroll, false)
        return this.oompaLoompas
      }
    }
  }
}
