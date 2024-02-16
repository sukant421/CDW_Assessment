import React from "react";
import MemberCard from "../memberCards/MemberCard";
import { Col, Row } from "reactstrap";

export default function BlockView({ role = "", data = [] }) {
  return (
    <div>
      <div
        style={{
          color: "#8c91a7",
          paddingInline: "3vw",
        }}
      >
        <div className="py-2">
          <h3>{role}</h3>
        </div>
        <div>
          <Row>
            {data &&
              data.length > 1 &&
              data.map((item, index) => {
                return (
                  <Col md={3} className="mb-4">
                    <MemberCard cardData={item} />
                  </Col>
                );
              })}
          </Row>
        </div>
        <hr />
      </div>
    </div>
  );
}
