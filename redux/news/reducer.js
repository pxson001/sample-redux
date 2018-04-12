import * as NewsActionConstants from './action'

export default function news(state = { isFetching: false, posts: []}, action) {
  switch (action.type) {
    case NewsActionConstants.FETCH_NEWS_REQUEST:
      console.log('loading request')
      return Object.assign({}, state, {
          isFetching : true
      })
    case NewsActionConstants.FETCH_NEWS_SUCCESS:
      console.log('load request success')
      console.log(action.posts)
      return Object.assign({}, state, {
        isFetching : false,
        posts : action.posts
    })
    case NewsActionConstants.FETCH_NEWS_FAILURE:
      console.log('load request failure')
      return Object.assign({}, state, {
        isFetching : false,
        message : action.message
      })
  }
  return state
}