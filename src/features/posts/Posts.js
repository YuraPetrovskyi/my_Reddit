import React, { useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import {loadPosts} from "./postsSlice";
import '../../App.css'
import {NavLink, useParams} from 'react-router-dom';

export default function Posts() {

    const dispatch = useDispatch();

    const {name, subredit , permalink  } = useParams();
    console.log(name, subredit, permalink);

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
    const allPosts = useSelector(state => state.allPosts.posts)
    console.log(allPosts)



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

    function formatTimeAgo(timestamp) {
        const currentTime = Math.floor(Date.now() / 1000); // поточний час в секундах
        const timeDifference = currentTime - timestamp; // різниця у секундах

        if (timeDifference < 60) {
            return `${timeDifference} seconds ago`;
        } else if (timeDifference < 3600) {
            const minutes = Math.floor(timeDifference / 60);
            return `${minutes} ${minutes === 1 ? 'minute' : 'minutes'} ago`;
        } else if (timeDifference < 86400) {
            const hours = Math.floor(timeDifference / 3600);
            return `${hours} ${hours === 1 ? 'hour' : 'hours'} ago`;
        } else if (timeDifference < 2592000) {
            const days = Math.floor(timeDifference / 86400);
            return `${days} ${days === 1 ? 'day' : 'days'} ago`;
        } else if (timeDifference < 31536000) {
            const months = Math.floor(timeDifference / 2592000);
            return `${months} ${months === 1 ? 'month' : 'months'} ago`;
        } else {
            const years = Math.floor(timeDifference / 31536000);
            return `${years} ${years === 1 ? 'year' : 'years'} ago`;
        }
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
                        <div className="post" key={post.id}>

                            <div className="post-score-container">
                                <button>
                                    <img className="post-score-icon-plus" src="/voute-black.svg" alt="icon button voute minus"/>
                                </button>

                                <p className="post-score"> {formatNumber(post.score)} </p>

                                <button>
                                    <img className="post-score-icon" src="/voute-black.svg" alt="icon button voute minus"/>
                                </button>
                            </div>

                            <div className="post-img-container">
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

                            <div className="post-information-container">
                                <p>{post.subreddit_name_prefixed}   posted be <span>{post.author}</span> {formatTimeAgo(post.created)} </p>
                                <h2>{post.title}</h2>
                                <p className="post-information-self">{post.selftext} </p>
                                <NavLink to={post.permalink} className="post-information-comments">
                                    <img className="post-information-comments-icon" src="/comments.png" alt="icon button voute minus"/>
                                    {formatNumber(post.num_comments)}    Comments
                                </NavLink>

                            </div>

                        </div>
                        )
                    )}
                </div>
            )}
        </section>
    )
}