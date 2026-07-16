import { useEffect, useState } from "react";

function LikeButton(){

    const [isLiked, setIsLiked] = useState(false);

    function handleLike(){
        setIsLiked(!isLiked);
    }

    // useEffect will take two parameters
    // 1. A callback
    // 2. dependency array
    // if dependency array is empty this will act as component did mount
    // component did update can be achivied via passing the variable to dependency array
    

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then((data)=>data.json())
        .then((resp)=>console.log(resp))
        .catch(err=>console.log(err))

    }, [])

    return(
        <div>
            <button onClick={()=>handleLike()}>
                {isLiked?"💖":"🤍"}
            </button>
        </div>
    )
}

export default LikeButton;

