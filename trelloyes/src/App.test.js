import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import App from './App';
import { exportAllDeclaration } from '@babel/types';
import STORE from './store';

//Smoke Tests
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe('<App />', () => {
  const snap = renderer.create(<App />).toJSON();
  expect(snap).toMatchSnapshot();
})
