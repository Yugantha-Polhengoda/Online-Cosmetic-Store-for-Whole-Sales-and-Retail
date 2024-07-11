import React from "react";
import Header from "../Header";
import { Container, Row, Col } from "react-bootstrap";
import { NavLink } from "react-router-dom";

/**
 * @author
 * @function Layout
 **/

export const Layout = (props) => {
  return (
    <>
      <Header />
      {props.sidebar ? (
        <Container fluid>
          <Row>
            <Col md={2} className="sidebar">
              <ul>
                <li>
                  <NavLink to={"/"}>Home</NavLink>
                </li>
                <li>
                  <NavLink to={"/Campaign"}>Campaigns</NavLink>
                </li>
                <li>
                  <NavLink to={"/Addstock"}>Add Stock</NavLink>
                </li>
                <li>
                  <NavLink to={"/Discount"}>Discount</NavLink>
                </li>
                <li>
                  <NavLink to={"/Monthlyreport"}>Monthly Report</NavLink>
                </li>
                <li>
                  <NavLink to={"/Report"}>Report</NavLink>
                </li>
              </ul>
            </Col>
            <Col md={10} style={{ marginLeft: "auto" }}>
              {props.children}
            </Col>
          </Row>
        </Container>
      ) : (
        props.children
      )}
    </>
  );
};

export default Layout;
