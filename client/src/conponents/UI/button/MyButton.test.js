import React from 'react';
import {create, act} from "react-test-renderer";
import TickerCard from "../../TickerCard/TickerCard";

describe("MyButton Component default", () => {
    test('default button content should be Stop', () => {
        const component = create(<TickerCard info = "coming info"/>)
        const instance = component.root;
        const button = instance.findByType("button");
        expect(button.props.children).toBe("Stop");
    });
});


describe("MyButton Component after click", () => {
    test('after first click the button content should be Online', () => {
        let component;
        act(()=>{
            component = create(<TickerCard info = "coming info"/>)
        });
        const instance = component.root;
        const button = instance.findByType("button");
        act(() => button.props.onClick())
        expect(button.props.children).toBe("Online");
    });
});