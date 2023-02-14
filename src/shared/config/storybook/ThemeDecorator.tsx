import { Story } from '@storybook/api';
import { Theme, ThemeProvider } from 'app/providers/ThemeProvider';

export const ThemeDecorator = (Story: Story) => (
  <div className={Theme.LIGHT}>
    <Story />
  </div>
);
