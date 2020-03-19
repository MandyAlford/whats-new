import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

describe('App', () => {

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  describe('updateCurrentArticles', () => {
    xit('can set currentCategory in state', () => {
      // let app = new App
      //
      // const event = {
      //   target: {
      //     textContent: 'Technology'
      //   }
      // }
      //
      // app.updateCurrentArticles(event)
      // 
      // expect(app.state.currentCategory).toEqual('technology')
    })
  })
});
