import React from "react";
import Input from "./Input";
import {ComponentMeta, ComponentStory} from '@storybook/react'

const mainComponent: ComponentMeta<typeof Input> = {
  title: 'Input Generico',
  component: Input
} 

export const Text: ComponentStory<typeof Input> = (args) => <Input {...args} />
Text.args = {
  type: 'checkbox',
  label: 'label'
}

export default mainComponent