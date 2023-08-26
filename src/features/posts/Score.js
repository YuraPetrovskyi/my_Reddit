import React from "react";


const Score = ({post}) => {

    function formatNumber(number) {
        if (number >= 100000) {
            return (number / 1000000).toFixed(2) + "m";
        }
        if (number >= 1000) {
            return (number / 1000).toFixed(1) + "k";
        }
        return number.toString();
    }

    return (
        <div className="post-score-container">

            <button>
                <img className="post-score-icon-plus" src="/voute-black.svg" alt="icon button voute minus"/>
            </button>

            <p className="post-score"> {formatNumber(post.score)} </p>

            <button>
                <img className="post-score-icon" src="/voute-black.svg" alt="icon button voute minus"/>
            </button>
        </div>
    )
}

export default Score;

