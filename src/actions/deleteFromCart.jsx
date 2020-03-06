export const deleteFromCart = (itemToDelete) => {
    return {
        type: 'DELETE_FROM_CART',
        payload: itemToDelete
    };
};
