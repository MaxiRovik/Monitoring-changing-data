import React from 'react';
import {act} from 'react-dom/test-utils'
import {render, unmountComponentAtNode } from "react-dom";
import App from "./App";


let container = null;
beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
});

afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
});

test('renders without crashing', () => {
act(() => {
    render(<App  />, container )
    });
});


