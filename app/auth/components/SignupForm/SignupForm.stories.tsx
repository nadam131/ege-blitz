import React from "react"
import { ComponentStory, ComponentMeta } from "@storybook/react"

import { Fields } from "."

export default {
  title: "Forms/SignupForm/Fields",
  component: Fields,
} as ComponentMeta<typeof Fields>

const Template: ComponentStory<typeof Fields> = () => <Fields />

export const Default = Template.bind({})
Default.args = {}
