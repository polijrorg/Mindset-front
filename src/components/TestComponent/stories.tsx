import { Story, Meta } from '@storybook/react/types-6-0';
import React from 'react';
import Test, { TestProps } from '.';

export default {
    title: 'Commons/Test',
    component: Test,
    args: {
        title: 'Apenas um Teste'
    }
} as Meta;

export const Default: Story<TestProps> = (args) => <Test {...args} />;
