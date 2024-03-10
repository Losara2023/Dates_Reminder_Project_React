import React from 'react'
import {Button,Col,Row } from "react-bootstrap";
export default function DateAction({deleteData,showAll}) {
  return (
    <Row className="justify-content-center my-2">
          <Col sm="8" className="d-flex justify-content-between">
            <Button className="btn-style p-2" onClick={showAll}>Show all</Button>
            <Button className="btn-style p-2" onClick={deleteData}>Remove all</Button>
          </Col>
        </Row>
  )
}
