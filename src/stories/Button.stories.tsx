import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from '../components/Button';
import { ThemeProvider } from '../theme/ThemeProvider';
import defaultTheme from '../theme/defaultTheme';

export default {
  title: 'Example/Button',
  component: Button,
  decorators: [
    (Story) => (
      <ThemeProvider theme={defaultTheme}>
        <Story />
      </ThemeProvider>
    ),
  ],
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  label: 'Click me',
  type: 'button',
  name: 'Example',
  disabled: false,
  onClick: () => {
    alert('Hello!');
  },
};
