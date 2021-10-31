import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import AppWithRedux from "./AppWithReduxr";
import {ReduxStorieProviderDecorator} from "./stories/ReduxStorieProviderDecorator";


// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export

export default {
    title: 'TODOLISTS/AppWithRedux',
    component: AppWithRedux,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    decorators: [ReduxStorieProviderDecorator]

} as ComponentMeta<typeof AppWithRedux>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof AppWithRedux> = () => <AppWithRedux/>;

export const AppWithReduxStories = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args


