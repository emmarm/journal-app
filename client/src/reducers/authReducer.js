export default function(state = null, action) {
  switch (action.type) {
    case 'GET_CURRENT_USER':
      return action.payload;
    default:
      return state;
  }
}
