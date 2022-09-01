import React from "react";
import { ComponentMeta } from "@storybook/react";
import { within, userEvent } from "@storybook/testing-library";
import Page from "./Page";

export default {
  title: "Example/Page",
  component: Page,
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof Page>;

// add ComponentStory in import
// :ComponentStory<typeof Page>

function Template(args) {
  return <Page {...args} />;
}

export const LoggedOut = Template.bind({});

export const LoggedIn = Template.bind({});

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
LoggedIn.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const loginButton = await canvas.getByRole("button", { name: /Log in/i });
  await userEvent.click(loginButton);
};
