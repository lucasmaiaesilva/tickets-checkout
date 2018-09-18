import React from 'react';
import { shallow, mount } from 'enzyme';
import TicketDescription from './';

describe('[Component] TicketDescription', () => {
  const text = 'hello world!';
  it('render correctly', () => {
    const wrapper = shallow(<TicketDescription text={text} />);
    expect(wrapper).toMatchSnapshot();
  });
  it('test opened state', () => {
    const wrapper = mount(<TicketDescription text={text} />);
    wrapper.find('button').simulate('click');
    expect(wrapper.find('button').text()).toBe('Ocultar Descrição');
    expect(wrapper.find('p').text()).toBe('hello world!');
    expect(wrapper).toMatchSnapshot();
  });

  it('test closed state', () => {
    const wrapper = mount(<TicketDescription text={text} />);
    expect(wrapper.find('button').text()).toBe('Mostrar Descrição');
    expect(wrapper).toMatchSnapshot();
  });
});
