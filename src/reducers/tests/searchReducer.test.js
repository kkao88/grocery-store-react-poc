import { updateSearchQuery } from '../searchReducer';
import searchReducer from '../searchReducer';

describe('updateMovieSearch', () => {
    const initialState0 = {
        test: 'a',
        blah: 'b',
    };

    const initialState1 = {
        test: 'a',
        blah: 'b',
        searchText: 'c',
    };

    const payload = { searchText: 'my text' };

    const finalState = {
        test: 'a',
        blah: 'b',
        searchText: 'my text',
    };

    it('should return a new object', () => {
        expect(updateSearchQuery(initialState0, payload)).toEqual(finalState);
    });

    it('should return a new state with the modified search text', () => {
        expect(updateSearchQuery(initialState0, payload)).toEqual(finalState);
        expect(updateSearchQuery(initialState1, payload)).toEqual(finalState);
    });
});

describe('clearSearchQuery', () => {

    const initialState1 = {
        test: 'a',
        blah: 'b',
        searchText: 'c',
    };

    const finalState = {
        test: 'a',
        blah: 'b',
        searchText: '',
    };

    it('should clear searchText', () => {
        expect(searchReducer(initialState1, {type: 'clearSearchQuery', payload: {}})).toEqual(finalState);
    });
});