import React from 'react';
// using mount because useEfect is not being called with shallow, it's a bug and could be fixed by now...
// https://github.com/airbnb/enzyme/issues/2086
import { mount } from 'enzyme';
import { findByTestAttr } from '../test/testUtils';
import App from './App';
import hookActions from './actions/hookActions';

const mockGetSecretWord = jest.fn();

const setup = () => {
  // clearing the mock before every setup call so it wont affect the other tests
  mockGetSecretWord.mockClear();
  // mocking the getSecretWord function
  hookActions.getSecretWord = mockGetSecretWord;

  return mount(<App />);
};

test('App renders without errors', () => {
  const wrapper = setup();
  const component = findByTestAttr(wrapper, 'component-app');
  expect(component.length).toBe(1);
});

describe('getSecretWord calls', () => {
  test('getSecretWord gets called on App mount', () => {
    setup(); // no need to save the output of setup for this test

    // check to see if secretWord was updated
    expect(mockGetSecretWord).toHaveBeenCalled();
  });
});
