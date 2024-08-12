import React from 'react'
import Card from 'react-bootstrap/Card';


const PostItem = ({post}) => {
  return (
    <Card style={{ width: '18rem' }} className='post-item'> 
      <Card.Body>
        <Card.Title><h3>{`${post.fullname}`}</h3></Card.Title>
        <Card.Text> 
        I am {post.profession} by profession and 
          {` from ${post.from}`}
          {` About me `+post.aboutYourself}
        </Card.Text>
      </Card.Body>
    </Card>     
  )
}

export default PostItem