export default {
  computed: {
    headers () {
      const headers = Object.keys(this.search.edges[0].node)
      const index = headers.indexOf('url')
      headers[index] = ''
      return headers
    }
  },
  methods: {
    capitalize (field) {
      if (typeof field !== 'undefined' && field !== '__typename') {
        const h = field.charAt(0).toUpperCase() + field.slice(1)
        return h.replace(/([a-z])([A-Z])/g, '$1 $2')
      }
    },
    formatData (value, key) {
      switch (key) {
        case 'description':
          return value
        case 'diskUsage':
          return `${(value / 1000).toString()} MB`
        case 'stargazers':
          return new Intl.NumberFormat().format(value.totalCount)
        case 'nameWithOwner':
          return value
        case 'url':
          return ''
        case 'primaryLanguage':
          if (value) { return value.name } else { return 'None' }
        default:
          break
      }
    }
  }
}
