 Test generated by RoostGPT for test EmojiSearch using AI Type Open AI and AI Model gpt-4

import React from 'react';
import { shallow } from 'enzyme';
import SearchInput from './SearchInput';

describe('SearchInput', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<SearchInput />);
  });

  test('renders without crashing', () => {
    expect(wrapper.exists()).toBe(true);
  });

  test('has an input field', () => {
    expect(wrapper.find('input').length).toEqual(1);
  });

  test('input field initially empty', () => {
    expect(wrapper.find('input').prop('value')).toEqual('');
  });

  test('input field changes when text is entered', () => {
    const input = wrapper.find('input');
    input.simulate('change', { target: { value: 'test' } });
    expect(wrapper.find('input').prop('value')).toEqual('test');
  });
});