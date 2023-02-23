import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider';
import { ReactNode } from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

interface componentRenderProps {
  route?: string;
  initialState?: DeepPartial<StateSchema>;
}

export const componentRender = (component: ReactNode, options: componentRenderProps = {}) => {
  const { route = '/', initialState } = options;

  return render(
    <StoreProvider initialState={initialState}>
      <MemoryRouter initialEntries={[route]}>{component}</MemoryRouter>
    </StoreProvider>
  );
};
