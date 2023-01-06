import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from './Button';

export default {
  title: 'Example/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  label: 'Click me',
  theme: {
    backgroundColor: 'dodgerblue',
    color: 'white',
    borderRadius: '8px',
  },
  type: 'button',
  name: 'Example',
  disabled: false,
};
