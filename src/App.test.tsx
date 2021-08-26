import React from 'react';
import {render} from '@testing-library/react';
import App from './App';
import {Provider} from "react-redux";
import {store} from "./redux/store";

test('first button name increase', () => {
    const {getByText} = render(<Provider store={store}><App/></Provider>);
    const buttonName = getByText(/inc/i);
    expect(buttonName).toBeInTheDocument();
});

test('second button name reset', () => {
    const {getByText} = render(<Provider store={store}>
        <App/>
    </Provider>);
    const buttonName = getByText(/reset/i);
    expect(buttonName).toBeInTheDocument();
});
