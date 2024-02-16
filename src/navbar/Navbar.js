import React from "react";
import { Navbar, Row, Col, Input } from "reactstrap";
import { Search } from "react-bootstrap-icons";

export default function NavBar() {
  return (
    <div>
      <Navbar className="my-2 p-3" style={{ backgroundColor: "#84a3f6" }}>
        <div
          style={{
            color: "white",
            width: "100%",
          }}
        >
          <Row>
            <Col style={{ textAlign: "left" }} md={9}>
              {" "}
              <h3 className="px-2">TEAM</h3>
            </Col>
            <Col
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              md={3}
            >
              {" "}
              <div
                style={{
                  height: "75%",
                  width: "100%",
                  backgroundColor: "white",
                  borderRadius: "15px",
                  overflow: "hidden",
                }}
              >
                <Row>
                  <Col md={2}>
                    <Search
                      color="black"
                      style={{
                        paddingLeft: "5px",
                        alignItems: "center",
                        justifyContent: "center",
                        marginLeft: "5px",
                        marginTop: "5px",
                      }}
                      size={20}
                    />
                  </Col>
                  <Col md={10} className="p-0 pb-2">
                    <div>
                      <Input
                        style={{ border: "none" }}
                        className="shadow-none"
                        width="100%"
                        placeholder="Search"
                      />
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </div>
      </Navbar>
    </div>
  );
}
