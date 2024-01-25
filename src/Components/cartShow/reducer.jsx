const initialState = {
    cartItems: []
  };
  
  const cartReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_TO_CART':
        // Handle adding to cart
        break;
      case 'UPDATE_QUANTITY':
        // Handle quantity update
        break;
      case 'REMOVE_FROM_CART':
        // Handle removing from cart
        break;
      default:
        return state;
    }
  };
  
  export default cartReducer;