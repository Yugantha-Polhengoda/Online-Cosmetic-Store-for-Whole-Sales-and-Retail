import { useEffect } from "react";
import { useCampaignsContext } from "../hooks/useCampaignsContext";
import { useAddstocksContext } from "../hooks/useAddstockContext";
import { useDiscountsContext } from "../hooks/useDiscountContext";
import CampaignDetails from "../components/CampaignDetails";
import StockDetails from "../components/StockDetails";
import DiscountDetails from "../components/DiscountDetails";
//import CampaignForm from '../components/CampaignForm'
//import AddStockForm from '../components/AddStockForm'
import { Row, Col, Container } from "react-bootstrap";
import "./style.css";
import { NavLink } from "react-router-dom";
import Layout from "../components/Layout";

const Dashboard = () => {
  const { stocks, dispatch: dispatchStocks } = useAddstocksContext();
  const { campaigns, dispatch: dispatchCampaigns } = useCampaignsContext();
  const { discounts, dispatch: dispatchDiscounts } = useDiscountsContext();

  useEffect(() => {
    const fetchStocks = async () => {
      const response = await fetch("/api/stocks");
      const json = await response.json();

      if (response.ok) {
        dispatchStocks({ type: "SET_STOCKS", payload: json });
      }
    };

    fetchStocks();
  }, [dispatchStocks]);

  useEffect(() => {
    const fetchCampaigns = async () => {
      const response = await fetch("/api/campaigns");
      const json = await response.json();

      if (response.ok) {
        dispatchCampaigns({ type: "SET_CAMPAIGNS", payload: json });
      }
    };

    fetchCampaigns();
  }, [dispatchCampaigns]);

  useEffect(() => {
    const fetchDiscounts = async () => {
      const response = await fetch("/api/discounts");
      const json = await response.json();

      if (response.ok) {
        dispatchDiscounts({ type: "SET_DISCOUNTS", payload: json });
      }
    };

    fetchDiscounts();
  }, [dispatchDiscounts]);

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
            Dashboard
          </Col>
        </Row>
      </Container>

      <div className="HomeCSD">
        <div className="HomeCampaigns create shadow flex flex-col p-3">
          {campaigns &&
            campaigns.map((campaign) => (
              <CampaignDetails key={campaign._id} campaign={campaign} />
            ))}
        </div>

        <div className="HomeStocks create shadow flex flex-col p-3">
          {stocks &&
            stocks.map((stock) => (
              <StockDetails key={stock._id} stock={stock} />
            ))}
        </div>

        <div className="HomeDiscounts create shadow flex flex-col p-3">
          {discounts &&
            discounts.map((discount) => (
              <DiscountDetails key={discount._id} discount={discount} />
            ))}
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
