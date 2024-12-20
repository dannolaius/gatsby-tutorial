import { afterEach, describe, expect, it } from '@jest/globals';
import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Counter from '../Counter';

describe('counter', () => {
// Disable eslint for buggy case
  // eslint-disable-next-line jest/no-hooks
  afterEach(() => {
    cleanup();
  });

  it('counter increments the count', async () => {
    render(<Counter />);
    const user = userEvent.setup();
    const counter = screen.getByText(/Current count/i);

    expect(counter).toHaveTextContent('Current count: 0');

    await user.click(screen.getByText(/Increment/i));

    expect(counter).toHaveTextContent('Current count: 1');
  });
});
