import React from 'react';
import {act, create} from "react-test-renderer";
import ChangingValue from "./ChangingValue";
import ArrowDown from "../UI/arrows/ArrowDown";



describe("ChangingValue", () => {

    test('ChangingValue has ArrowDown(because price<change in props', () => {
        const comingData = [{
            "price": 1,
            "change": 0,
        },];
        let component;
        act(()=>{
            component = create(<ChangingValue data = {comingData}/>)
        });
        const instance = component.root;
        expect(instance.findByType(ArrowDown)).toBeTruthy();
    });

});













