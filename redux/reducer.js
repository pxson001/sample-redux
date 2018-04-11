
export default function counter(state = {count : 0} , action = {}) {
  console.log(state);
  switch (action.type) {
    case 'INCREASE' :
      console.log('Action INCREASE');
      return {
        ...state,
        count: state.count + 1
      }
    case 'DECREASE' :
      console.log('Action DECREASE');
      return {
        ...state,
        count: state.count - 1
      }
  }
  
  return state;
}