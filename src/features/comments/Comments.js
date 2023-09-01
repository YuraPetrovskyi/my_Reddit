import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import {loadComments} from "./commentSlice";

import { useLocation } from "react-router-dom";



export  function Comments() {
    const dispatch = useDispatch();
    const location = useLocation();


    const {name, subredit, id, permalink  } = useParams();
    console.log(name, subredit, id,  permalink);

    useEffect(() => {
        window.scrollTo(0, 0)
        dispatch(loadComments(`/${name}/${subredit}/comments/${id}/${permalink}`))
    },[name, subredit, id, permalink, location, dispatch]);


    const allPosts = useSelector(state => state.allPosts.posts)
    console.log(allPosts)

    const post = allPosts.filter(topic => topic.id === id);
    console.log("пост з коментарем:", post)
    const isComent = post[0].num_comments;

    const allComments = useSelector((state) => state.allComments.comments)
    console.log("коментарі:", allComments)

    function formatNumber(number) {
        if (number >= 100000) {
            return (number / 1000000).toFixed(2) + "m";
        }
        if (number >= 1000) {
            return (number / 1000).toFixed(1) + "k";
        }
        return number;
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
        <section className="comments-container">
            <div className="comment-post-information">

                <div className="comment-by">
                    <a href={`https://www.reddit.com/${post[0].subreddit_name_prefixed}`} target="_blank"  rel="noopener noreferrer">{post[0].subreddit_name_prefixed}</a>
                    <p>posted by</p>
                    <a href={`https://www.reddit.com/user/${post[0].author}`} target="_blank"  rel="noopener noreferrer">{post[0].author}</a>
                    <p>{formatTimeAgo(post[0].created)}</p>
                </div>

                <h2>{post[0].title}</h2>

                <div >
                    { post[0].is_video  ? (
                        <div className="comment-video" >
                            <video  controls>
                                <source src={post[0].url + "/DASH_360.mp4"} type="video/mp4"/>
                                Your browser does not support the video tag.
                            </video>
                        </div>


                    ) : (
                        <div className="comment-img">
                            <a href={post[0].url} target="_blank"  rel="noopener noreferrer">
                                {post[0].post_hint !== "image" ? (
                                    <div className="comment-img-body">
                                        <img src={post[0].url} alt="" />
                                        <img src={post[0].thumbnail} alt=""/>
                                    </div>
                                ) : (
                                    <div className="comment-img-body">
                                        <img src={post[0].url} alt=""  />
                                    </div>
                                )
                                }
                            </a>
                        </div>

                    )}
                </div>

                <p >{post[0].selftext}</p>

                <p className="comment-icon-container">
                    <img src="/comment.svg" alt="" className="comment-icon"/>
                    {isComent ? (
                        <p>{formatNumber(post[0].num_comments)} Comments </p>
                    ) : (
                        <p>0 Comment</p>
                    )}
                </p>

            </div>
            <div >
                {allComments.map((coment) => (
                    <div className="comment-content">
                        <p>Comment by {coment.data.author} {formatTimeAgo(coment.data.created)}</p>

                        <div className="comments-body">{coment.data.body}</div>

                        <div className="comment-vote">
                            <img src="/like.svg" alt="" className="comment-like"/>
                            {coment.data.score ? formatNumber(coment.data.score) : "0" }
                            <img src="/like.svg" alt="" className="comment-like-rotation"/>
                        </div>
                    </div>
                ))}
            </div>



        </section>
    )
}