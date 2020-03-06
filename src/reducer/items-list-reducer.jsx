const updateItemsList = (state, action) => {
    if (state === undefined) {
        return {
            itemsForPages: [],
            loading: true,
            error: null
        };
    }
  
    switch (action.type) { 
        case 'FETCH_ITEMS_REQUEST':
            return {
                itemsForPages: [],
                loading: true,
                error: null
            };
    
        case 'FETCH_ITEMS_SUCCESS':
            let gotItems = action.payload;
            let sortedLists = [];
            while(gotItems.length > 6) {
                sortedLists.push([...gotItems.slice(0, 6)]);
                gotItems.splice(0, 6);
            }
            if(gotItems.length < 6 && gotItems.length) {
                sortedLists.push([...gotItems]);
            }
            return {
                itemsForPages: sortedLists,
                loading: false,
                error: null
            };
    
        case 'FETCH_ITEMS_FAILURE':
            return {
                itemsForPages: [],
                loading: false,
                error: action.payload
            };
    
        default:
            return state;
        }
  };
  
  export default updateItemsList;
  