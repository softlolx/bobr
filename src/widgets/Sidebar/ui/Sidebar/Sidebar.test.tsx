import { fireEvent, getByTestId, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Sidebar } from './Sidebar';

describe('sidebar tests', () => {
  test('simle rendering test', () => {
    render(
      <MemoryRouter>
        <Sidebar />
      </MemoryRouter>
    );
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
  });

  test('toggling sidebar test', () => {
    render(
      <MemoryRouter>
        <Sidebar />
      </MemoryRouter>
    );
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();

    const toggleBtn = screen.getByTestId('sidebar__toggleBtn');

    fireEvent.click(toggleBtn);

    expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
  });
});
