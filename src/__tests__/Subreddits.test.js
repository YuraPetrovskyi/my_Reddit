import React from 'react';
import { Provider } from 'react-redux';
import "regenerator-runtime/runtime";

import App from "../app/App";
import { render, screen, fireEvent  } from "@testing-library/react";
import "@testing-library/jest-dom";
import store from "../app/store";

import userEvent from '@testing-library/user-event';

describe('Subreddits Component', () => {
    function renderApp() {
        render(
            <Provider store={store}>
                <App />
            </Provider>
        )
    }

    describe('SubredditMenu Component', () => {
        it('Should display New elements of SubredditMenu component', () => {
            renderApp();
            const textSubElementNew = screen.getByText('New');
            expect(textSubElementNew).toBeInTheDocument();
            const iconElementTop = screen.getByAltText('icon Top');
            expect(iconElementTop).toBeInTheDocument();
        });
        it('Should display Hot elements of SubredditMenu component', () => {
            renderApp();
            const textSubElementHot = screen.getByText('Hot');
            expect(textSubElementHot).toBeInTheDocument();
            const iconElementHot = screen.getByAltText('icon Hot');
            expect(iconElementHot).toBeInTheDocument();
        });
        it('Should display Top elements of SubredditMenu component', () => {
            renderApp();
            const textSubElementTop = screen.getByText('Top');
            expect(textSubElementTop).toBeInTheDocument();
            const iconElementNew = screen.getByAltText('icon New');
            expect(iconElementNew).toBeInTheDocument();
        });
    });

    describe('SubredditLinks Component', () => {
        it('Should display GreatBritishMemes elements of SubredditLinks component', () => {
            renderApp();
            const textSubElementGreatBritishMemes = screen.getByText('r/GreatBritishMemes');
            expect(textSubElementGreatBritishMemes).toBeInTheDocument();
            const iconElementNew = screen.getByAltText('icon of subreddit r/GreatBritishMemes');
            expect(iconElementNew).toBeInTheDocument();
        });
        it('Should display javascript elements of SubredditLinks component', () => {
            renderApp();
            const textSubElementJavascript = screen.getByText('r/javascript');
            expect(textSubElementJavascript).toBeInTheDocument();
            const iconElementJavascript = screen.getByAltText('icon of subreddit r/javascript');
            expect(iconElementJavascript).toBeInTheDocument();
        });
        it('Should display Python elements of SubredditLinks component', () => {
            renderApp();
            const textSubElementPython = screen.getByText('r/Python');
            expect(textSubElementPython).toBeInTheDocument();
            const iconElementPython = screen.getByAltText('icon of subreddit r/Python');
            expect(iconElementPython).toBeInTheDocument();
        });
        it('Should display unitedkingdom elements of SubredditLinks component', () => {
            renderApp();
            const textSubElementUnitedkingdom = screen.getByText('r/unitedkingdom');
            expect(textSubElementUnitedkingdom).toBeInTheDocument();
            const iconElementUnitedkingdom = screen.getByAltText('icon of subreddit r/unitedkingdom');
            expect(iconElementUnitedkingdom).toBeInTheDocument();
        });
        it('Should display Scotland elements of SubredditLinks component', () => {
            renderApp();
            const textSubElementScotland = screen.getByText('r/Scotland');
            expect(textSubElementScotland).toBeInTheDocument();
            const iconElementScotland= screen.getByAltText('icon of subreddit r/Scotland');
            expect(iconElementScotland).toBeInTheDocument();
        });
        it('Should display webdev elements of SubredditLinks component', () => {
            renderApp();
            const textSubElementWebdev = screen.getByText('r/webdev');
            expect(textSubElementWebdev).toBeInTheDocument();
            const iconElementWebdev = screen.getByAltText('icon of subreddit r/webdev');
            expect(iconElementWebdev).toBeInTheDocument();
        });
        it('Should display UkrainianConflict elements of SubredditLinks component', () => {
            renderApp();
            const textSubElementUkrainianConflict = screen.getByText('r/UkrainianConflict');
            expect(textSubElementUkrainianConflict).toBeInTheDocument();
            const iconElementUkrainianConflict = screen.getByAltText('icon of subreddit r/UkrainianConflict');
            expect(iconElementUkrainianConflict).toBeInTheDocument();
        });
        it('Should display AskReddit elements of SubredditLinks component', () => {
            renderApp();
            const textSubElementAskReddit = screen.getByText('r/AskReddit');
            expect(textSubElementAskReddit).toBeInTheDocument();
            const iconElementAskReddit = screen.getByAltText('icon of subreddit r/AskReddit');
            expect(iconElementAskReddit).toBeInTheDocument();
        });
        it('Should display ukraine elements of SubredditLinks component', () => {
            renderApp();
            const textSubElementUkraine = screen.getByText('r/ukraine');
            expect(textSubElementUkraine).toBeInTheDocument();
            const iconElementUkraine = screen.getByAltText('icon of subreddit r/ukraine');
            expect(iconElementUkraine).toBeInTheDocument();
        });
        it('Should display programming elements of SubredditLinks component', () => {
            renderApp();
            const textSubElementProgramming = screen.getByText('r/programming');
            expect(textSubElementProgramming).toBeInTheDocument();
            const iconElementProgramming = screen.getByAltText('icon of subreddit r/programming');
            expect(iconElementProgramming).toBeInTheDocument();
        });
    });

    describe('TopButton Component', () => {
        it('Should display button of TopButton component', () => {
            renderApp();
            const buttonElement = screen.getByRole('button', { name: 'button let`s up' });
            expect(buttonElement).toBeInTheDocument();
            screen.debug();
        });
    });

    describe('SubredditList component active', () => {
        it('Should display Subreddits in h2 element', () => {
            renderApp();
            const h2Element = screen.getByText('Subreddits', { selector: 'h2' });
            expect(h2Element).toBeInTheDocument();
        });

        it('should add "active" class and remove "lock" class when button is clicked', () => {
            renderApp();
            const buttonSubElement = screen.getByRole('button', { name: "button subreddits" });
            const bodyElement = document.body;
            const subredditsContainer = screen.getByTestId("subreddits-list-container");

            expect(subredditsContainer).not.toHaveClass('active');
            expect(bodyElement).not.toHaveClass('lock');

            fireEvent.click(buttonSubElement);
            expect(subredditsContainer).toHaveClass('active');
            expect(bodyElement).toHaveClass('lock');

            fireEvent.click(buttonSubElement);
            expect(subredditsContainer).not.toHaveClass('active');
            expect(bodyElement).not.toHaveClass('lock');
        });

        it('should remove "lock" class when NavLink is clicked', () => {
            renderApp();
            const buttonSubElement = screen.getByRole('button', { name: "button subreddits" });
            const bodyElement = document.body;

            fireEvent.click(buttonSubElement);
            expect(bodyElement).toHaveClass('lock');

            const navLink = screen.getByText('r/GreatBritishMemes');
            fireEvent.click(navLink);

            expect(bodyElement).not.toHaveClass('lock');
        });
    });

});







// describe('SubredditLinks Components', () => {
//     const subredditLinksData = [
//         { text: 'r/GreatBritishMemes', alt: 'icon of subreddit r/GreatBritishMemes' },
//         { text: 'r/javascript', alt: 'icon of subreddit r/javascript' },
//         { text: 'r/Python', alt: 'icon of subreddit r/Python' },
//         { text: 'r/unitedkingdom', alt: 'icon of subreddit r/unitedkingdom' },
//         { text: 'r/Scotland', alt: 'icon of subreddit r/Scotland' },
//         { text: 'r/webdev', alt: 'icon of subreddit r/webdev' },
//         { text: 'r/UkrainianConflict', alt: 'icon of subreddit r/UkrainianConflict' },
//         { text: 'r/AskReddit', alt: 'icon of subreddit r/AskReddit' },
//         { text: 'r/ukraine', alt: 'icon of subreddit r/ukraine' },
//         { text: 'r/programming', alt: 'icon of subreddit r/programming' }
//     ];
//
//     subredditLinksData.forEach((data) => {
//         it(`Should display ${data.text} elements of SubredditLinks component`, () => {
//             const textSubElement = screen.getByText(data.text);
//             expect(textSubElement).toBeInTheDocument();
//             const iconElement = screen.getByAltText(data.alt);
//             expect(iconElement).toBeInTheDocument();
//         });
//     });
// });



