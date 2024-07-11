import { useEffect, useState } from "react";
import { useCampaignsContext } from "../hooks/useCampaignsContext";
import { useAddstocksContext } from "../hooks/useAddstockContext";
import { useDiscountsContext } from "../hooks/useDiscountContext";

//components

import CampaignDetails from "../components/CampaignDetails";
import StockDetails from "../components/StockDetails";
import DiscountDetails from "../components/DiscountDetails";
import { Row, Col, Container } from "react-bootstrap";
import "./style.css";
import { NavLink } from "react-router-dom";
import Layout from "../components/Layout";
import { MDBCol, MDBIcon } from "mdbreact";

const Home = () => {
  const { stocks, dispatch } = useAddstocksContext();

  useEffect(() => {
    const fetchStocks = async () => {
      const response = await fetch("/api/stocks");
      const json = await response.json();

      if (response.ok) {
        dispatch({ type: "SET_STOCKS", payload: json });
      }
    };

    fetchStocks();
  }, [dispatch]);

  const { campaigns } = useCampaignsContext();

  useEffect(() => {
    const fetchCampaigns = async () => {
      const response = await fetch("/api/campaigns");
      const json = await response.json();

      if (response.ok) {
        dispatch({ type: "SET_CAMPAIGNS", payload: json });
      }
    };

    fetchCampaigns();
  }, [dispatch]);

  const { discounts } = useDiscountsContext();

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
              <div style={{ marginTop: "100px", marginLeft: "33%" }}>
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
              <h1>Campaign Dashboard</h1>
            </div>

            <br />
            <div className="HomeCSD">
              <div className="HomeCampaigns create shadow flex flex-col p-3">
                {campaigns &&
                  campaigns
                    .filter((item) => {
                      return search.toLowerCase() === ""
                        ? item
                        : item.title?.toLowerCase().includes(search);
                    })
                    .map((campaign) => (
                      <CampaignDetails key={campaign._id} campaign={campaign} />
                    ))}
              </div>

              <div className="HomeStocks create shadow flex flex-col p-3">
                {stocks &&
                  stocks
                    .filter((item) => {
                      return search.toLowerCase() === ""
                        ? item
                        : item.discount?.toLowerCase().includes(search);
                    })
                    .map((stock) => (
                      <StockDetails key={stock._id} stock={stock} />
                    ))}
              </div>

              <div className="HomeDiscounts create shadow flex flex-col p-3 ">
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
            </div>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};

export default Home;
