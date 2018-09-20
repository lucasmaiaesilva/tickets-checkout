import React from 'react';
import { shallow, mount } from 'enzyme';
import Button from './';

describe('[Component] Button', () => {
  const text = 'hello world!';
  it('render correctly', () => {
    const wrapper = shallow(<Button>{text}</Button>);
    expect(wrapper).toMatchSnapshot();
  });
});

