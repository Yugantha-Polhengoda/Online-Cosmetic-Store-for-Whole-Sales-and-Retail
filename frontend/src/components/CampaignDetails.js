//import { useState } from 'react'
import { useCampaignsContext } from "../hooks/useCampaignsContext";

//date fns
import formatRelative from "date-fns/formatRelative";

const CampaignDetails = ({ campaign }) => {
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
    <div className="campaign-details">
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
        <strong>From: </strong>
        {campaign.from}
      </p>
      <p>
        <strong>To: </strong>
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

export default CampaignDetails;
