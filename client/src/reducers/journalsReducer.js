export default function(state = [], action) {
  switch (action.type) {
    case 'ADD_JOURNAL':
      return [...state, action.payload];
    case 'SET_JOURNALS':
      return action.payload;
    default:
      return state;
  }
}
