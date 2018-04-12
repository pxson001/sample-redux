import axios from 'axios'

export const FETCH_NEWS_REQUEST = 'FETCH_NEWS_REQUEST'
export const FETCH_NEWS_SUCCESS = 'FETCH_NEWS_SUCCESS'
export const FETCH_NEWS_FAILURE = 'FETCH_NEWS_FAILURE'


export const fetchRequest = () => ({
  type: FETCH_NEWS_REQUEST
})

export const fetchRequestSuccess = (posts) => ({
  type: FETCH_NEWS_SUCCESS,
  posts: posts
})

export const fetchRequestFailure = (message) => ({
  type: FETCH_NEWS_FAILURE,
  message: message
})

export const fetchNews = () => (dispatch, getState) => {
  dispatch(fetchRequest())

  axios.get('https://jsonplaceholder.typicode.com/posts')
       .then(response => response.data)
       .then((posts) => {
          dispatch(fetchRequestSuccess(posts))
       })
}