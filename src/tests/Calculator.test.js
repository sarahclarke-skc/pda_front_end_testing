import React from 'react';
import Calculator from '../containers/Calculator';
import {mount, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

describe('Calculator', () => {
  let container;
  beforeEach(() => {
    container = mount(<Calculator/>)
  })

  it('should change running total on number enter', () => {
    const button4 = container.find('#number4');
    const runningTotal = container.find('#running-total');
    button4.simulate('click');
    expect(runningTotal.text()).toEqual('4');
  })

  it('should add two numbers together', () => {
    const button1 = container.find('#number1');
    const button4 = container.find('#number4');
    const addButton = container.find('#operator_add');
    const equalButton = container.find('#operator-equals');
    button1.simulate('click');
    addButton.simulate('click');
    button4.simulate('click');
    equalButton.simulate('click');
    const runningTotal = container.find('#running-total');
    expect(runningTotal.text().toEqual('5'));
  })

 
})

