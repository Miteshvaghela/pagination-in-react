import React from 'react'
import Card from 'react-bootstrap/Card';
import { FaTimes } from 'react-icons/fa';


const PostItem = ({post, deletePostItem}) => {
  return (
    <Card style={{ width: '18rem' }} className='post-item'> 
      <Card.Body>
        <Card.Title><h3>{`${post.name}`}</h3></Card.Title>
        <Card.Text> 
        {`I am ${post.profession} by profession and 
           from ${post.from} About me `+post.aboutYourself}
        </Card.Text>
        <FaTimes className='delete-icon' onClick={() => deletePostItem(post.id)} />
      </Card.Body>
    </Card>     
  )
}

export default PostItem