import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadPosts } from "./postsSlice";
import '../../App.css'
import { useParams } from 'react-router-dom';
import Score from "./Score";
import Media from "./Media";
import Title from "./Title";
import Error from "./Error";


import { useLocation } from "react-router-dom";

import { useSearchParams } from 'react-router-dom';

import { animateScroll as scroll } from 'react-scroll';

export default function Posts() {
    const limit = ".json?limit=40";
    const dispatch = useDispatch();
    const location = useLocation();

    const [ searchParams ] = useSearchParams();
    const searchTerm = searchParams.get('q');
    // console.log(searchTerm);

    const {name, subreddit} = useParams();
    useEffect(() => {
        // window.scrollTo(0, 0)
        try {
            scroll.scrollToTop({
                duration: 50, // Тривалість анімації в мілісекундах
            });
        } catch (error) {
            // Обробка помилки: ігнорування в середовищі тестування
            console.error("An error occurred during the call window.scrollTo:", error);
        }
        if (searchTerm) {
            dispatch(loadPosts(`/search.json?q=${searchTerm}`));
        } else if (name && subreddit) {
            dispatch(loadPosts(`/${name}/${subreddit}${limit}`));
        } else if (name) {
            dispatch(loadPosts(`/${name}${limit}`));
        } else {
            dispatch(loadPosts(`/top${limit}`));
        }
        // const subredditElements = document.getElementsByClassName("subreddit-list");
        // alert("render")
        // subredditElements.forEach((element) => {
        //     element.classList.remove("active");
        // });
    }, [ dispatch, name, subreddit, searchTerm, location]);
    // , location

    const { hasError } = useSelector(state => state.allPosts);
    // console.log(hasError)
    const allPosts = useSelector(state => state.allPosts.posts)
    // console.log(allPosts)

    return (
        <div className="post-container" >
            { hasError ? (
                <Error/>
            ) : (
                allPosts.map((post) => (
                        <div className="post" key={post.id}>
                            <Score post = {post} />
                            <Media post = {post} />
                            <Title post = {post} />
                        </div>
                    )
                )
            )}
        </div>
    )
}
