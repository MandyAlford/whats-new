import { render } from '@testing-library/react';
import NewsArticle from './NewsArticle';
import React from 'react';

describe('NewsArticle', () => {
  it('renders headline that we expect', () => {
    const { getByText } = render(<NewsArticle
      articleItem={{
        id: 1,
        headline: 'a headline',
        img: 'https://a.jpg',
        description: 'a description',
        url: 'https://b.com'
      }}
      />);

      const headlineElement = getByText('a headline');
      const descriptionElement = getByText('a description');
      expect(headlineElement).toBeInTheDocument
      expect(descriptionElement).toBeInTheDocument
  });
});
