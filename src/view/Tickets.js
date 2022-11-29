import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Link,useNavigate } from "react-router-dom";
import Alert from 'react-bootstrap/Alert';
import * as Icon from 'react-bootstrap-icons'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ai from '../assets/img/ai.jpg';
import react from '../assets/img/react.jpg';
import code from '../assets/img/code.jpg';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

export default function Tickets() {

  let navigate=useNavigate();

  const [showCreate, setShowCreate] = useState(false);

  const handleCloseCreate = () => setShowCreate(false);
  const handleShowCreate = () => setShowCreate(true);
  const showEvents = () => navigate('/Dashboard');


  
  return <>
  &nbsp;
  
  <Container>
  <Row>
        <Col>
        <Button variant="light" onClick={showEvents}>
        <Icon.ArrowLeftSquareFill size={30} color="#1956b4"/>
          </Button>
        </Col><br/>
        <Col >Listes des tickets</Col>
        <Col xs={3}> <Button variant="outline-primary" onClick={handleShowCreate}>
            Créer un ticket
          </Button></Col>
      </Row>
    <br/>
      <Row>
        <Col></Col>
        <Col xs={12}>
        <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>N°</th>
          <th>Image du ticket</th>
          <th>Nom</th>
          <th>Prix</th>
          <th>Numéro paiement</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td> <Card.Img variant="top" src={react} width={250} height={50}/></td>
          <td>Otto</td>
          <td>2000</td>
          <td>98765409</td>
          <td><Icon.PencilSquare size={30} color="#1956b4"/></td>
        </tr>
        <tr>
          <td>1</td>
          <td><Card.Img variant="top" src={code} width={250} height={50}/></td>
          <td>Otto</td>
          <td>2000</td>
          <td>98765409</td>
          <td><Icon.PencilSquare size={30} color="#1956b4"/></td>
        
        </tr>
        <tr>
          <td>1</td>
          <td><Card.Img variant="top" src={ai} width={250} height={50}/></td>
          <td>Otto</td>
          <td>2000</td>
          <td>98765409</td>
          <td><Icon.PencilSquare size={30} color="#1956b4"/></td>
        </tr>
       
      </tbody>
    </Table>
        </Col>
        <Col></Col>
      </Row>
     
    </Container>

    <Modal show={showCreate} onHide={handleCloseCreate}>
        <Modal.Header closeButton>
          <Modal.Title>Créer un ticket</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
       
        <Form.Control type="email" placeholder="Nom de l'evènement" />
        <Form.Text className="text-muted">
         
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
       
        <Form.Control type="text" placeholder="Prix" />
        <Form.Text className="text-muted">
         
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
       
        <Form.Control type="text" placeholder="Numéro de téléphone pour recevoir les paiements" />
        <Form.Text className="text-muted">
         
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicfile">
      <Form.Text className="text-muted">
         Image ou affiche du ticket
         </Form.Text>
        <Form.Control type="file" placeholder="Image" />
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