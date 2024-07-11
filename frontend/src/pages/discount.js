import { useEffect, useState } from "react";
import { useDiscountsContext } from "../hooks/useDiscountContext";

//components

import DiscountDetails from "../components/DiscountDetails";
import DiscountForm from "../components/DiscountForm";
import { Row, Col, Container } from "react-bootstrap";
import "./style.css";
import { NavLink } from "react-router-dom";
import Layout from "../components/Layout";
import { MDBCol, MDBIcon } from "mdbreact";

const Discount = () => {
  const { discounts, dispatch } = useDiscountsContext();

  useEffect(() => {
    const fetchDiscounts = async () => {
      const response = await fetch("/api/discounts");
      const json = await response.json();

      if (response.ok) {
        dispatch({ type: "SET_DISCOUNTS", payload: json });
      }
    };

    fetchDiscounts();
  }, [dispatch]);

  const [search, setsearch] = useState("");
  console.log(search);
  return (
    <Layout>
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
                <NavLink to={"/Discount"}>Discount</NavLink>
              </li>
              <li>
                <NavLink to={"/Monthlyreport"}>Monthly Report</NavLink>
              </li>
            </ul>
          </Col>
          <Col md={10} style={{ marginLeft: "auto" }}>
            <>
              <div style={{ marginTop: "100px", marginLeft: "31%" }}>
                <MDBCol md="8">
                  <form className="form-inline mt-4 mb-4">
                    <MDBIcon icon="search" />
                    <input
                      className="form-control form-control-sm ml-3 w-75"
                      type="text"
                      onChange={(e) => setsearch(e.target.value)}
                      placeholder="Search"
                      aria-label="Search"
                    />
                  </form>
                </MDBCol>
              </div>
            </>
            <div
              style={{
                textAlign: "center",
                fontSize: "50px",
                color: "GrayText",
              }}
              className="d"
            >
              <h1>Discounts</h1>
            </div>

            <br />
          </Col>
        </Row>
      </Container>

      <div className="discount">
        <div className="discounts">
          {discounts &&
            discounts
              .filter((item) => {
                return search.toLowerCase() === ""
                  ? item
                  : item.productid?.toLowerCase().includes(search);
              })
              .map((discount) => (
                <DiscountDetails key={discount._id} discount={discount} />
              ))}
        </div>
        <div className="dform">
          <DiscountForm />
        </div>
      </div>
    </Layout>
  );
};

export default Discount;
