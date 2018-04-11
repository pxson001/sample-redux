import { connect } from 'react-redux'
import { increase, decrease } from '../redux/action';
import Counter from '../components/counter'

const mapStateToProps = state => {
  return {
    count: state.count
  };
}

const mapDispatchToProps = dispatch => {
  return {
    onIncrement: () => dispatch(increase()),
    onDecrease: () => dispatch(decrease())
  }
}

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(Counter);