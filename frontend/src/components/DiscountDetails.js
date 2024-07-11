//import { useState } from 'react'
import { useDiscountsContext } from "../hooks/useDiscountContext";
import * as React from "react";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";

//date fns
import formatRelative from "date-fns/formatRelative";

const DiscountDetails = ({ discount }) => {
  const { dispatch } = useDiscountsContext();

  const handleClick = async () => {
    const response = await fetch("/api/discounts/" + discount._id, {
      method: "DELETE",
    });
    const json = await response.json();

    if (response.ok) {
      dispatch({ type: "DELETE_DISCOUNT", payload: json });
    }
  };

  return (
    <div className="discount-details">
      <h4>{discount.title}</h4>
      <br></br>
      <br></br>
      <p>
        <strong></strong>
      </p>
      <img src={discount.image} alt="discount image" />
      <br></br>
      <p className="text-center">
        <strong>Name: </strong>
        {discount.productid}
      </p>
      <p className="text-center">
        <strong>Retail Price: </strong>
        <del> Rs {discount.retailprice}/= </del>
      </p>
      <p className="text-center">
        <strong>Discount Price: </strong>
        Rs {discount.discountprice}/=
      </p>
      <p className="text-center">
        <strong>Expire Date: </strong>
        {discount.expdate}
      </p>
      <p className="text-center">
        {new Date(discount.createdAt).toISOString().substring(0, 10)}
      </p>
      <br></br>
      <div className="stack">
        <Stack spacing={1}>
          <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
        </Stack>
      </div>
      <div className="delete">
        <span className="material-symbols-outlined" onClick={handleClick}>
          Delete
        </span>
      </div>
      <div className="edit">
        <span className="material-symbols-outlined" onClick={handleClick}>
          edit
        </span>
      </div>
    </div>
  );
};

export default DiscountDetails;
