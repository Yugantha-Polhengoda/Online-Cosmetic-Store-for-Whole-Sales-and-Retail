import { useState } from "react"
import { useAddstocksContext } from '../hooks/useAddstockContext'
//import CampaignDetails from "./CampaignDetails"

const AddStockForm = () => {
  const { dispatch } = useAddstocksContext()

  const [title, setTitle] = useState('')
  const [type, setType] = useState('')
  const [productid, setProductID] = useState('')
  const [stockid, setStockID] = useState('')
  const [discount, setDiscount] = useState('')
  const [error, setError] = useState(null)
  const [emptyFields, setEmptyFields] = useState([])

  const handleSubmit = async (e) => {
    e.preventDefault()

    const stock = { title, type, productid, stockid, discount}

    const response = await fetch('/api/stocks', {
        method: 'POST',
        body: JSON.stringify(stock),
        headers: {
            'content-Type': 'application/json'
        }
    }) 
    const json = await response.json() 

    if (!response.ok) {
        setError(json.error)
        setEmptyFields(json.emptyFields)
    }
    if(response.ok) {
        setTitle('')
        setType('')
        setProductID('')
        setStockID('')
        setDiscount('')
        setError(null)
        setEmptyFields([])
        console.log('new stock added', json)
        dispatch({type: 'CREATE_STOCK', payload: json})
    }
  }

    return(
      <form className="create shadow flex flex-col p-3" onSubmit={handleSubmit}>
        <h3>Add a New Stock</h3><br></br>

        <label>Campaign Name:</label>
        <input 
          type="text" 
          placeholder="Name"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          className={emptyFields.includes('title') ? 'error' : ''}
        />
       
        <label>Campaign Type:</label>
        <input 
          type="text" 
          placeholder="Type"
          onChange={(e) => setType(e.target.value)}
          value={type}
          className={emptyFields.includes('type') ? 'error' : ''}
        />

        <label>Product ID:</label>
        <input 
          type="text" 
          placeholder="ID"
          onChange={(e) => setProductID(e.target.value)}
          value={productid}
          className={emptyFields.includes('productid') ? 'error' : ''}
        />

        <label>Stock ID:</label>
        <input 
          type="text" 
          placeholder="ID"
          onChange={(e) => setStockID(e.target.value)}
          value={stockid}
          className={emptyFields.includes('stockid') ? 'error' : ''}
        />

        <label>Discount:</label>
        <input 
          type="text" 
          placeholder="%%"
          onChange={(e) => setDiscount(e.target.value)}
          value={discount}
          className={emptyFields.includes('discount') ? 'error' : ''}
        />
        <br></br>

        <button>Add Stock</button>
        {error && <div className="error">{error}</div>}
      </form>
    )
}


export default AddStockForm 