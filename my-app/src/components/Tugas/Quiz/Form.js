import React from "react";
import { Form, Card, Button } from "react-bootstrap";
import RCCQuiz from "./RCC Quiz";

const Forms = () => {
  return (
    <Card className="d-flex justify-content-center align-items-center">
      <Card.Body className="mt-5 mb-5 border rounded p-4 bg-white drop-shadow">
        <Card.Title className="text-center mb-4">
          <RCCQuiz />
        </Card.Title>

        <Form.Group className="mb-3" controlId="formGridText">
          <Form.Label>Masukkan Text</Form.Label>
          <Form.Control type="text" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Forms;
