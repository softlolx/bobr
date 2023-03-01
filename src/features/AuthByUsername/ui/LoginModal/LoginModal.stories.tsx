import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';

import { LoginModal } from './LoginModal';

export default {
  title: 'Example/LoginModal',
  component: LoginModal,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof LoginModal>;

const Template: ComponentStory<typeof LoginModal> = (args) => <LoginModal {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  isOpen: true,
  children: 'Text',
};

export const Dark = Template.bind({});
Dark.args = {
  isOpen: true,
  children: 'Text',
};

Dark.decorators = [ThemeDecorator(Theme.DARK)];
