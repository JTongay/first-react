import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Test from './Test';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

it('shows a booyah', () => {
  const div = document.createElement('div');
  const booyah = document.getElementById('testing')
  console.log(booyah);
  ReactDOM.render(<App />, div);
  expect(booyah.innerText).toBe('yo');
})
