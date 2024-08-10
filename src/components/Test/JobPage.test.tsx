import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { JobPage } from '../JobPage/JobPage';

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve([{ id: 1, jobTitle: 'Software Engineer', location: 'Remote', jobType: 'Remote', salary: '$1000', description: 'A great job!' }]),
  })
) as jest.Mock;

describe('JobPage', () => {
  test('displays loading message initially', () => {
    render(<JobPage />);
    expect(screen.getByText(/Loading.../i)).toBeInTheDocument();
  });

  test('displays job list after loading', async () => {
    render(<JobPage />);

    await waitFor(() => {
      expect(screen.getByText('Software Engineer')).toBeInTheDocument();
      expect(screen.getByText('Remote')).toBeInTheDocument();
      expect(screen.getByText('Remote')).toBeInTheDocument();
      expect(screen.getByText('$1000')).toBeInTheDocument();
      expect(screen.getByText('A great job!')).toBeInTheDocument();
    });
  });

  test('handles fetch error', async () => {
    global.fetch = jest.fn(() => Promise.reject(new Error('Failed to fetch'))) as jest.Mock;

    render(<JobPage />);

    await waitFor(() => {
      expect(screen.getByText(/Loading.../i)).toBeInTheDocument();
    });
  });
});
