import React, { useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import {loadPosts} from "./postsSlice";
import '../../App.css'
import { useParams } from 'react-router-dom';

export default function Posts() {

    const dispatch = useDispatch();

    const {name, subredit  } = useParams();
    console.log(name, subredit);

    // useEffect(() => {
    //     !name ? dispatch(loadPosts(`/r/${subredit}`)) : dispatch(loadPosts(`/${name}`));
    // }, [name, subredit]);

    useEffect(() => {
        if (name && subredit) {
            dispatch(loadPosts(`/${name}/${subredit}`));
        } else if (name) {
            dispatch(loadPosts(`/${name}`));
        } else {
            dispatch(loadPosts(`/top`));
        }

    }, [name, subredit, dispatch]);

    const { hasError } = useSelector((state) => state.allPosts);
    // console.log(hasError)


    const onTryAgainHandler = () => {
        dispatch(loadPosts());
    };

    function formatNumber(number) {
        if (number >= 100000) {
            return (number / 1000000).toFixed(2) + "m";
        }
        if (number >= 1000) {
            return (number / 1000).toFixed(1) + "k";
        }
        return number.toString();
    }

    const allPosts = useSelector(state => state.allPosts.posts)
    console.log(allPosts)

    function newDate(time) {
        const unixTimestamp = time;
        // Create a new Date object using the timestamp
        const date = new Date(unixTimestamp * 1000); // Convert seconds to milliseconds
        // Get the different components of the date
        const year = date.getFullYear();
        const month = date.getMonth() + 1; // Months are zero-based, so add 1
        const day = date.getDate();
        const hours = date.getHours();
        const minutes = date.getMinutes();
        const seconds = date.getSeconds();
        // Create a formatted string
        return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
    }

    return (
        <section className="post-container" >
            { hasError ? (
                <div>
                    <h2>Ops! Something is wrong! Try again!</h2>
                    <button onClick={onTryAgainHandler}>Try again</button>
                </div>
            ) : (
                <div>
                    {allPosts.map((post) => (
                        <div className={"post"} key={post.id}>

                            <div className={"post-score-container"}>
                                <button>
                                    <img className="post-score-icon-plus" src="/voute-black.svg" alt="icon button voute minus"/>
                                </button>

                                <p className={"post-score"}> {formatNumber(post.score)} </p>

                                <button>
                                    <img className="post-score-icon" src="/voute-black.svg" alt="icon button voute minus"/>
                                </button>
                            </div>

                            <div className={"post-img-container"}>
                                { post.is_video  ? (
                                    <video width="200" height="180" controls>
                                    <source src={post.url + "/DASH_360.mp4"} type="video/mp4"/>
                                         Your browser does not support the video tag.
                                    </video>

                                ) : (
                                    <a href={post.url}>
                                        {/*<img src="title.svg"  alt="" className="post-img" />*/}
                                        {post.post_hint !== "image" ? (
                                            <div>
                                                <img src="/title.svg"  alt="" className="post-img-title" />
                                            </div>

                                        ) : (
                                            <img src={post.url} alt="" className="post-img" />
                                        )
                                        }
                                    </a>
                                )}
                            </div>

                            <div className={"post-information-container"}>
                                <p>{post.subreddit_name_prefixed}   posted be <span>{post.author}</span> {newDate(post.created)} </p>
                                <h2>{post.title}</h2>
                                <p className={"post-information-self"}>{post.selftext}</p>
                                <p className={"post-information-comments"}>
                                    <img className="post-information-comments-icon" src="/comments.png" alt="icon button voute minus"/>
                                    {formatNumber(post.num_comments)}    Comments
                                </p>
                            </div>

                        </div>
                        )
                    )}
                </div>
            )}
        </section>
    )
}