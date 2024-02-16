import React from "react";
import { Col, Row, Card, CardBody } from "reactstrap";
import "./MemberCard.css";

export default function MemberCard({ cardData = {} }) {
  return (
    <div>
      <Card className="border-0 member-card">
        <CardBody
          style={{ color: "#565656", borderRadius: "10px" }}
          role="button"
          className="shadow member-card-body"
        >
          <Row>
            <Col md={3}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  border: "1px solid red",
                  width: "fit-content",
                  borderRadius: "50%",
                  overflow: "hidden",
                }}
              >
                {cardData && cardData.img && (
                  <img
                    height={50}
                    width={50}
                    src={cardData.img}
                    alt="member_Img"
                  />
                )}
              </div>
            </Col>
            <Col md={9}>
              <div>
                {cardData && cardData.first_name && cardData.last_name && (
                  <div style={{ fontWeight: 400, fontSize: "16px" }}>
                    <strong>
                      {`${cardData.first_name} ${cardData.last_name}`}
                    </strong>
                  </div>
                )}
                {cardData && cardData.email && (
                  <div style={{ fontWeight: 200, fontSize: "15px" }}>
                    {cardData.email}
                  </div>
                )}
              </div>
            </Col>
          </Row>
        </CardBody>
      </Card>
    </div>
  );
}
