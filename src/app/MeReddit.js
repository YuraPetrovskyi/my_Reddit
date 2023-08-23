import React, { useEffect } from  "react";
import { getSubredditPosts} from "./myRedditSlice";
import { useSelector, useDispatch} from "react-redux";
import {setPosts} from "./myRedditSlice";

export default function MyReddit() {

    // console.log("start")

    const dispatch = useDispatch();
    const fetchPosts = (subreddit) => async (dispatch) => {
        try {
            let posts = await getSubredditPosts("/best")
            // console.log(posts)
            // We are adding showingComments and comments as additional fields to handle showing them when the user wants to. We need to do this because we need to call another API endpoint to get the comments for each post.
            const postsWithMetadata = posts.map((post) => ({
                ...post
            }))
            // console.log(postsWithMetadata)
            dispatch(setPosts(postsWithMetadata))
        } catch (error) {
            console.log('bet cod')
            console.log(error)
        }
    }

    useEffect(() => {
        dispatch(fetchPosts());
    }, [dispatch]);


    const posts = useSelector(state => state.posts)
    console.log(posts)

    // console.log(posts.posts[10])
    // console.log(posts.posts[10].url)
    // const img = posts.posts[10].url;
    let img
    // https://i.redd.it/rqn0j3qxpmib1.jpg
    return (
        <>
            <h3>111</h3>
            <h3>OOOOOPS</h3>
            <img  src={img} alt=""/>
            <button
                type="button"
                onClick={() => dispatch(fetchPosts())}
            >
                Try again
            </button>
        </>
    )
}




