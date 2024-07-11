import ReactDOM from "react-dom";
import { ThemeProvider } from "@mui/material/styles";
import { createTheme } from "@mui/material/styles";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import MUIDataTable from "mui-datatables";

import React from "react";
import { useEffect } from "react";
import { useCampaignsContext } from "../hooks/useCampaignsContext";
import { useState } from "react";
import axios from "axios";

import { Row, Col, Container } from "react-bootstrap";
import "./style.css";
import { NavLink } from "react-router-dom";
import Layout from "../components/Layout";

const Monthlyreport = () => {
  const [responsive, setResponsive] = useState("vertical");
  const [tableBodyHeight, setTableBodyHeight] = useState("400px");
  const [tableBodyMaxHeight, setTableBodyMaxHeight] = useState("");
  const [searchBtn, setSearchBtn] = useState(true);
  const [downloadBtn, setDownloadBtn] = useState(true);
  const [printBtn, setPrintBtn] = useState(true);
  const [viewColumnBtn, setViewColumnBtn] = useState(true);
  const [filterBtn, setFilterBtn] = useState(true);

  const muiCache = createCache({
    key: "mui-datatables",
    prepend: true,
  });

  const options = {
    search: searchBtn,
    download: downloadBtn,
    print: printBtn,
    viewColumns: viewColumnBtn,
    filter: filterBtn,
    filterType: "dropdown",
    responsive,
    tableBodyHeight,
    tableBodyMaxHeight,
    onTableChange: (action, state) => {
      console.log(action);
      console.dir(state);
    },
  };

  const [campaigns, setCampaigns] = useState([]);

  const getData = async () => {
    await axios.get("http://localhost:4000/api/campaigns/").then((response) => {
      const data = response.data;
      console.log(data);
      setCampaigns(data);
    });
  };

  useEffect(() => {
    getData();
  }, []);

  const columns = [
    {
      name: "title",
      label: "Campaign Name",
      options: { filterOptions: { fullWidth: true } },
    },
    { name: "type", label: "Campaign Type" },
    { name: "discription", label: "Campaign Discription" },
    { name: "occation", label: "Special Occation" },
    { name: "from", label: "Start Date" },
    { name: "to", label: "End Date" },
  ];

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
              <h1>Monthly Report</h1>
            </div>

            <br />
            <CacheProvider value={muiCache}>
              <ThemeProvider theme={createTheme()}>
                {/*<FormControl>
                  <InputLabel id="demo-simple-select-label">
                    Responsive Option
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={responsive}
                    style={{
                      width: "200px",
                      marginBottom: "10px",
                      marginRight: 10,
                    }}
                    onChange={(e) => setResponsive(e.target.value)}
                  >
                    <MenuItem value={"vertical"}>vertical</MenuItem>
                    <MenuItem value={"standard"}>standard</MenuItem>
                    <MenuItem value={"simple"}>simple</MenuItem>

                    <MenuItem value={"scroll"}>scroll (deprecated)</MenuItem>
                    <MenuItem value={"scrollMaxHeight"}>
                      scrollMaxHeight (deprecated)
                    </MenuItem>
                    <MenuItem value={"stacked"}>stacked (deprecated)</MenuItem>
                  </Select>
                </FormControl>

                <FormControl>
                  <InputLabel id="demo-simple-select-label">
                    Table Body Height
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={tableBodyHeight}
                    style={{
                      width: "200px",
                      marginBottom: "10px",
                      marginRight: 10,
                    }}
                    onChange={(e) => setTableBodyHeight(e.target.value)}
                  >
                    <MenuItem value={""}>[blank]</MenuItem>
                    <MenuItem value={"400px"}>400px</MenuItem>
                    <MenuItem value={"800px"}>800px</MenuItem>
                    <MenuItem value={"100%"}>100%</MenuItem>
                  </Select>
                </FormControl>
                <FormControl>
                  <InputLabel id="demo-simple-select-label">
                    Max Table Body Height
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={tableBodyMaxHeight}
                    style={{ width: "200px", marginBottom: "10px" }}
                    onChange={(e) => setTableBodyMaxHeight(e.target.value)}
                  >
                    <MenuItem value={""}>[blank]</MenuItem>
                    <MenuItem value={"400px"}>400px</MenuItem>
                    <MenuItem value={"800px"}>800px</MenuItem>
                    <MenuItem value={"100%"}>100%</MenuItem>
                  </Select>
                </FormControl>

                <FormControl>
                  <InputLabel id="demo-simple-select-label">
                    Search Button
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={searchBtn}
                    style={{ width: "200px", marginBottom: "10px" }}
                    onChange={(e) => setSearchBtn(e.target.value)}
                  >
                    <MenuItem value={"true"}>{"true"}</MenuItem>
                    <MenuItem value={"false"}>{"false"}</MenuItem>
                    <MenuItem value={"disabled"}>disabled</MenuItem>
                  </Select>
                </FormControl>
                <FormControl>
                  <InputLabel id="demo-simple-select-label">
                    Download Button
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={downloadBtn}
                    style={{ width: "200px", marginBottom: "10px" }}
                    onChange={(e) => setDownloadBtn(e.target.value)}
                  >
                    <MenuItem value={"true"}>{"true"}</MenuItem>
                    <MenuItem value={"false"}>{"false"}</MenuItem>
                    <MenuItem value={"disabled"}>disabled</MenuItem>
                  </Select>
                </FormControl>
                <FormControl>
                  <InputLabel id="demo-simple-select-label">
                    Print Button
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={printBtn}
                    style={{ width: "200px", marginBottom: "10px" }}
                    onChange={(e) => setPrintBtn(e.target.value)}
                  >
                    <MenuItem value={"true"}>{"true"}</MenuItem>
                    <MenuItem value={"false"}>{"false"}</MenuItem>
                    <MenuItem value={"disabled"}>disabled</MenuItem>
                  </Select>
                </FormControl>
                <FormControl>
                  <InputLabel id="demo-simple-select-label">
                    View Column Button
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={viewColumnBtn}
                    style={{ width: "200px", marginBottom: "10px" }}
                    onChange={(e) => setViewColumnBtn(e.target.value)}
                  >
                    <MenuItem value={"true"}>{"true"}</MenuItem>
                    <MenuItem value={"false"}>{"false"}</MenuItem>
                    <MenuItem value={"disabled"}>disabled</MenuItem>
                  </Select>
                </FormControl>
                <FormControl>
                  <InputLabel id="demo-simple-select-label">
                    Filter Button
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={filterBtn}
                    style={{ width: "200px", marginBottom: "10px" }}
                    onChange={(e) => setFilterBtn(e.target.value)}
                  >
                    <MenuItem value={"true"}>{"true"}</MenuItem>
                    <MenuItem value={"false"}>{"false"}</MenuItem>
                    <MenuItem value={"disabled"}>disabled</MenuItem>
                  </Select>
                </FormControl>*/}

                <MUIDataTable
                  title={"Campaign Report"}
                  data={campaigns}
                  columns={columns}
                  options={options}
                />
                <br />
                <MUIDataTable
                  title={"Discount Report"}
                  data={campaigns}
                  columns={columns}
                  options={options}
                />
              </ThemeProvider>
            </CacheProvider>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};

export default Monthlyreport;
