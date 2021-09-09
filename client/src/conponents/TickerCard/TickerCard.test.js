import React from 'react';
import {act, create} from "react-test-renderer"
import TickerCard from "./TickerCard";
import TickerName from "../TickerName/TickerName";
import {render, unmountComponentAtNode} from "react-dom";


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


describe("TickerCard Component", () => {
    test('renders with props',() => {
        const info = {"ticker":"TSLA","exchange":"NASDAQ","price":272.13,"change":158.76,"change_percent":0.10,"dividend":0.96,"yield":1.00,"last_trade_time":"2021-04-30T11:53:21.000Z"};
        const index = 1;
        act(() => {
            render(<TickerCard info={info} index ={index} />, container);
            expect(container.querySelector("h2").textContent).toBe("NASDAQ");
    });
    });

    test('component takes properties and passes them to child components', () => {
        const component = create(<TickerCard info = "coming info"/>);
        const instance = component.root;
        expect(instance.findByType(TickerName).props.data).toBe("coming info");
    });


});
















