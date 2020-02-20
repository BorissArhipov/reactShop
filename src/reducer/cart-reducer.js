const updateCart = (state, action) => {
    if (state === undefined) {
        return {
            cartItems: [],
            count: 0,
            sum: 0
        };
    }
    switch (action.type) { 
        case 'TO_CART':
            if(state.cartItems.find(el => el.id === action.payload.id)) {
                const indexOfExistingElement = state.cartItems.indexOf(state.cartItems.find(el => el.id === action.payload.id));
                return {
                    cartItems: [
                        ...state.cartItems.filter(el => el.id !== action.payload.id),
                        {
                            title: action.payload.title,
                            id: action.payload.id,
                            price: action.payload.price,
                            itemCount: state.cartItems[indexOfExistingElement].itemCount += 1
                        } 
                    ],
                    count: state.count += 1,
                    sum: state.sum += action.payload.price
                }
            }
            return {
                cartItems: [
                    ...state.cartItems,
                    {
                        title: action.payload.title,
                        id: action.payload.id,
                        price: action.payload.price,
                        itemCount: 1
                    } 
                ],
                count: state.count += 1,
                sum: state.sum += action.payload.price
            };

        default:
            return state;
        }
  };
  
export default updateCart;
  