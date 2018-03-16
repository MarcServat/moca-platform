export default {
  computed: {
  },
  methods: {
    capitalize (field) {
      if (typeof field !== 'undefined' && field !== '__typename') { return field.charAt(0).toUpperCase() + field.slice(1) }
    },
    formatData (value, key) {
      switch (key) {
        case 'name' :
          return this.capitalize(value)
        case 'description':
          return value
        case 'diskUsage':
          return `${(value / 1000).toString()} MB`
        case 'forkCount':
          return new Intl.NumberFormat().format(value)
        case 'url':
          return value
        case 'stargazers':
          return new Intl.NumberFormat().format(value.totalCount)
        case 'primaryLanguage':
          if (value) { return value.name }
        case '__typename':
          return false
      }
    }
  }
}
