const itemsRequested = () => {
    return {
        type: 'FETCH_ITEMS_REQUEST'
    };
};

const itemsLoaded = (newItems) => {
    return {
        type: 'FETCH_ITEMS_SUCCESS',
        payload: newItems
    };
};

const itemsError = (error) => {
    return {
        type: 'FETCH_ITEMS_FAILURE',
        payload: error
    };
};

const fetchItems = (reactShopService) => () => (dispatch) => {
    dispatch(itemsRequested());
    reactShopService.getShopItems()
        .then((data) => dispatch(itemsLoaded(data)))
        .catch((err) => dispatch(itemsError(err)));
};

export {
    fetchItems
};