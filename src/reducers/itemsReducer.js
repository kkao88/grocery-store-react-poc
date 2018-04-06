import items from '../constants/items.js'

const initialState = {
    itemList: items
};

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case 'getItems':
            return state.itemList;
        default:
            return state;
    }
};
