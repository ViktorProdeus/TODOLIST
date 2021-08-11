import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import {action} from "@storybook/addon-actions";
import {Task, TaskPropsType} from "./Task";

export default {
    title: 'Todolist/Task',
    component: Task,
    argTypes: {
        onclick: {
            description: 'Button inside from clicked',
        }
    },
} as ComponentMeta<typeof Task>;

const changeTaskStatusCallback = action('Status changed inside Task');
const changeTaskTitleCallback = action('Title changed inside Task');
const removeTaskCallback = action('Remove Button inside Task clicked');

const Template: ComponentStory<typeof Task> = (args: TaskPropsType) => <Task {...args} />;

const baseArgs = {
    changeTaskStatus: changeTaskStatusCallback,
    changeTaskTitle: changeTaskTitleCallback,
    removeTask: removeTaskCallback
}

export const TaskIsDoneExample = Template.bind({});
TaskIsDoneExample.args = {
    ...baseArgs,
    task: {id: '1', isDone: true, title: "JS"},
    todolistId: 'todolist1',
};

export const TaskIsNotDoneExample = Template.bind({});
TaskIsNotDoneExample.args = {
    ...baseArgs,
    task: {id: '2', isDone: false, title: "JS"},
    todolistId: 'todolist1',
};

