import React from "react";
import { Card } from "react-bootstrap";
import Rating from "../components/Rating";
import { Link } from "react-router-dom";

const ProductScreen = ({ product }) => {
  return (
    <>
      <Card className="my-3 p-3 rounded">
        <Link to={`/product/${product._id}`}>
          <Card.Img src={product.image} variant="top" />
        </Link>

        <Card.Body>
          <Link
            to={`/product/${product._id}`}
            style={{ textDecoration: "none" }}
          >
            <Card.Title as="div">
              <strong>{product.name}</strong>
            </Card.Title>
          </Link>

          <Card.Text as="div">
            <Rating
              value={product.rating}
              text={`${product.numReviews} reviews`}
            />
          </Card.Text>

          <Card.Text as="div">
            <del aria-hidden="true">
              <div style={{ color: "#a7a7a7" }} className="my-3">
                RS : {product.RetailPrice} /=
              </div>
            </del>
          </Card.Text>

          <Card.Text as="div">
            <div
              style={{
                color: "#535253",
                fontSize: "1.125rem",
                fontWeight: "bold",
              }}
              className="my-3"
            >
              RS : {product.price} /=
            </div>
          </Card.Text>
        </Card.Body>
        <button
          style={{ color: "#000", background: "#cbb211" }}
          className="btn btn-danger"
        >
          Add To Cart
        </button>
      </Card>
    </>
  );
};

export default ProductScreen;
