import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Customer() {
  return <>
  &nbsp;

  <Container>
      <Row>
        <Col></Col>
        <Col xs={12}>
        <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>N°</th>
          <th>Nom de l'entreprise</th>
          <th>Representant</th>
          <th>Numéro tél</th>
          <th>Date</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>98765409</td>
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
  
    </>
}