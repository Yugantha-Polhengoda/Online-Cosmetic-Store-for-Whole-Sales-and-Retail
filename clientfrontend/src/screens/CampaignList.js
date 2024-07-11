import { useState, useEffect } from "react";
import axios from "axios";
import { Card } from "react-bootstrap";

function CampaignList() {
  const [campaigns, setCampaigns] = useState([]);

  useEffect(() => {
    function getCampaigns() {
      axios
        .get("http://localhost:4000/api/campaigns/")
        .then((res) => {
          console.log(res.data);
          setCampaigns(res.data);
        })
        .catch((err) => {
          alert(err.message);
        });
    }

    getCampaigns();
  }, []);

  return (
    <div>
      <Card style={{ backgroundColor: "#ec9418" }} className="my-3 p-3 rounded">
        <Card.Body style={{ textAlign: "center" }}>
          {campaigns.map((campaign) => (
            <div key={campaign._id}>
              <div>
                <Card.Img
                  style={{ width: "140px" }}
                  src="/images/desconto1.gif"
                  alt=""
                />
                <Card.Img
                  style={{ width: "640px" }}
                  src="/images/of.png"
                  alt=""
                />
                <img
                  style={{ width: "150px" }}
                  className="imglogo3"
                  src="/images/desconto.gif"
                  alt=""
                />
              </div>

              <h1
                style={{
                  color: "#861b09",
                  fontWeight: "bold",
                  fontFamily: "Domaine Sans Display Regular",
                }}
                className="my-1 py-1 text-center"
              >
                <img
                  style={{ width: "60px" }}
                  className="imglogo3"
                  src="/images/offerLogo2.png"
                  alt=""
                />
                {campaign.title}
              </h1>
              <p
                style={{
                  fontFamily: "bodoni",
                  textTransform: "lowercase",
                  color: "#500750",
                  fontSize: "19px",
                }}
                className="my-1 py-1 text-center"
              >
                <strong>
                  {campaign.discription} For {campaign.occation} <br />
                  Starting from {campaign.from} to {campaign.to}
                </strong>
              </p>
            </div>
          ))}
        </Card.Body>
      </Card>
    </div>
  );
}

export default CampaignList;
