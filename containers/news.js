import { connect } from 'react-redux'
import * as NewsActions from '../redux/news/action';
import News from '../components/news'

const mapStateToProps = state => ({
    isFetching : state.news.isFetching,
    posts : state.news.posts
})

const mapDispatchToProps = {
    onFetch: NewsActions.fetchNews
}

export default connect( 
  mapStateToProps, 
  mapDispatchToProps
)(News); 