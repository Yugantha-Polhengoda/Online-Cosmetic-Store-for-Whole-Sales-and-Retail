import { useState, useEffect } from "react";
import axios from "axios";
import { Card } from "react-bootstrap";

function DiscountList() {
  const [discounts, setDiscounts] = useState([]);

  useEffect(() => {
    function getDiscounts() {
      axios
        .get("http://localhost:4000/api/discounts/")
        .then((res) => {
          console.log(res.data);
          setDiscounts(res.data);
        })
        .catch((err) => {
          alert(err.message);
        });
    }

    getDiscounts();
  }, []);

  return (
    <>
      <Card style={{ width: "250px" }} className="my-3 p-3 rounded">
        {discounts.map((discount) => (
          <div key={discount._id}>
            <Card.Img src={discount.image} alt="discount image" />

            <Card.Title as="div">
              <h4>{discount.title}</h4>
            </Card.Title>

            <Card.Body>
              <Card.Text as="div">
                <strong>{discount.productid}</strong>
              </Card.Text>

              <Card.Text as="div">
                <strong>{discount.retailprice}</strong>
              </Card.Text>

              <Card.Text as="div">
                <strong>{discount.discountprice}</strong>
              </Card.Text>

              <Card.Text as="div">
                <div className="my-3"> RS : {discount.expdate} /=</div>
              </Card.Text>
            </Card.Body>
          </div>
        ))}
      </Card>
    </>
  );
}

export default DiscountList;
