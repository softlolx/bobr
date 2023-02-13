import { fireEvent, getByTestId, render, screen } from '@testing-library/react';
import { Sidebar } from './Sidebar';

describe('sidebar tests', () => {
  test('simle rendering test', () => {
    render(<Sidebar />);
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
  });

  test('toggling sidebar test', () => {
    render(<Sidebar />);
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();

    const toggleBtn = screen.getByTestId('sidebar__toggleBtn');

    fireEvent.click(toggleBtn);

    expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
  });
});
