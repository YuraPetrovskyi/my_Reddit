import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import store from '../app/store'; // Ваш store
import Posts from '../features/posts/Posts';
import {formatNumber, formatTimeAgo } from "../features/posts/Title";

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
                const mediaContainer = screen.getAllByTestId("media-container");
                expect(mediaContainer).not.toHaveLength(0);
                // screen.debug();
            });
        });
    })

    describe('Should display Title component in Posts component', () => {
        it('Should display Title container', async () => {
            renderApp();
            // Очікуємо, що компонент буде відображений
            await waitFor(() => {
                const titleContainer = screen.getAllByTestId("post-title-container");
                expect(titleContainer).not.toHaveLength(0);
                // screen.debug();
            });
        });
        it('Should display posted by container', async () => {
            renderApp();
            // Очікуємо, що компонент буде відображений
            await waitFor(() => {
                const postedByContainer = screen.getAllByTestId("posted-by-container");
                expect(postedByContainer).not.toHaveLength(0);
                // screen.debug();
            });
        });
        it('Should display h2 title', async () => {
            renderApp();
            // Очікуємо, що компонент буде відображений
            await waitFor(() => {
                const h2Element = screen.getAllByRole('heading', { level: 2 });
                expect(h2Element).not.toHaveLength(0);
                // screen.debug();
            });
        });
        it('Should display selftext container', async () => {
            renderApp();
            // Очікуємо, що компонент буде відображений
            await waitFor(() => {
                const selftextContainer = screen.getAllByTestId("selftext-container");
                expect(selftextContainer).not.toHaveLength(0);
                // screen.debug();
            });
        });
        it('Should display post-comments container', async () => {
            renderApp();
            // Очікуємо, що компонент буде відображений
            await waitFor(() => {
                const postCommentsContainer = screen.getAllByTestId("post-comments-container");
                expect(postCommentsContainer).not.toHaveLength(0);
                // screen.debug();
            });
        });
        it('Should display icon comments', async () => {
            renderApp();
            // Очікуємо, що компонент буде відображений
            await waitFor(() => {
                const iconCommentsElements = screen.queryAllByAltText('icon comments');
                expect(iconCommentsElements).not.toHaveLength(0);
                // screen.debug();
            });
        });
    })
    describe('function formatNumber should be work', () => {
        it('should format large numbers in millions', () => {
            const result = formatNumber(1500000);
            expect(result).toBe('1.50m');
        });

        it('should format large numbers in thousands', () => {
            const result = formatNumber(4500);
            expect(result).toBe('4.5k');
        });

        it('should not format small numbers', () => {
            const result = formatNumber(42);
            expect(result).toBe("42");
        });
    });

    describe('function formatTimeAgo should be work', () => {
        const timetest = 1695037038;
        const currentTime = 1695037038; // This is the current time for test
        it('should return "7 seconds ago" for recent time', () => {
            let timestamp = currentTime - 7; // The difference is 7 seconds
            expect(formatTimeAgo(timestamp, timetest)).toBe("7 seconds ago");
        });
        it('should return "7 minutes ago" for recent time', () => {
            let timestamp = currentTime - 7 * 60; // The difference is 7 minutes
            expect(formatTimeAgo(timestamp, timetest)).toBe("7 minutes ago");
        });
        it('should return "7 hours ago" for recent time', () => {
            let timestamp = currentTime - 7 * 3600; // The difference is 7 hours
            expect(formatTimeAgo(timestamp, timetest)).toBe("7 hours ago");
        });
        it('should return "7 days ago" for recent time', () => {
            let timestamp = currentTime - 7 * 86400; // The difference is 7 days
            expect(formatTimeAgo(timestamp, timetest)).toBe("7 days ago");
        });
        it('should return "X months ago" for recent time', () => {
            let timestamp = currentTime - 7 * 2592000; // The difference is 7 months
            expect(formatTimeAgo(timestamp, timetest)).toBe("7 months ago");
        });
        it('should return "7 years ago" for recent time', () => {
            let timestamp = currentTime - 7 * 31536000; // The difference is 7 years
            expect(formatTimeAgo(timestamp, timetest)).toBe("7 years ago");
        });
    });

});

