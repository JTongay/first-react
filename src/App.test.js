import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-addons-test-utils' // ES6
import App from './App';
import Test from './Test';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

it('should show a booyah', ()=>{
  const renderer = ReactTestUtils.createRenderer();
  renderer.render(<Test />);
  const result = renderer.getRenderOutput();
  console.log(result);
  expect(result.type).toBe('h1')
  expect(result.props.children).toBe('Booyah')
})
