// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { Story } from '@storybook/api';
import { Theme, ThemeProvider } from 'app/providers/ThemeProvider';

export const ThemeDecorator = (theme: Theme) => (Story: Story) =>
  (
    <ThemeProvider initialTheme={theme}>
      <div className={`App ${theme}`}>
        <Story />
      </div>
    </ThemeProvider>
  );
