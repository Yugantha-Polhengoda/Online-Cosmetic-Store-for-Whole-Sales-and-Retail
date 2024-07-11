import React from "react";
import products from "../products";
import { Row, Col, Collapse } from "react-bootstrap";
import { Link } from "react-router-dom";
import ProductScreen from "./ProductScreen";

import { Container } from "react-bootstrap";
import ImageSlider from "./ImageSlider";
import HomeDiscription from "./HomeDiscription";
import { Divider } from "@mui/material";
import DiscountList from "./DiscountList";
import CampaignList from "./CampaignList";
import Discriptions from "./Discriptions";
import Collections from "./Collections";
import Brands from "./Brands";

const HomeScreen = () => {
  return (
    <>
      <Container fluid>
        <br></br>
        <ImageSlider />
      </Container>
      <Container>
        <br></br>
        <br></br>
        {/*<h3 className="my-4 py-4 text-center">Trending Products</h3>
            <Divider
              sx={{ borderBottomWidth: 2, background: "#000", opacity: "0.3" }}
            />*/}
        <br></br>
        <CampaignList />

        <Row>
          {products.map((product) => (
            <Col key={product._id} md={3} style={{ width: "260px" }}>
              <ProductScreen product={product} />
            </Col>
          ))}
        </Row>
        <br></br>

        <div style={{ textAlign: "center" }}>
          <Link to={`/products`}>
            <button
              style={{
                color: "grey",
                background: "#d9e3f1",
                width: "200px",
                height: "40px",
                fontSize: "17px",
                fontFamily: "Montserrat",
              }}
              className="ShowMore"
            >
              <span>SHOW MORE</span>
            </button>
          </Link>
        </div>

        <br></br>

        <Divider
          sx={{ borderBottomWidth: 2, background: "#000", opacity: "0.3" }}
        />

        <br></br>
        <Brands />
        <br></br>
        <Discriptions />
        <br></br>
        {/*<Collections />*/}
        <br></br>
        <HomeDiscription />
        <Divider
          sx={{ borderBottomWidth: 2, background: "#000", opacity: "0.3" }}
        />
        {/*<DiscountList />*/}
        <br></br>
      </Container>
    </>
  );
};

export default HomeScreen;
