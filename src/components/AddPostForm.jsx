import React, { useState } from 'react'
import { Button, Modal, Form } from 'react-bootstrap';

const AddPostForm = ({ setShowForm, savePostData }) => {

const [show, setShow] = useState(true);
const [inputs, setInputs] = useState('');

const updateInputs = (e) => {
    setInputs({ ...inputs, [e.target.id]: e.target.value })
}

const handleClose = () => { 
    setShow(!show);
    setShowForm(!show); 
}
const handleSave = () => {
    
    if(!inputs.name || !inputs.profession || !inputs.from){
        alert('Please fill all the fields')
        return false;
    };

    savePostData(inputs);

    // after validation done
    // savePostData(inputs);
}
  return (
    <>
    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Post</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Jack sparrow"
                autoFocus
                id="name"
                onChange={(e) => updateInputs(e)}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Profession</Form.Label>
              <Form.Control
                type="text"
                placeholder="ie. Programmer"
                id="profession"
                onChange={(e) => updateInputs(e)}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Where are you from?</Form.Label>
              <Form.Control
                type="text"
                placeholder="India"
                id="from"
                onChange={(e) => updateInputs(e)}
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
            >
              <Form.Label>About yourself?</Form.Label>
              <Form.Control as="textarea" rows={3} id="aboutYourself" onChange={(e) => updateInputs(e)} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSave}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default AddPostForm