const _ = require('lodash');

const initialState = {
    items: [
    ]
};

export const addToCart = (state, payload) => {
    let processAddToCart = (state, payload) => {
        let payloadItem = payload.item;

        if (!state.items.find(function(item){
                return item.id == payloadItem.id;
            })){
            return state.items.concat([{...payloadItem, quantity: 1}]);
        }
        else {
            return state.items.map(function(item){
                if (item.id == payloadItem.id){
                    return {...item, quantity: item.quantity + 1}
                }
                else {
                    return item;
                }
            });
        }
    };

    return {
        ...state,
        items: processAddToCart(state, payload)
    }
};

export const deleteItemFromCart = (state, payload) => {
    return {
        ...state,
        items: state.items.filter(function(item){
            return item.id != payload.itemId
        })
    }
};

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case 'addToCart':
            return addToCart(state, payload);
        case 'deleteItemFromCart':
            return deleteItemFromCart(state, payload);
        default:
            return state;
    }
};
