import 'react-native';
import renderer from 'react-test-renderer';
import {App} from './App';
import React from 'react';

test('renders correctly', () => {
  const tree = renderer.create(<App />);
  expect(tree).toBeDefined();
});
