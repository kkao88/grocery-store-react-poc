import React from 'react';
import {shallow} from 'enzyme';

import Vertical from './Vertical.js';

import { MemoryRouter as Router } from 'react-router-dom';
import renderer from 'react-test-renderer';

it('Vertical renders correctly', () => {
    const props = {
        paramCategory : 1,
        category: {
            id: 1,
            name: 'cat1',
            categories: [{
                name: 'cat2',
                id: 2
            },
                {name: 'cat3', id: 3}]
        },
        onChange: (i) => { return i; },
        onClearSearch: function(){}
    };
    const tree = renderer
        .create(<Router><Vertical {...props} /></Router>)
        .toJSON();
    expect(tree).toMatchSnapshot();
});

describe('test Vertical methods', function(){
    let props1 = {
        paramCategory : 2,
        category: {
            id: 1
        }
    };
    it('should return false if not selected category', function(){
        const wrapper = shallow(<Vertical {...props1} />);
        expect(wrapper.instance().isSelectedCategory()).toBeFalsy();
    });

    let props2 = {
        paramCategory : '1',
        category: {
            id: 1
        }
    };

    it('should return true if selected category', function(){
        const wrapper = shallow(<Vertical {...props2} />);
        expect(wrapper.instance().isSelectedCategory()).toBeTruthy();
    });
});