import { withRouter } from 'storybook-addon-react-router-v6';
import { StoreDecorator } from '../../src/shared/config/storybook/StoreDecorator';
import { Theme } from '../../src/app/providers/ThemeProvider/lib/ThemeContext';
import { ThemeDecorator } from '../../src/shared/config/storybook/ThemeDecorator';
import '../../src/app/styles/index.scss';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [
  withRouter,
  ThemeDecorator(Theme.LIGHT),
  StoreDecorator({
    login: { username: '123', password: '1213' },
    user: {
      authData: {
        username: '123',
        id: '1',
      },
    },
  }),
];
