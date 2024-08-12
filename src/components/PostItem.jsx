import React from 'react'
import Card from 'react-bootstrap/Card';


const PostItem = ({post}) => {
  return (
    <Card style={{ width: '18rem' }} className='post-item'> 
      <Card.Body>
        <Card.Title><h2>{`${post.first_name} ${post.last_name}`}</h2><h3>From {post.city}</h3></Card.Title>
        <Card.Text> 
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>     
  )
}

export default PostItem