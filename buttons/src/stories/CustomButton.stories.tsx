import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import CustomButton from '../CustomButton/CustomButton';

export default {
    title: 'Example/Button',
    component: CustomButton,

} as ComponentMeta<typeof CustomButton>;

const Template: ComponentStory<typeof CustomButton> = (args) => <CustomButton {...args} />;

export const RedButton = Template.bind({});
RedButton.args = {
    color: "red",
    children: "Some random text",

};

export const BigBlueButton = Template.bind({});
BigBlueButton.args = {
    color: 'blue',
    children: "Some random text",
    big: true,
};

