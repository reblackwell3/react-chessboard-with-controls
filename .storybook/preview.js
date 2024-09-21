/** @type { import('@storybook/react').Preview } */
import { addDecorator } from '@storybook/react';
import withThemeProvider from '@stories/withThemeProvider';
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
