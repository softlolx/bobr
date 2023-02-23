import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { componentRender } from 'shared/lib/tests/componentRender';
import { Counter } from './Counter';

describe('Counter tests', () => {
  test('simle rendering test', () => {
    componentRender(<Counter />, { initialState: { counter: { value: 10 } } });
    expect(screen.getByTestId('counter-value')).toHaveTextContent('10');
  });
  test('inc test', () => {
    componentRender(<Counter />, { initialState: { counter: { value: 10 } } });
    userEvent.click(screen.getByTestId('inc-button'));
    expect(screen.getByTestId('counter-value')).toHaveTextContent('11');
  });
  test('dec test', () => {
    componentRender(<Counter />, { initialState: { counter: { value: 10 } } });
    userEvent.click(screen.getByTestId('dec-button'));
    expect(screen.getByTestId('counter-value')).toHaveTextContent('9');
  });
});
