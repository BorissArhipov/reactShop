const updateItemsList = (state, action) => {
    if (state === undefined) {
        return {
            allItems: [],
            itemsForPages: [],
            loading: true,
            error: null,
            searchWord: ''
        };
    } 
    switch (action.type) { 
        case 'FETCH_ITEMS_REQUEST':
            return {
                ...state,
                itemsForPages: [],
                loading: true,
                error: null
            };

        case 'CHANGE_SEARCH_WORD':
            let gotAllItems;
            let sortedSearchedLists = [];
            if(action.payload.length === 0) {
                gotAllItems = [...state.allItems];
            } else if(action.payload.length > 0) {
                gotAllItems = [...state.allItems].filter(item => {
                    return item.title.toLowerCase().indexOf(action.payload.toLowerCase()) > -1;
                })
            }
            while(gotAllItems.length > 6) {
                sortedSearchedLists.push([...gotAllItems.slice(0, 6)]);
                gotAllItems.splice(0, 6);
            }
            if(gotAllItems.length < 6 && gotAllItems.length) {
                sortedSearchedLists.push([...gotAllItems]);
            }
            return {
                ...state,
                searchWord: action.payload,
                itemsForPages: sortedSearchedLists,
            };
    
        case 'SAVE_ITEMS':
            return {
                ...state,
                allItems: action.payload
            };
    

        case 'FETCH_ITEMS_SUCCESS':
            let gotItems = [...action.payload];
            let sortedLists = [];
            while(gotItems.length > 6) {
                sortedLists.push([...gotItems.slice(0, 6)]);
                gotItems.splice(0, 6);
            }
            if(gotItems.length < 6 && gotItems.length) {
                sortedLists.push([...gotItems]);
            }
            return {
                ...state,
                itemsForPages: sortedLists,
                loading: false,
                error: null
            };
    
        case 'FETCH_ITEMS_FAILURE':
            return {
                ...state,
                itemsForPages: [],
                loading: false,
                error: action.payload
            };

        
        default:
            return state;
        }
  };
  
  export default updateItemsList;
  