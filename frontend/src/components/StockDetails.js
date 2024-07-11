//import { useState } from 'react'
import { useAddstocksContext } from '../hooks/useAddstockContext'

//date fns
import formatRelative from 'date-fns/formatRelative'



const StockDetails = ({ stock }) => {
  const { dispatch } = useAddstocksContext()

  const handleClick = async () => {
    const response = await fetch('/api/stocks/' + stock._id, {
      method: 'DELETE'
    })
    const json = await response.json()

    if (response.ok) {
      dispatch({type: 'DELETE_STOCK', payload: json})
    }
  } 


//update
/*const handleEdit = async () => {
  setIsEditing(true);
};

const handleSave = async () => {
  const response = await fetch('/api/campaigns/' + campaign._id, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(editedCampaign)
  });
  const json = await response.json();

  if (response.ok) {
    dispatch({type: 'UPDATE_CAMPAIGN', payload: json});
    setIsEditing(false);
  }
}

const handleCancel = async () => {
  setIsEditing(false);
  setEditedCampaign(campaign);
}

const handleInputChange = (event) => {
  setEditedCampaign({
    ...editedCampaign,
    [event.target.name]: event.target.value
  })
}


/*const [campaignDetails, setcampaignDetails] = useState(campaign);

  useEffect(() => {
  setcampaignDetails(campaign);
  }, [campaign]);

const handleEdit = (event) => {
  event.preventDefault();
  dispatch(updateCampaign(campaignDetails));
}*/

  return (
    <div className="stock-details">
      <br></br><br></br>
        <p><strong></strong></p>
        <h4>{stock.title}</h4>
        <p><strong>Campaign Type: </strong>{stock.type}</p>
        <p><strong>Product ID: </strong>{stock.productid}</p>
        <p><strong>Stock ID: </strong>{stock.stockid}</p>
        <p><strong>Discount: </strong>{stock.discount}</p>
        <p>{formatRelative(new Date(stock.createdAt), new Date())}</p>
        <div className='delete'><span className="material-symbols-outlined" onClick={handleClick}>Delete</span></div>
        <div className='edit'><span className="material-symbols-outlined" onClick={handleClick}>edit</span></div>
    </div>
  )
}



export default StockDetails 