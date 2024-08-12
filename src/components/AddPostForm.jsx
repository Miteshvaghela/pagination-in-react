import React, { useState } from 'react'
import { Button, Modal, Form } from 'react-bootstrap';

const AddPostForm = ({ setShowForm }) => {
const [show, setShow] = useState(true);
const handleClose = () => { 
    setShow(!show);
    setShowForm(!show); 
}
const handleSave = () => {

    const [username, setUsername] = useState('');
    const [profession, setProfession] = useState('');
    const [from, setFrom] = useState('');
    const [aboutYourself, setAboutYourself] = useState('');


    

}
  return (
    <>
    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Post</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                placeholder="Jack sparrow"
                autoFocus
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Profession</Form.Label>
              <Form.Control
                type="text"
                placeholder="ie. Programmer"
                autoFocus
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Where are you from?</Form.Label>
              <Form.Control
                type="text"
                placeholder="Gujarat"
                autoFocus
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
            >
              <Form.Label>About yourself?</Form.Label>
              <Form.Control as="textarea" rows={3} />
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