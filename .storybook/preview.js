import { addDecorator } from '@storybook/react';
import withThemeProvider from './path/to/withThemeProvider';
/** @type { import('@storybook/react').Preview } */
const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

addDecorator(withThemeProvider);

export default preview;
