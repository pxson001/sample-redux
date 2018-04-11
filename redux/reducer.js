
export default function counter(state = {count : 0} , action) {
  switch (action.type) {
    case 'INCREASE' :
      return {
        count: state.count + 1
      }
    case 'DECREASE' :
      return {
        count: state.count - 1
      }
  }
  return state;
}