import React from 'react';
import { shallow, mount } from 'enzyme';
import Select from './';

describe('[Component] Button', () => {
  const props = {
    quantities: [2, 3, 4, 5],
    ticketId: 'asd',
    handleChange: jest.fn(),
    price: 400,
    discount: 2,
  };
  it('render correctly', () => {
    const wrapper = shallow(<Select {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
  it('render correctly when disabled', () => {
    const wrapper = shallow(<Select {...props} disabled />);
    expect(wrapper).toMatchSnapshot();
  });
  it('test handleChange callback', () => {
    const wrapper = mount(<Select {...props} />);
    wrapper.find('select').simulate('change');
    expect(props.handleChange).toHaveBeenCalled();
  });
});

