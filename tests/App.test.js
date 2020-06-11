import React from 'react';
import App from '../components/App';
import 'react-native-gesture-handler';
import renderer from 'react-test-renderer';
import {shallow} from 'enzyme';

test('App component renders successfully', async () => {
  const tree = renderer.create(<App />).toJSON();
  expect(tree).toMatchSnapshot();
  shallow(<App />);
});