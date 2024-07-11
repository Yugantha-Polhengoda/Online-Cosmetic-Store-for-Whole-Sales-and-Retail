/*import axios from "axios";
import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function UpdateCampaignInfo() {
  const { id } = useParams();
  const [campaigninfos, setcampaigninfos] = useState({
    title: "",
    type: "",
    discription: "",
    occation: "",
    from: "",
    to: "",
  });

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:4000/CampaignModels/` + id)
      .then((res) => {
        setcampaigninfos(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  function sendData(e) {
    e.preventDefault();

    axios
      .put(`http://localhost:4000/deliveryinfo/update/` + id, campaigninfos)
      .then(() => {
        alert("Campaign info updated successfully!");
        navigate("/campaigninfo");
      })
      .catch((err) => {
        alert(err);
      });
  }

  return (
    <>
      <div
        className="container"
        style={{
          marginTop: "150px",
          backgroundColor: "#5555",
          borderRadius: "20px",
          width: "800px",
          fontFamily: "italic",
        }}
      >
        <Form onSubmit={sendData} style={{ fontWeight: "bold" }}>
          <Form.Label
            style={{
              textAlign: "center",
              fontWeight: "bold",
              marginTop: "30px",
              color: "black",
              fontSize: "30px",
              fontFamily: "italic",
            }}
          >
            Campaign informations
          </Form.Label>
          <hr />
          <Form.Group className="mb-3" controlId="formGroupname">
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter the title"
              value={campaigninfos.title}
              onChange={(e) =>
                setcampaigninfos({ ...campaigninfos, title: e.target.value })
              }
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupaddress">
            <Form.Label>Type</Form.Label>
            <Form.Control
              type="text"
              placeholder="type"
              onChange={(e) =>
                setcampaigninfos({ ...campaigninfos, type: e.target.value })
              }
              value={campaigninfos.type}
              required
            />
            <br></br>
            <Row>
              <Col xs={7}>
                <Form.Label>Occation</Form.Label>
                <Form.Control
                  placeholder="occation"
                  onChange={(e) =>
                    setcampaigninfos({
                      ...campaigninfos,
                      occation: e.target.value,
                    })
                  }
                  value={campaigninfos.occation}
                  required
                />
              </Col>
              <Col xs={5}>
                <Form.Label>From</Form.Label>
                <Form.Control
                  placeholder="start date"
                  onChange={(e) =>
                    setcampaigninfos({ ...campaigninfos, from: e.target.value })
                  }
                  value={campaigninfos.from}
                  required
                />
              </Col>
            </Row>
            <br></br>
            <Row>
              <Col>
                <Form.Label>To</Form.Label>
                <Form.Control
                  placeholder="State"
                  onChange={(e) =>
                    setcampaigninfos({ ...campaigninfos, to: e.target.value })
                  }
                  value={campaigninfos.to}
                  required
                />
              </Col>
            </Row>
          </Form.Group>
          <br></br>
          <br></br>

          <div
            class="col-12"
            style={{ marginLeft: "-50px", marginTop: "15px" }}
          >
            <button class="btn btn-primary" type="submit">
              Update
            </button>
          </div>
          <div
            class="col-12"
            style={{ marginLeft: "80px", marginTop: "-38px" }}
          >
            <Link to="/CampaignDetails">
              <button class="btn btn-danger" type="button">
                cancel
              </button>
            </Link>
          </div>
          <br></br>
          <br></br>
        </Form>
      </div>
    </>
  );
}*/
