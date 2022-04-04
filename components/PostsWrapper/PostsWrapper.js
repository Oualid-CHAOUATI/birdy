import React from "react";
import Post from "../Post/Post";

import "./postsWrapper.css";

const MAIN_CLASS = "posts-wrapper flex f-column ";


function PostsWrapper() {
  
  return (
    <div className={MAIN_CLASS}>



<Post subject="sport" description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque arcu tristique vehicula montes, at mi. Nulla maecenas ...read more  "} imgSRC={`https://images.pexels.com/photos/548375/pexels-photo-548375.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500`}/>
<Post subject="sport" description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque arcu tristique vehicula montes, at mi. Nulla maecenas ...read more  "} imgSRC={`https://images.pexels.com/photos/548375/pexels-photo-548375.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500`}/>
    </div>
  )
}

export default PostsWrapper