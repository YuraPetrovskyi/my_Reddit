import React from "react";

const Media = ({ post }) => {
    const isVideo = post.is_video;
    const isImageHint = post.post_hint === "image";

    return (
        <div className="media" >
            { isVideo ? (
                <div className="post-img-container">
                    <video width="200" height="180" controls>
                        <source src={post.url + "/DASH_360.mp4"} type="video/mp4"/>
                        Your browser does not support the video tag.
                    </video>
                </div>

            ) : (
                <div className="post-img-container">
                    <a href={post.url} target="_blank"  rel="noopener noreferrer">
                        { isImageHint ? (
                            <img src={post.url} alt="" className="post-img" />
                        ) : (
                            <div className="post-no-img">
                                <img src="/title.svg"  alt="" className="post-img-title" />
                            </div>
                        )}
                    </a>
                </div>

            )}
        </div>
    );
};

export default Media;

