import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import App from './App';

// Mock the fetch function and provide a fake response
global.fetch = jest.fn().mockResolvedValue({
  json: jest.fn().mockResolvedValue([
    { _id: '1', name: 'Activity 1', time: '10 mins' },
    { _id: '2', name: 'Activity 2', time: '20 mins' },
  ]),
});

describe('App', () => {
  test('renders the app', async () => {
    render(<App />);

    // Check that the title is rendered
    expect(screen.getByText('Productivity Tracker')).toBeInTheDocument();

    // Check that the activities are fetched and rendered
    await waitFor(() => {
      expect(screen.getByText('Activity 1 - 10 mins')).toBeInTheDocument();
    });
  });

  test('adds a new activity', async () => {
    render(<App />);

    // Fill in the activity form and submit
    fireEvent.change(screen.getByLabelText('Activity:'), {
      target: { value: 'New Activity' },
    });
    fireEvent.change(screen.getByLabelText('Time Taken:'), {
      target: { value: '30 mins' },
    });
    fireEvent.click(screen.getByText('Add'));

    // Check that the form is cleared and the new activity is added
    await waitFor(() => {
      expect(screen.getByLabelText('Activity:')).toHaveValue('');
    });
  });
});
