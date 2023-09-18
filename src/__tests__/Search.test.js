import React from 'react';
import { Provider } from 'react-redux';
import "regenerator-runtime/runtime";

import App from "../app/App";
import { render, screen, fireEvent, act } from "@testing-library/react";
import "@testing-library/jest-dom";
import store from "../app/store";

import userEvent from '@testing-library/user-event';

describe('HeaderBar Component', () => {
    function renderApp() {
        render(
            <Provider store={store}>
                <App />
            </Provider>
        )
    }

    it('Should display logo of HeaderBar component', () => {
        renderApp();
        const textElement = screen.getByText('myReddit');
        expect(textElement).toBeInTheDocument();
    });
    it('Should display img of logo of HeaderBar component', () => {
        renderApp();
        const iconElement = screen.getByAltText('icon logo myReddit');
        expect(iconElement).toBeInTheDocument();
    });
    it('Should display input of HeaderBar component', () => {
        renderApp();
        const inputElement = screen.getByPlaceholderText('Search');
        expect(inputElement).toBeInTheDocument();
    });
    it('Should display search button of HeaderBar component', () => {
        renderApp();
        const buttonElement = screen.getByRole('button', { name: 'search' });
        expect(buttonElement).toBeInTheDocument();
    });
    it('"search input" should  have value as Mack!',  () => {
        renderApp();
        const inputElement = screen.getByPlaceholderText('Search');
        expect(inputElement).toBeInTheDocument();
        // Emulate user input in input
        act(() => {
            userEvent.type(inputElement, 'Mack!');
        });
        // We check whether the value in input has changed
        expect(inputElement).toHaveValue('Mack!');
        // Reset the state of imputation
        act(() => {
            userEvent.type(inputElement, '{enter}');
        });
    });
    it('"search input" should be empty after button click or enter', () => {
        renderApp();
        const inputElement = screen.getByPlaceholderText('Search');
        expect(inputElement).toBeInTheDocument();
        // Emulate user input in input
        act(() => {
            userEvent.type(inputElement, 'Mack!');
        });
        // We check whether the value in input has changed
        expect(inputElement).toHaveValue('Mack!');
        // Emulate pressing Enter
        act(() => {
            userEvent.type(inputElement, '{enter}');
        });
        expect(inputElement).toHaveValue('');

        // Emulate pressing the search button
        act(() => {
            userEvent.type(inputElement, 'Mack!');
        });
        expect(inputElement).toHaveValue('Mack!');
        const searchButton = screen.getByRole('button', { name: 'search' });
        act(() => {
            fireEvent.click(searchButton);
        });
        expect(inputElement).toHaveValue('');
    });

});