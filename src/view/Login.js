//#1956B4
import { BrowserRouter, Routes, Route, Link,useNavigate} from "react-router-dom";
import { Form,Button,Container, Row, Col,InputGroup,FormControl } from "react-bootstrap";
import * as Icon from 'react-bootstrap-icons';
import React,{useState,useEffect} from 'react';
import img from '../assets/img/login.png';


export default function Login () {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [email, setEmail] = useState("oklm@gmail.com");
  const [password, setPassword] = useState("oklmoklm");
  let navigate = useNavigate();
  const [admin,setAdmin] = useState([]);
  const [verify, setVerify] = useState();
  let id=0;

  const Validation = (e) =>{
 
    const re = /\S+@\S+\.\S+/
  
   if (!email || !re.test(email)) alert("Oups ! Nous avons besoin d\'une adresse e-mail valide.🙂")
   else if (!password || password.length < 6) alert("Le mot de passe doit comporter au moins 6 caractères et au maximum 12.🙂 "); 
   else {  navigate('/Dashboard') }

   
  }

 
   return (
    <>
    <Container>

      <Row>
        <Col></Col>
        <Col xs={5}>
        <img src={img} className="App-logo" alt="logo" width={370} height={250} />
        </Col>
        <Col></Col>
      </Row>
      </Container>
      <Container>
      <Row>
        <Col></Col>
        <Col xs={6}>

        <br/>
  
  <Form class="offset-md-4 " onSubmit={Validation}>
 
  <div>
  
  </div><br/>
 
  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
  <InputGroup className="mb-4">
    <InputGroup.Text id="btnGroupAddon">@</InputGroup.Text>
    <FormControl
      type="text"
      placeholder="Email"
      aria-label="Input group example"
      aria-describedby="btnGroupAddon"
      onChange={(e) => setEmail(e.target.value)} 
      value={email}
    />
  </InputGroup>
  <InputGroup className="mb-4">
    <InputGroup.Text id="btnGroupAddon">
      <Icon.FileEarmarkLockFill />
    </InputGroup.Text>
    <FormControl
      type="password"
      placeholder="Mot de passe"
      aria-label="Input group example"
      aria-describedby="btnGroupAddon"
      onChange={(e) => setPassword(e.target.value)} 
      value={password}
    />
  </InputGroup>
  </Form.Group>
  
  <div className="d-grid gap-2">
  
  <Button variant="primary" onClick={handleClose} type='submit'>
          Se connecter
        </Button>
 
  </div>

</Form>
  <div className="center">
  Pas de compte ? <Link to="/Register">Créer un compte sur la plateforme e-tciket</Link>
  
  </div>


         </Col>
        <Col></Col>
      </Row>
      
    </Container>


    </> 
   
   )

}