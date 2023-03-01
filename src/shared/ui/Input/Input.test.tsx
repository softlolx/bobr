import { Input } from 'shared/ui/Input/Input';
import { render, screen } from '@testing-library/react';

describe('input tests', () => {
  test('simple rendering test', () => {
    render(<Input type='text' value='test' placeholder='test' onChange={() => null} />);
    expect(screen.getByPlaceholderText('test')).toBeInTheDocument();
  });
});
