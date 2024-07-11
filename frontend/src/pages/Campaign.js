import { useEffect } from "react";
import { useCampaignsContext } from "../hooks/useCampaignsContext";

//components

import CampaignDetails from "../components/CampaignDetails";
import CampaignForm from "../components/CampaignForm";
import { Row, Col, Container } from "react-bootstrap";
import "./style.css";
import { NavLink } from "react-router-dom";
import Layout from "../components/Layout";

const Campaign = () => {
  const { campaigns, dispatch } = useCampaignsContext();

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
            <div
              style={{
                textAlign: "center",
                fontSize: "50px",
                color: "GrayText",
              }}
              className="d"
            >
              <h1>Campaigns</h1>
            </div>

            <br />
          </Col>
        </Row>
      </Container>

      <div className="home">
        <div className="campaigns">
          {campaigns &&
            campaigns.map((campaign) => (
              <CampaignDetails key={campaign._id} campaign={campaign} />
            ))}
        </div>
        <div className="cform">
          <CampaignForm />
        </div>
      </div>
    </Layout>
  );
};

export default Campaign;
