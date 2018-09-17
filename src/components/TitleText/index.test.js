import React from 'react';
import { shallow } from 'enzyme';
import TitleText from './';

describe('[Component] TitleText', () => {
  const children = 'hello, world!'

  it('render correctly', () => {
    const wrapper = shallow(<TitleText children={children} />);
    expect(wrapper).toMatchSnapshot();
  });
  
});
