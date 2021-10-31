import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import {action} from "@storybook/addon-actions";
import {Task} from "./Task";


// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export

export default {
    title: 'TODOLISTS/Task',
    component: Task,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    args: {
        removeTask: action('removeTask'),
        changeTaskStatus: action('changeTaskStatus'),
        changeTaskTitle: action('changeTaskTitle'),
    },
} as ComponentMeta<typeof Task>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Task> = (args) => <Task {...args} />;

export const TaskIsDoneStories = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
TaskIsDoneStories.args = {
    task: {id: '1', isDone: true, title: 'JS'},
};
export const TaskIsNoteDoneStories = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
TaskIsNoteDoneStories.args = {
    task: {id: '1', isDone: false, title: 'JS'},
};

