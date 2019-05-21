import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import List from './List';

it('renders without crashing', () =>{
  const div = document.createElement('div');
  ReactDOM.render(<List header="MyHeader" cards={[]}/> , div);
  ReactDOM.unmountComponentAtNode(div);
})

//Snapshot Tests
describe('<List />', () => {
  const snap = renderer.create(<List header="MyHeader" cards={[]}/>).toJSON();
  expect(snap).toMatchSnapshot();
})