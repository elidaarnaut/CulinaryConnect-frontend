import React, { useState } from 'react';
import { ReactComponent as HeartOutline } from "../assets/heart.svg";
import { ReactComponent as HeartFilled } from '../assets/heart-full.svg'; 


function LikeButton() {
    const [liked, setLiked] = useState(false);

    const toggleLike = () => {
        setLiked(!liked);
    };

    return(
        <button onClick={toggleLike} style={{ border: 'none', background: 'none' }}>
            {liked ? <HeartFilled className="heartPic" />
                   : <HeartOutline className="heartPic" />}
        </button>
    );
}

export default LikeButton;