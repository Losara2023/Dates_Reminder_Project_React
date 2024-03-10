import React from 'react'
import {  Row, Col } from "react-bootstrap";

export default function DatesList({person}) {
  return (
    <Row className="justify-content-center">
          <Col sm="8">
            <div className="rectangle p-2 ">
              {person.length
                ? person.map((per) => {
                    return (
                      <div key={per.id} className="d-flex border-bottom my-2 mx-3 py-2">
                        <img
                          src={per.img}
                          alt="Face"
                          className="img-avatar"
                        />
                        <div className="px-3">
                          <p className="d-inline fs-5">{per.name}</p>
                          <p className="fs-6">{per.date}</p>
                        </div>
                      </div>
                    );
                  })
                :  <h2 className="p-5 text-center ">You don't have any appointments!</h2>}
            </div>
          </Col>
        </Row>
  )
}
