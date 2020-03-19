import React from 'react';
import ReactDOM from 'react-dom';
import Menu from './Menu';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';


describe('Menu', () => {

  it('should send the name of the category of news the user has clicked on to updateCurrentCategory', () => {
    const mockCurrentCategory = jest.fn();

    const { getByText } = render(<Menu
      updateCurrentCategory={mockCurrentCategory}
      />);

     fireEvent.click(getByText("Local"));
     expect(mockCurrentCategory).toHaveBeenCalled();

     fireEvent.click(getByText("Technology"));
     expect(mockCurrentCategory).toHaveBeenCalled();

     fireEvent.click(getByText("Entertainment"));
     expect(mockCurrentCategory).toHaveBeenCalled();

     fireEvent.click(getByText("Science"));
     expect(mockCurrentCategory).toHaveBeenCalled();

     fireEvent.click(getByText("Health"));
     expect(mockCurrentCategory).toHaveBeenCalled();
  })
})
