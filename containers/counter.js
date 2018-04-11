import { connect } from 'react-redux'
import { increase, decrease } from '../redux/action';
import Counter from '../components/counter'

const mapStateToProps = state => ({
    counter: state.counter
})

const mapDispatchToProps = {
    onIncrement: increase,
    onDecrease: decrease
}

export default connect( 
  mapStateToProps, 
  mapDispatchToProps
)(Counter); 