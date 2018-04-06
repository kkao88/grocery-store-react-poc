const initialState = {
    searchText: ''
};

export const updateSearchQuery = (state, payload) => {
    return {
        ...state,
        searchText: payload.searchText
    }
};

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case 'updateSearchQuery':
            return updateSearchQuery(state, payload);
        case 'clearSearchQuery':
            return updateSearchQuery(state, {searchText: ''});
        default:
            return state;
    }
};
