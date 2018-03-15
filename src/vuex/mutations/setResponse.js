export const setResponse = (state, {total, current, results}) => {
  state.response.total = total
  state.response.current = current
  state.response.results.push(...results)
}
