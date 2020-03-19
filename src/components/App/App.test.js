import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('App', () => {

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  // describe('updateCurrentArticles', () => {
  //   xit('can set currentCategory in state', () => {
  //     let app = new App
  //
  //     const event = {
  //       target: {
  //         textContent: 'Technology'
  //       }
  //     }
  //
  //     app.updateCurrentArticles(event)
  //
  //     expect(app.state.currentCategory).toEqual('technology')
  //   })
  // })
});
