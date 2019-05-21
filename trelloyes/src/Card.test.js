import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Card from './Card';


it('renders without crashing', () =>{
  const div = document.createElement('div');
  ReactDOM.render(<Card />, div);
  ReactDOM.unmountComponentAtNode(div);
})

describe('<Card />', () => {
  const snap = renderer.create(<Card />).toJSON();
  expect(snap).toMatchSnapshot();
})
