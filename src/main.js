// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import VuexStore from './vuex/store'
import App from './App'
import router from './router'
import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { setContext } from 'apollo-link-context'
import VueApollo from 'vue-apollo'

Vue.use(Vuex)
Vue.use(VueApollo)

const httpLink = new HttpLink({
  // You should use an absolute URL here
  uri: 'https://api.github.com/graphql',
  credentials: ''
})

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = '05ba6e7be5b2339db20a4bcf6aff71e1aa70403a'
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : ''
    }
  }
})

// Create the apollo client
const apolloClient = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
  connectToDevTools: true
})

const apolloProvider = new VueApollo({
  defaultClient: apolloClient
})

Vue.config.productionTip = false

const store = new Vuex.Store(VuexStore)

/* eslint-disable no-new */
window.mocaPlatform = new Vue({
  el: '#app',
  router,
  store,
  provide: apolloProvider.provide(),
  components: { App },
  template: '<App/>'
})
