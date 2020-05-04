import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders the timeline', () => {
  const { getByTestId } = render(<App />);
  const timeline = getByTestId("timeline");
  expect(timeline).toBeInTheDocument();
});
