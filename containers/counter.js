import { connect } from 'react-redux'
import * as CounterActions from '../redux/counter/action';
import Counter from '../components/counter'

const mapStateToProps = state => ({
    counter: state.counter
})

const mapDispatchToProps = {
    onIncrement: CounterActions.increase,
    onDecrease: CounterActions.decrease,
    onDouble: CounterActions.double
}

export default connect( 
  mapStateToProps, 
  mapDispatchToProps
)(Counter); 