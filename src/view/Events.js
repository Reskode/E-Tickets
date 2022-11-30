import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Link,useNavigate } from "react-router-dom";
import Alert from 'react-bootstrap/Alert';
import * as Icon from 'react-bootstrap-icons'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ai from '../assets/img/ai.jpg';
import react from '../assets/img/react.jpg';
import code from '../assets/img/code.jpg';
import Modal from 'react-bootstrap/Modal';
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';

export default function Events() {

    const [show, setShow] = useState(false);
    const [showAlert, setShowAlert] = useState(false);
    const [showCreate, setShowCreate] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleShowAlert = () => setShowAlert(true);
    const handleCloseCreate = () => setShowCreate(false);
    const handleShowCreate = () => setShowCreate(true);

    let navigate = useNavigate();

    const showTickets = () => navigate('/Tickets');
  return <>
  <Alert show={showAlert} variant="success">
        <Alert.Heading> Lien copié avec succès</Alert.Heading>
        <p>
         Envoyer ce lien à vos participants pour qu'ils puissent s'inscrire, Merci.
        </p>
        <hr />
        <div className="d-flex justify-content-end">
          <Button onClick={() => setShowAlert(false)} variant="outline-success">
            Close
          </Button>
        </div>
      </Alert>
    <Container>
    <Row>
        <Col></Col>
        <Col className="h4">Listes des evènements</Col>
        <Col xs={3}> <Button variant="outline-primary" onClick={handleShowCreate}>
            Créer un evènement
          </Button></Col>
      </Row>
    <br/>
      <Row>
        <Col>
            <Card style={{ width: '20rem' }} bg="light" border="dark">
        <Card.Img variant="top" src={code} width={370} height={200}/>
        <Card.Body>
            <Card.Header className="h4"> Soirée React</Card.Header>&nbsp;
            <Card.Text className="em text-success h6" > <Icon.Calendar color="#008065" size={25} />&nbsp;12/12/2022 | 7h30</Card.Text>
            <Card.Text className="em text-dark h6" > <Icon.PinMapFill color="#17a2b8" size={25}  />&nbsp;Salle oklm</Card.Text>
            <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
            </Card.Text>
            <Button variant="primary" onClick={ handleShow}>Listes</Button>&nbsp;&nbsp;
            <Button variant="info" onClick= { showTickets } >Tickets</Button>
            <Button variant="light" onClick={ handleShowAlert}><Icon.Files color="#008065"  size={30}/>  </Button>
            <Button  variant="light"><Icon.PencilSquare size={30} color="#1956b4"/></Button>
        </Card.Body>
        </Card>
        </Col>
        <Col>
            <Card style={{ width: '20rem' }} bg="light" border="dark">
        <Card.Img variant="top" src={react} width={370} height={200}/>
        <Card.Body>
            <Card.Header className="h4">Soirée React</Card.Header>&nbsp;
            <Card.Text className="em text-success h6" > <Icon.Calendar color="#008065" size={25} />&nbsp;12/12/2022 | 7h30</Card.Text>
            <Card.Text className="em text-dark h6" > <Icon.PinMapFill color="#17a2b8" size={25}  />&nbsp;Salle oklm</Card.Text>
            <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
            </Card.Text>
            <Button variant="primary" onClick={ handleShow}>Listes</Button>&nbsp;&nbsp;
            <Button variant="info" onClick= { showTickets } >Tickets</Button>
            <Button variant="light" onClick={ handleShowAlert}><Icon.Files color="#008065"  size={30}/>  </Button>
            <Button  variant="light"><Icon.PencilSquare size={30} color="#1956b4"/></Button>
        </Card.Body>
        </Card>
        </Col>
        <Col>
            <Card style={{ width: '20rem' }} bg="light" border="dark">
        <Card.Img variant="top" src={ai} width={370} height={200}/>
        <Card.Body>
            <Card.Header className="h4">Conférence Indabax</Card.Header>&nbsp;
            <Card.Text className="em text-success h6" > <Icon.Calendar color="#008065" size={25} />&nbsp;12/12/2022 | 7h30</Card.Text>
            <Card.Text className="em text-dark h6" > <Icon.PinMapFill color="#17a2b8" size={25}  />&nbsp;Salle oklm</Card.Text>
            <Card.Text className="justify">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
            </Card.Text>
            <Button variant="primary" onClick={ handleShow}>Listes</Button> &nbsp;&nbsp;
            <Button variant="info" onClick= { showTickets } >Tickets</Button>
            <Button variant="light" onClick={ handleShowAlert}><Icon.Files color="#008065"  size={30}/>  </Button>
            <Button  variant="light"><Icon.PencilSquare size={30} color="#1956b4"/></Button>
        </Card.Body>
        </Card><br/>
        </Col>
        
      </Row>
    </Container>

    <Modal  onHide={handleClose} 
     size="lg"
     show={show}
     //onHide={() => setLgShow(false)}
     aria-labelledby="example-modal-sizes-title-lg"
     >
        <Modal.Header closeButton>
          <Modal.Title>Listes des Participants</Modal.Title>
        </Modal.Header>
        <Modal.Body>Soirée React</Modal.Body>
        <Container>
      <Row>
        <Col></Col>
        <Col xs={12}>
        <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>N°</th>
          <th>Nom</th>
          <th>Prénoms</th>
          <th>Sexe</th>
          <th>Date</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>F</td>
          <td>12/12/2022 07:19:00</td>
        </tr>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>F</td>
          <td>12/12/2022 07:19:00</td>
        </tr>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>F</td>
          <td>12/12/2022 07:19:00</td>
        </tr>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>F</td>
          <td>12/12/2022 07:19:00</td>
        </tr>
       
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>F</td>
          <td>12/12/2022 07:19:00</td>
        </tr>
       
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>F</td>
          <td>12/12/2022 07:19:00</td>
        </tr>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>F</td>
          <td>12/12/2022 07:19:00</td>
        </tr>
      
       
       
      </tbody>
    </Table>
        </Col>
        <Col></Col>
      </Row>
     
    </Container>
  
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Génerer PDF
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={showCreate} onHide={handleCloseCreate}>
        <Modal.Header closeButton>
          <Modal.Title>Créer un evènement</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
       
        <Form.Control type="email" placeholder="Nom de l'evènement" />
        <Form.Text className="text-muted">
         
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="date" placeholder="Date" />
       
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
       
        <Form.Control type="text" placeholder="Lieu" />
        <Form.Text className="text-muted">
         
        </Form.Text>
      </Form.Group>
      
      <Form.Group className="mb-3" controlId="formBasicfile">
      <Form.Text className="text-muted">
         Image ou Affiche de l'évènement
         </Form.Text>
        <Form.Control type="file" placeholder="Image" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label className="text-muted">Description</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
      <Button variant="secondary" onClick={handleCloseCreate}>
            Close
          </Button>&nbsp;
      <Button variant="primary" type="submit">
        Créer
      </Button>
    </Form>
        </Modal.Body>
       
      </Modal>


      
    </>
}
