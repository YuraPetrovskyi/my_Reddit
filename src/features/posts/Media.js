import React from "react";

const Media = ({ post }) => {
    const isVideo = post.is_video;
    const isImageHint = post.post_hint === "image";

    return (
        <div className="media" data-testid="media-container" >
            { isVideo ? (
                <div className="media-video">
                    <video  controls>
                        <source src={post.url + "/DASHPlaylist.mpd"} type="application/dash+xml" />
                        <source src={post.url + "/DASH_360.mp4"} type="video/mp4"/>
                        <source src={post.url + "/DASH_270.mp4"} type="video/mp4"/>
                        <source src={post.url + "/DASH_96.mp4"} type="video/mp4"/>
                        <source src={post.url + "/DASH_360.webm"} type="video/webm" />
                        <source src={post.url + "/DASH_360.ogv"} type="video/ogg" />
                        <source src={post.url + "/DASH_360.avi"} type="video/x-msvideo" />
                        <source src={post.url + "/DASH_360.flv"} type="video/x-flv" />
                        <source src={post.url + "/DASH_360.mkv"} type="video/x-matroska" />
                        Your browser does not support the video tag.
                    </video>
                </div>

            ) : (
                <div >
                    { isImageHint ? (
                        <a href={post.url} target="_blank"  rel="noopener noreferrer" className="media-img-container" aria-label="link to the original Reddit page">
                            <img src={post.url} alt="" />
                        </a>
                    ) : (
                        <a href={post.url} target="_blank"  rel="noopener noreferrer" className="media-img-container" aria-label="link to the original Reddit page">
                            <img src="/icon/posts/title.svg"  alt="" className="media-no-img"/>
                        </a>
                    )}
                </div>
            )}
        </div>
    );
};

export default Media;



// <div className="post-img-container">
//     <a href={post.url} target="_blank"  rel="noopener noreferrer">
//         { isImageHint ? (
//             <img src={post.url} alt="" className="post-img" />
//         ) : (
//             <div className="post-no-img">
//                 <img src="/title.svg"  alt="" className="post-img-title" />
//             </div>
//         )}
//     </a>
// </div>