import { useState } from "react";

function LikeButton(){

    const [isLiked, setIsLiked] = useState(false);

    function handleLike(){
        setIsLiked(!isLiked);
    }
    return(
        <div>
            <button onClick={()=>handleLike()}>
                {isLiked?"💖":"🤍"}
            </button>
        </div>
    )
}

export default LikeButton;

