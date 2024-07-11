import React from "react";
import { Card } from "react-bootstrap";
//import { Link } from "react-router-dom";

const DiscountScreen = (discount) => {
  return (
    <>
      <Card className="my-3 p-3 rounded">
        <Card.Title as="div">
          <h4>{discount.title}</h4>
        </Card.Title>
        <br></br>
        <p>
          <strong></strong>
        </p>

        <Card.Img src={discount.image} alt="discount image" variant="top" />
        <br></br>

        <Card.Body>
          <Card.Text as="div">
            <p className="text-center">
              <strong>Product ID: </strong>
              {discount.productid}
            </p>
          </Card.Text>

          <Card.Text as="div">
            <p className="text-center">
              <strong>Retail Price: </strong>
              {discount.retailprice}
            </p>
          </Card.Text>

          <Card.Text as="div">
            <p className="text-center">
              <strong>Discount Price: </strong>
              {discount.discountprice}
            </p>
          </Card.Text>

          <Card.Text as="div">
            <p className="text-center">
              <strong>Expire Date: </strong>
              {discount.expdate}
            </p>
          </Card.Text>

          <br></br>
        </Card.Body>
      </Card>
    </>
  );
};

export default DiscountScreen;
