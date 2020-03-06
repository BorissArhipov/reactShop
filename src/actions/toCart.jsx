export const toCart = (newItem) => {
    return {
        type: 'TO_CART',
        payload: newItem
    };
};
