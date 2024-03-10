import React from 'react'
import {  Row, Col } from "react-bootstrap";
export default function DatesCount({person}) {
  return (
    
      <Row className="justify-content-center">
          <Col sm="8">You have {person.length} appointments</Col>
        </Row>
    
  )
}
