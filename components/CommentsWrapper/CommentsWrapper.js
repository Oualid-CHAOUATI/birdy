import React from 'react'
import Comment from '../Comment/Comment';
import CommentForm from '../CommentForm/CommentForm';

import"./CommentsWrapper.css";


function CommentsWrapper() {
  return (
    <div className="comments-wrapper flex f-column">
    
<CommentForm/>

    <Comment imgSrc={`https://images.pexels.com/photos/11384153/pexels-photo-11384153.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500`} profileImgSrc={`https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500`}
    
    content="lreom ipsum doler emmet lreom ipsum doler emmet lreom ipsum doler emmet lreom ipsum doler emmetlreom ipsum doler emmetlreom ipsum doler emmetlreom ipsum doler emmetlreom ipsum doler emmetlreom ipsum doler emmetlreom ipsum doler emmet"
    />
    <Comment 
    
    content="no way !"
    profileImgSrc={`https://images.pexels.com/photos/2552127/pexels-photo-2552127.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500`}
    profilName="zora"
    />
    </div>
  )
}

export default CommentsWrapper