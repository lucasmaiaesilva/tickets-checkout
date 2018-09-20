
import React from 'react';
import { shallow } from 'enzyme';
import TotalInfo from './';

describe('[Component] TotalInfo', () => {
  const commomProps = {
    title: 'Example of title',
    price: '1.000,00'
  };
  it('render correctly with whole props', () => {
    const wrapper = shallow(<TotalInfo {...commomProps} extra="extra text" />);
    expect(wrapper).toMatchSnapshot();
  })
  it('render correctly without extra text', () => {
    const wrapper = shallow(<TotalInfo {...commomProps} />);
    expect(wrapper).toMatchSnapshot();
  });
  it('render correctly with discount flag', () => {
    const wrapper = shallow(<TotalInfo {...commomProps} withDiscount />);
    expect(wrapper).toMatchSnapshot();
  });
});
