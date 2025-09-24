import { TestComponent } from './TestComponent';

export default {
  title: 'Test/TestComponent',
  component: TestComponent,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    text: {
      control: 'text',
      description: 'Text to display in the component',
    },
  },
};

export const Default = {
  args: {
    text: 'Hello from Test Component!',
  },
};

export const CustomText = {
  args: {
    text: 'This is a custom message to test our component.',
  },
};