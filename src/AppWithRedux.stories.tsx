import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import {action} from "@storybook/addon-actions";
import {AppWithRedux} from "./AppWithRedux";
import {AppRootStateType} from './state/store';
import {ReduxStoreProviderDecorator} from './state/ReduxStoreProviderDecorator';

export default {
    title: 'Todolist/AppWithRedux',
    component: AppWithRedux,
    decorators: [ReduxStoreProviderDecorator],
} as ComponentMeta<typeof AppWithRedux>;

const Template: ComponentStory<typeof AppWithRedux> = () => <AppWithRedux/>;

export const AppWithReduxExample = Template.bind({});
AppWithReduxExample.args = {};

