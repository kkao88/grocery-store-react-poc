import vcs from '../constants/vcs.js'

const initialState = {
    categoryList: vcs,
    selectedCategory: ''
};

export const updateSelectedCategory = (state, payload) => {
    return {
        ...state,
        selectedCategory: payload.category
    }
};

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case 'updateSelectedCategory':
            return updateSelectedCategory(state, payload);
        case 'getCategories':
            return state.categoryList;
        default:
            return state;
    }
};
