import React from "react";
import { Card } from "react-bootstrap";
import Rating from "../components/Rating";

import { Link } from "react-router-dom";

import products from "../products";
import { Row, Col, Collapse } from "react-bootstrap";
import ProductScreen from "./ProductScreen";
import { Container } from "react-bootstrap";

const Products = () => {
  return (
    <>
      <Container>
        <br></br>
        <Row>
          {products.map((product) => (
            <Col key={product._id} md={3} style={{ width: "260px" }}>
              <ProductScreen product={product} />
            </Col>
          ))}
        </Row>

        <>
          <Row>
            <Col>
              <Col style={{ width: "237px" }}>
                <Card className="my-5 p-3 rounded">
                  <Link>
                    <Card.Img
                      className="my-1"
                      src="/images/0.jpg"
                      variant="top"
                    />
                  </Link>

                  <Card.Body>
                    <Link style={{ textDecoration: "none" }}>
                      <Card.Title as="div">
                        <strong>AMOUGE LYRIC (VG)</strong>
                      </Card.Title>
                    </Link>

                    <Card.Text as="div">
                      <div className="my-3"> RS : 7000 /=</div>
                    </Card.Text>
                  </Card.Body>
                  <button
                    style={{ color: "#000", background: "#cbb211" }}
                    className="btn btn-danger"
                  >
                    Add To Cart
                  </button>
                </Card>
              </Col>
            </Col>

            <Col>
              <Col style={{ width: "237px" }}>
                <Card className="my-5 p-3 rounded">
                  <Link>
                    <Card.Img src="/images/9.jpg" variant="top" />
                  </Link>

                  <Card.Body>
                    <Link style={{ textDecoration: "none" }}>
                      <Card.Title as="div">
                        <strong>
                          ESTEE BELLE <br />
                          (VG)
                        </strong>
                      </Card.Title>
                    </Link>

                    <Card.Text as="div">
                      <div className="my-3"> RS : 7000 /=</div>
                    </Card.Text>
                  </Card.Body>
                  <button
                    style={{ color: "#000", background: "#cbb211" }}
                    className="btn btn-danger"
                  >
                    Add To Cart
                  </button>
                </Card>
              </Col>
            </Col>

            <Col>
              <Col style={{ width: "237px" }}>
                <Card className="my-5 p-3 rounded">
                  <Link>
                    <Card.Img src="/images/7.jpg" variant="top" />
                  </Link>

                  <Card.Body>
                    <Link style={{ textDecoration: "none" }}>
                      <Card.Title as="div">
                        <strong>MAGNETISTA ORIFLAMES</strong>
                      </Card.Title>
                    </Link>

                    <Card.Text as="div">
                      <div className="my-3"> RS : 7000 /=</div>
                    </Card.Text>
                  </Card.Body>
                  <button
                    style={{ color: "#000", background: "#cbb211" }}
                    className="btn btn-danger"
                  >
                    Add To Cart
                  </button>
                </Card>
              </Col>
            </Col>

            <Col>
              <Col style={{ width: "237px" }}>
                <Card className="my-5 p-3 rounded">
                  <Link>
                    <Card.Img src="/images/10.jpg" variant="top" />
                  </Link>

                  <Card.Body>
                    <Link style={{ textDecoration: "none" }}>
                      <Card.Title as="div">
                        <strong>AVON JEE ARRAY BEYOND</strong>
                      </Card.Title>
                    </Link>

                    <Card.Text as="div">
                      <div className="my-3"> RS : 7000 /=</div>
                    </Card.Text>
                  </Card.Body>
                  <button
                    style={{ color: "#000", background: "#cbb211" }}
                    className="btn btn-danger"
                  >
                    Add To Cart
                  </button>
                </Card>
              </Col>
            </Col>

            <Col>
              <Col style={{ width: "237px" }}>
                <Card className="my-5 p-3 rounded">
                  <Link>
                    <Card.Img src="/images/9.jpg" variant="top" />
                  </Link>

                  <Card.Body>
                    <Link style={{ textDecoration: "none" }}>
                      <Card.Title as="div">
                        <strong>BEAUTIFUL BELLE (VG)</strong>
                      </Card.Title>
                    </Link>

                    <Card.Text as="div">
                      <del>
                        <div className="my-3"> RS : 7000 /=</div>
                      </del>
                    </Card.Text>
                  </Card.Body>
                  <button
                    style={{ color: "#000", background: "#cbb211" }}
                    className="btn btn-danger"
                  >
                    Add To Cart
                  </button>
                </Card>
              </Col>
            </Col>
          </Row>
        </>
      </Container>
      <br />
    </>
  );
};

export default Products;
