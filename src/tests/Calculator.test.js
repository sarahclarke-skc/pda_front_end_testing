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
    expect(runningTotal.text()).toEqual('5');
  })

  it('should subtract one number from another', () => {
    const button7 = container.find('#number7');
    const button4 = container.find('#number4');
    const subtractButton = container.find('#operator-subtract');
    const equalButton = container.find('#operator-equals');
    button7.simulate('click');
    subtractButton.simulate('click');
    button4.simulate('click');
    equalButton.simulate('click');
    const runningTotal = container.find('#running-total');
    expect(runningTotal.text()).toEqual('3');
  })

  it('should multiply two numbers', () => {
    const button3 = container.find('#number3');
    const button5 = container.find('#number5');
    const multiplyButton = container.find('#operator-multiply');
    const equalButton = container.find('#operator-equals');
    button3.simulate('click');
    multiplyButton.simulate('click');
    button5.simulate('click');
    equalButton.simulate('click');
    const runningTotal = container.find('#running-total');
    expect(runningTotal.text()).toEqual('15');
  })

  it('should divide two numbers', () => {
    const button2 = container.find('#number2');
    const button1 = container.find('#number1');
    const button7 = container.find('#number7');
    const divideButton = container.find('#operator-divide');
    const equalButton = container.find('#operator-equals');
    button2.simulate('click');
    button1.simulate('click');
    divideButton.simulate('click');
    button7.simulate('click');
    equalButton.simulate('click');
    const runningTotal = container.find('#running-total');
    expect(runningTotal.text()).toEqual('3');
  })

  it('should concatenate number button clicks', () => {
    const button2 = container.find('#number2');
    const button1 = container.find('#number1');
    const button7 = container.find('#number7');
    const equalButton = container.find('#operator-equals');
    button2.simulate('click');
    button1.simulate('click');
    button7.simulate('click');
    equalButton.simulate('click');
    const runningTotal = container.find('#running-total');
    expect(runningTotal.text()).toEqual('217');
  })

  it('should chain multiple operations together', () => {
    const button2 = container.find('#number2');
    const button1 = container.find('#number1');
    const button7 = container.find('#number7');
    const button4 = container.find('#number4')
    const addButton = container.find('#operator_add');
    const divideButton = container.find('#operator-divide');
    const equalButton = container.find('#operator-equals');
    button2.simulate('click');
    button1.simulate('click');
    divideButton.simulate('click');
    button7.simulate('click');
    equalButton.simulate('click');
    addButton.simulate('click');
    button4.simulate('click');
    equalButton.simulate('click');
    const runningTotal = container.find('#running-total');
    expect(runningTotal.text()).toEqual('7');
  })

  it('should change the running total, affecting the calculation', () => {
    const button1 = container.find('#number1');
    const button4 = container.find('#number4');
    const addButton = container.find('#operator_add');
    const equalButton = container.find('#operator-equals');
    const runningTotal = container.find('#running-total');
    const clearButton = container.find('#clear')
    button1.simulate('click');
    addButton.simulate('click');
    button4.simulate('click');
    equalButton.simulate('click');
    expect(runningTotal.text()).toEqual('5');
    clearButton.simulate('click')
    expect(runningTotal.text()).toEqual('0');
  })



 
})

