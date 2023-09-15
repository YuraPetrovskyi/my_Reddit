import React from 'react';
import { Provider } from 'react-redux';
import "regenerator-runtime/runtime";

import App from "../app/App";
import { render, screen, act } from "@testing-library/react";
import "@testing-library/jest-dom";
import store from "../app/store";
// import 'jsdom-global/register';

it("just test App", async () => {
    await act(async () => {
        render(
            <Provider store={store}>
                <App />
            </Provider>
        );
    });

    screen.debug();
    // const texparagraf = screen.getByText('r/GreatBritishMemes');
    // expect(texparagraf).toBeInTheDocument()
});

// it("converts array of country data objects to array of countries", ()=>{
//     //arrange
//     const inputObject = [
//         {name: "Argentina", capital: "Buenos Aires"},
//         {name: "Belize", capital: "Belmopan"},
//         {name: "Bolivia", capital: "Sucre"}
//     ]
//     const expectedValue = ["Argentina","Belize","Bolivia"]
//
//     //act
//     const actualValue = ["Argentina","Belize","Bolivia"]
//
//     //assert
//     expect(actualValue).toEqual(expectedValue);
//     expect(actualValue[0]).toBe("Argentina");
//     expect(actualValue).toContain("Belize");
//     expect(actualValue[2] === "Bolivia").toBeTruthy();
//     expect(actualValue[3]).not.toBeDefined();
//
// });

// it("just test SubreditLinks", () => {
//     render(<SubredditLinks />);
//     // const texparagraf = screen.getByText('r/GreatBritishMemes');
//     // expect(texparagraf).toBeInTheDocument()
// });



//App.test.js
// import { render, screen } from '@testing-library/react';
// import App from './app/App';
//
// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });
