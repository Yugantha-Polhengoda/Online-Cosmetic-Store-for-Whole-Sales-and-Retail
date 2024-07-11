//import { useState } from 'react'
import { useCampaignsContext } from "../hooks/useCampaignsContext";

//date fns
import formatRelative from "date-fns/formatRelative";

const MonthlyReportDetails = ({ campaign }) => {
  const { dispatch } = useCampaignsContext();

  const handleClick = async () => {
    const response = await fetch("/api/campaigns/" + campaign._id, {
      method: "DELETE",
    });
    const json = await response.json();

    if (response.ok) {
      dispatch({ type: "DELETE_CAMPAIGN", payload: json });
    }
  };

  return (
    <div className="Report-details">
      <br></br>
      <br></br>
      <label className="Micon">
        <h2>Monthly Report</h2>
      </label>

      <div className="checkbox">
        <label className="checkboxmargin" for="accept">
          <input
            className="Cicon"
            type="checkbox"
            id="accept"
            name="accept"
            value="yes"
          />{" "}
          <h2>Ended</h2>
        </label>
      </div>

      <hr></hr>
      <br></br>
      <br></br>

      <p>
        <strong></strong>
      </p>
      <h4>{campaign.title}</h4>
      <p>
        <strong>Campaign Type: </strong>
        {campaign.type}
      </p>
      <p>
        <strong>Campaign Discription: </strong>
        {campaign.discription}
      </p>
      <p>
        <strong>Special Occation: </strong>
        {campaign.occation}
      </p>
      <p>
        <strong>Start Date: </strong>
        {campaign.from}
      </p>
      <p>
        <strong>End Date: </strong>
        {campaign.to}
      </p>
      <p>{formatRelative(new Date(campaign.createdAt), new Date())}</p>
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

export default MonthlyReportDetails;
