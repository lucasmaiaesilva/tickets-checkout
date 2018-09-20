import React from 'react';
import { shallow, mount } from 'enzyme';
import Card from './';

describe('[Component] Card', () => {
  const props = {
    number: 1,
    price: 1000,
    taxes: 1,
    quantities: [1, 2, 3],
    handleChange: jest.fn(),
    id: 'asd',
    discount: 1,
    description: 'hello world',
  };
  it('render inactive', () => {
    const wrapper = shallow(<Card {...props} disabled />);
    expect(wrapper).toMatchSnapshot();
  });
  it('render Active card', () => {
    const wrapper = shallow(<Card {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});

