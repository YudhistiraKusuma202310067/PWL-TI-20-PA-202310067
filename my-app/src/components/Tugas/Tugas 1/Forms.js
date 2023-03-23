import { React, useState } from "react";
import {
  Form,
  Button,
  Card,
  Modal,
  Row,
  Col,
  Container,
} from "react-bootstrap";
import Background from "../../../asset/Background.jpg";

const Forms = () => {
  const date = new Date();
  const currentYear = date.getFullYear();

  const [NPM, setNPM] = useState(0);
  const [FirstName, setFirstName] = useState("");
  const [MiddleName, setMiddleName] = useState("");
  const [LastName, setLastName] = useState("");
  const [Birthdate, setBirthdate] = useState("");
  const [show, setShow] = useState(false);
  const [validated, setValidated] = useState(false);

  const handleClose = () => setShow(false);

  const handleSubmit = (e) => {
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    } else {
      e.preventDefault();
      setShow(true);
    }
    setValidated(true);
  };

  const Age = currentYear - parseInt(Birthdate.slice(0, 4));

  return (
    <div>
      <Card
        className="d-flex justify-content-center align-items-center vh-100"
        style={{
          backgroundImage: `url(${Background})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Card.Body className="mt-5 mb-5 border rounded p-4 bg-white drop-shadow">
          <Card.Title className="text-center mb-4">Form Mahasiswa</Card.Title>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formGridNpm">
              <Form.Label>NPM</Form.Label>
              <Form.Control
                placeholder="NPM"
                maxlength="10"
                onChange={(e) => setNPM(e.target.value)}
                onKeyPress={(event) => {
                  if (!/[0-9]/.test(event.key)) {
                    event.preventDefault();
                  }
                }}
                required
              />
              <Form.Text className="text-muted" style={{ fontSize: "12px" }}>
                *NPM can only be filled with numbers and a maximum of 10 entries
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formGridFirstName">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="First Name"
                onChange={(e) => setFirstName(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formGridMiddleName">
              <Form.Label>Middle Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Middle Name"
                onChange={(e) => setMiddleName(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formGridLastName">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Last Name"
                onChange={(e) => setLastName(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group className="mb-5" controlId="formGridBirthdate">
              <Form.Label>Birthdate</Form.Label>
              <input
                placeholder="YYYY-MM-DD
                    "
                type="text"
                class="form-control datepicker"
                name="Birthdate"
                onChange={(e) => setBirthdate(e.target.value)}
                required
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Card.Body>
      </Card>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton className="d-flex justify-content-center">
          <Modal.Title>Form Mahasiswa</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container>
            <Row>
              <Col xs="3">NPM</Col>
              <Col xs="1">:</Col>
              <Col>{NPM}</Col>
            </Row>
            <Row>
              <Col xs="3">Fullname</Col>
              <Col xs="1">:</Col>
              <Col>
                {FirstName} {MiddleName} {LastName}
              </Col>
            </Row>
            <Row>
              <Col xs="3">Age</Col>
              <Col xs="1">:</Col>
              <Col>
                {Age}
                {" years old"}
              </Col>
            </Row>
          </Container>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Forms;

//Coba RCC

// import React, { Component } from "react";
// import { Form, Button, Card, Modal, Row, Col } from "react-bootstrap";
// import Background from "../asset/Background.jpg";

// class Forms extends Component {
//   render() {
//     return (
//       <div>
//         <Card
//           className="d-flex justify-content-center align-items-center vh-100"
//           style={{
//             backgroundImage: `url(${Background})`,
//             backgroundRepeat: "no-repeat",
//             backgroundSize: "cover",
//             backgroundPosition: "center",
//           }}
//         >
//           <Card.Body className="mt-5 mb-5 border rounded p-4 bg-white drop-shadow">
//             <Card.Title className="text-center">Form Mahasiswa</Card.Title>
//             <Form noValidate validated={validated} onSubmit={handleSubmit}>
//               <Form.Group className="mb-3" controlId="formGridNpm">
//                 <Form.Label>NPM</Form.Label>
//                 <Form.Control
//                   placeholder="NPM"
//                   maxlength="10"
//                   onChange={(e) => setNPM(e.target.value)}
//                   onKeyPress={(event) => {
//                     if (!/[0-9]/.test(event.key)) {
//                       event.preventDefault();
//                     }
//                   }}
//                   required
//                 />
//                 <Form.Text className="text-muted" style={{ fontSize: "12px" }}>
//                   *NPM can only be filled with numbers and a maximum of 10
//                   entries
//                 </Form.Text>
//               </Form.Group>

//               <Form.Group className="mb-3" controlId="formGridFirstName">
//                 <Form.Label>First Name</Form.Label>
//                 <Form.Control
//                   type="text"
//                   placeholder="First Name"
//                   onChange={(e) => setFirstName(e.target.value)}
//                   required
//                 />
//               </Form.Group>

//               <Form.Group className="mb-3" controlId="formGridMiddleName">
//                 <Form.Label>Middle Name</Form.Label>
//                 <Form.Control
//                   type="text"
//                   placeholder="Middle Name"
//                   onChange={(e) => setMiddleName(e.target.value)}
//                 />
//               </Form.Group>

//               <Form.Group className="mb-3" controlId="formGridLastName">
//                 <Form.Label>Last Name</Form.Label>
//                 <Form.Control
//                   type="text"
//                   placeholder="Last Name"
//                   onChange={(e) => setLastName(e.target.value)}
//                   required
//                 />
//               </Form.Group>

//               <Form.Group className="mb-3" controlId="formGridBirthdate">
//                 <Form.Label>Birthdate</Form.Label>
//                 <input
//                   placeholder="YYYY-MM-DD
//                     "
//                   type="text"
//                   class="form-control datepicker"
//                   name="Birthdate"
//                   onChange={(e) => setBirthdate(e.target.value)}
//                   required
//                 />
//               </Form.Group>

//               <Button variant="primary" type="submit">
//                 Submit
//               </Button>
//             </Form>
//           </Card.Body>
//         </Card>

//         <Modal show={show} onHide={handleClose} centered>
//           <Modal.Header closeButton className="d-flex justify-content-center">
//             <Modal.Title>Form Mahasiswa</Modal.Title>
//           </Modal.Header>
//           <Modal.Body>
//             <Container>
//               <Row>
//                 <Col xs="3">NPM</Col>
//                 <Col xs="1">:</Col>
//                 <Col>{NPM}</Col>
//               </Row>
//               <Row>
//                 <Col xs="3">Fullname</Col>
//                 <Col xs="1">:</Col>
//                 <Col>
//                   {FirstName} {MiddleName} {LastName}
//                 </Col>
//               </Row>
//               <Row>
//                 <Col xs="3">Age</Col>
//                 <Col xs="1">:</Col>
//                 <Col>
//                   {Age}
//                   {" years old"}
//                 </Col>
//               </Row>
//             </Container>
//           </Modal.Body>
//         </Modal>
//       </div>
//     );
//   }
// }

// export default Forms;
