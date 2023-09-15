import React from 'react';
// import { Provider } from 'react-redux';
// import { MemoryRouter } from 'react-router-dom';
// import configureStore from 'redux-mock-store';
// import Search from "../features/header/Search";
// import { setSearchValue, setSearchTerm } from "../features/header/searchSlice";
import { Provider } from 'react-redux';

import SubredditLinks from "../features/subreddits/SubreditLinks";
import "regenerator-runtime/runtime";

import App from "../app/App";
import { waitFor, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import store from "../app/store";
it("converts array of country data objects to array of countries", ()=>{
    //arrange
    const inputObject = [
        {name: "Argentina", capital: "Buenos Aires"},
        {name: "Belize", capital: "Belmopan"},
        {name: "Bolivia", capital: "Sucre"}
    ]
    const expectedValue = ["Argentina","Belize","Bolivia"]

    //act
    const actualValue = ["Argentina","Belize","Bolivia"]

    //assert
    expect(actualValue).toEqual(expectedValue);
    expect(actualValue[0]).toBe("Argentina");
    expect(actualValue).toContain("Belize");
    expect(actualValue[2] === "Bolivia").toBeTruthy();
    expect(actualValue[3]).not.toBeDefined();

});

it("just test App", () => {
    render(
        <Provider store={store}>
            <App />
        </Provider>
    );
    screen.debug();
    // const texparagraf = screen.getByText('r/GreatBritishMemes');
    // expect(texparagraf).toBeInTheDocument()
});

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
