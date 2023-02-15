// @ts-nocheck
import { Story } from '@storybook/api';
import { Theme } from 'app/providers/ThemeProvider';

export const ThemeDecorator = (theme: Theme) => (Story: Story) =>
  (
    <div className={`App ${theme}`}>
      <Story />
    </div>
  );
