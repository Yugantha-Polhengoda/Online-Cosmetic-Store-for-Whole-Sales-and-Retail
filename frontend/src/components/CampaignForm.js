import { useState } from "react";
import { useCampaignsContext } from "../hooks/useCampaignsContext";
//import CampaignDetails from "./CampaignDetails"

const CampaignForm = () => {
  const { dispatch } = useCampaignsContext();

  const [title, setTitle] = useState("");
  const [type, setType] = useState("");
  const [discription, setDiscription] = useState("");
  const [occation, setOccation] = useState("");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [error, setError] = useState(null);
  const [emptyFields, setEmptyFields] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const campaign = { title, type, discription, occation, from, to };

    const response = await fetch("/api/campaigns", {
      method: "POST",
      body: JSON.stringify(campaign),
      headers: {
        "content-Type": "application/json",
      },
    });
    const json = await response.json();

    if (!response.ok) {
      setError(json.error);
      setEmptyFields(json.emptyFields);
    }
    if (response.ok) {
      setTitle("");
      setType("");
      setDiscription("");
      setOccation("");
      setFrom("");
      setTo("");
      setError(null);
      setEmptyFields([]);
      console.log("new campaign added", json);
      dispatch({ type: "CREATE_CAMPAIGN", payload: json });
    }
  };

  return (
    <form className="create shadow flex flex-col p-3" onSubmit={handleSubmit}>
      <h3>Create a New Campaign</h3>
      <br></br>

      <label>Campaign Name:</label>
      <input
        type="text"
        placeholder="Name"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        className={emptyFields.includes("title") ? "error" : ""}
      />

      <label>Campaign Type:</label>
      <input
        type="text"
        placeholder="Type"
        onChange={(e) => setType(e.target.value)}
        value={type}
        className={emptyFields.includes("type") ? "error" : ""}
      />

      <label>Campaign Discription:</label>
      <input
        type="text"
        placeholder="Discription"
        onChange={(e) => setDiscription(e.target.value)}
        value={discription}
        className={emptyFields.includes("discription") ? "error" : ""}
      />

      <label>
        Special Occation:
        <div>
          <select
            className="sel"
            placeholder="Select"
            value={occation}
            onChange={(e) => setOccation(e.target.value)}
          >
            <option>Select </option>
            <option>Friday Special</option>
            <option>New Year</option>
            <option>Sinhala & Tamil New Year</option>
            <option>Christmas</option>
          </select>
        </div>
      </label>

      <label>From:</label>
      <input
        type="date"
        onChange={(e) => setFrom(e.target.value)}
        value={from}
        className={emptyFields.includes("from") ? "error" : ""}
      />

      <label>To:</label>
      <input
        type="date"
        onChange={(e) => setTo(e.target.value)}
        value={to}
        className={emptyFields.includes("to") ? "error" : ""}
      />
      <br></br>

      <button>Add Campaign</button>
      {error && <div className="error">{error}</div>}
    </form>
  );
};

export default CampaignForm;
