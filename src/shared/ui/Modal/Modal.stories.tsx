import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';

import { Modal } from './Modal';

export default {
  title: 'Example/Modal',
  component: Modal,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

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
