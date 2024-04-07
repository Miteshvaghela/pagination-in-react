import React from 'react'

const PostItem = ({post}) => {
  return (
    <div className='post-item'>
        <h3>First Name : {post.first_name}</h3>
        <h3>Last Name : {post.last_name}</h3>
        <h3>State : {post.city}</h3>
    </div>
  )
}

export default PostItem