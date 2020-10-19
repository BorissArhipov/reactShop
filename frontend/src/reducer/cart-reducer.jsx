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
                        ...state.cartItems.slice(0, indexOfExistingElement),
                        {
                            title: action.payload.title,
                            id: action.payload.id,
                            price: action.payload.price,
                            itemCount: state.cartItems[indexOfExistingElement].itemCount += 1
                        },
                        ...state.cartItems.slice(indexOfExistingElement + 1, state.cartItems.length)
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
        case 'DELETE_FROM_CART':
            const indexOfDeletingElement = state.cartItems.indexOf(state.cartItems.find(el => el.id === action.payload.id));
            if(state.cartItems.find(el => el.id === action.payload.id && el.itemCount >= 2)) {
                return {
                    cartItems: [
                        ...state.cartItems.slice(0, indexOfDeletingElement),
                        {
                            title: action.payload.title,
                            id: action.payload.id,
                            price: action.payload.price,
                            itemCount: state.cartItems[indexOfDeletingElement].itemCount -= 1
                        },
                        ...state.cartItems.slice(indexOfDeletingElement + 1, state.cartItems.length)
                    ],
                    count: state.count -= 1,
                    sum: state.sum -= action.payload.price
                }
            } else if(state.cartItems.find(el => el.id === action.payload.id && el.itemCount === 1)) {
                return {
                    cartItems: [
                        ...state.cartItems.slice(0, indexOfDeletingElement),
                        ...state.cartItems.slice(indexOfDeletingElement + 1, state.cartItems.length)
                    ],
                    count: state.count -= 1,
                    sum: state.sum -= action.payload.price
                };
            }
        case 'EMPTY_CART':    
            return {
                ...state,
                cartItems: [],
                count: 0,
                sum: 0
            }

        default:
            return state;
        }
  };
  
export default updateCart;
  