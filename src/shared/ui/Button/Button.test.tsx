import { Button } from 'shared/ui/Button/Button';
import { render, screen } from '@testing-library/react';

describe('button tests', () => {
  test('simple rendering test', () => {
    render(<Button>test</Button>);
    expect(screen.getByText('test')).toBeInTheDocument();
  });
});
