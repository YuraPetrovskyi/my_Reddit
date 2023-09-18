import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import store from '../app/store'; // Ваш store
import Posts from '../features/posts/Posts';
// import App from "../app/App";


describe('Should display Posts component', () => {
    function renderApp() {
        render(
            <Provider store={store}>
                <MemoryRouter initialEntries={['/']}>
                    <Posts />
                </MemoryRouter>
            </Provider>
        )
    }

    describe('Should display Score component in Posts component', () => {

        it('Should display at least one icon button voute plus at Score component', async () => {
            renderApp();
            // Очікуємо, що компонент буде відображений
            await waitFor(() => {
                const iconElements = screen.queryAllByAltText('icon button voute plus');
                expect(iconElements).not.toHaveLength(0);
                // screen.debug();
            });
        });

        it('Should display at least one icon button voute minus at Score component', async () => {
            renderApp();
            // Очікуємо, що компонент буде відображений
            await waitFor(() => {
                const iconElements = screen.queryAllByAltText('icon button voute minus');
                expect(iconElements).not.toHaveLength(0);
                // screen.debug();
            });
        });

        it('Should display at least one  element', async() => {
            renderApp();
            await waitFor(() => {
                const scoreElement = screen.getAllByText(/^[0-9.]+k$|^[0-9]+$/); // search for strings that match the number format with or without a dot and 'k'.
                expect(scoreElement).not.toHaveLength(0);
            });

        });
    })

    describe('Should display Media component in Posts component', () => {

        it('Should display Media container', async () => {
            renderApp();
            // Очікуємо, що компонент буде відображений
            await waitFor(() => {
                const mediaContainer = screen.getAllByTestId('media-container');
                expect(mediaContainer).not.toHaveLength(0);
                // screen.debug();
            });
        });
    })

    // describe('Should display Media component in Posts component', () => {
    //
    //     it('Should display Media container', async () => {
    //         renderApp();
    //         // Очікуємо, що компонент буде відображений
    //         await waitFor(() => {
    //             const mediaContainer = screen.getAllByTestId('media-container');
    //             expect(mediaContainer).not.toHaveLength(0);
    //             // screen.debug();
    //         });
    //     });
    // })

});

