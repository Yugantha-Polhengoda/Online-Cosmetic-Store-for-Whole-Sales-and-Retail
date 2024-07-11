/*import { useState } from "react"
import { useDiscountsContext } from '../hooks/useDiscountContext'

const DiscountForm = () => {
  const { dispatch } = useDiscountsContext()

  const [image, setImage] = useState('')
  const [productid, setProductID] = useState('')
  const [retailprice, setRetailPrice] = useState('')
  const [discountprice, setDiscountPrice] = useState('')
  const [expdate, setExpDate] = useState('')
  const [error, setError] = useState(null)
  const [emptyFields, setEmptyFields] = useState([])

  const handleSubmit = async (e) => {
    e.preventDefault()

    
    const discount = { image, productid, retailprice, discountprice, expdate }

    const response = await fetch('/api/discounts', {
        method: 'POST',
        body: JSON.stringify(discount),
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
        setImage('')
        setProductID('')
        setRetailPrice('')
        setDiscountPrice('')
        setExpDate('')
        setError(null)
        setEmptyFields([])
        console.log('new discount added', json)
        dispatch({type: 'CREATE_DISCOUNT', payload: json})
    }
  }

    return(
      <form className="create" onSubmit={handleSubmit}>
        <h3>Add a New Discount</h3>
        <br></br>
        <label>Image:</label>
        <input  
          type="text"
          onChange={(e) => setImage(e.target.value)}
          value={image}
          className={emptyFields.includes('image') ? 'error' : ''}
        />

        <label>Product ID:</label>
        <input 
          type="text" 
          placeholder="ID"
          onChange={(e) => setProductID(e.target.value)}
          value={productid}
          className={emptyFields.includes('productid') ? 'error' : ''}
        />
       
        <label>Retail Price:</label>
        <input 
          type="text" 
          placeholder="$$"
          onChange={(e) => setRetailPrice(e.target.value)}
          value={retailprice}
          className={emptyFields.includes('retailprice') ? 'error' : ''}
        />

        <label>Discount Price:</label>
        <input 
          type="text" 
          placeholder="ID"
          onChange={(e) => setDiscountPrice(e.target.value)}
          value={discountprice}
          className={emptyFields.includes('discountprice') ? 'error' : ''}
        />
        
        <label>Expire Date:</label>
        <input 
          type="date"
          onChange={(e) => setExpDate(e.target.value)}
          value={expdate}
          className={emptyFields.includes('expdate') ? 'error' : ''}
        />
        

        <button>Add Discount</button>
        {error && <div className="error">{error}</div>}
      </form>
    )
}


export default DiscountForm */

/*import React, { useState } from "react"
import { ImagetoBase64 } from "../utility/ImagetoBase64"

const DiscountForm = () => {
 
  const [discount, setDiscount] = useState({  // Define a state variable for discount
    image: '',
    productid: '',
    retailprice: '',
    discountprice: '',
    expdate: ''
  })

  const uploadImage = async (e) => {
     console.log(e.files)
     const image = await ImagetoBase64(e.target.files[0])
     setDiscount(prevState => ({ ...prevState, image }))  // Update discount state with the image
  }

  const handleSubmit = async (e) => {
     e.preventDefault()
     console.log(discount)
     
     const fetchDiscount = await fetch(`${process.env.MONGO_URI}/createDiscount`,{
      method : "POST",
      headers : {
        "content-type" : "application/json"
      },
      body : JSON.stringify(discount)
     })

     const fetchRes = await fetchDiscount.json()

     console.log(fetchRes) 
  }
  

  return (
    <div>
      <form className='shadow flex flex-col p-3' onSubmit={handleSubmit}>
        <label htmlFor="image">Image :
          <div className="h-40 w-full bg-slate-300 my-3 rounded flex items-center justify-center cursor-pointer">
            {
              discount.image ? <img src={discount.image} className="h-full w-full"/> : <span className="text-5x1"></span>
            }
            <input type={"file"} accept="image/*" id="image" onChange={uploadImage} className="hidden"/>
          </div>
        </label>

        <label>Product ID:</label>
        <input 
          type="text" 
          placeholder="ID"
          onChange={(e) => setDiscount(prevState => ({ ...prevState, productid: e.target.value }))}
          value={discount.productid}
        />
       
        <label>Retail Price:</label>
        <input 
          type="text" 
          placeholder="$$"
          onChange={(e) => setDiscount(prevState => ({ ...prevState, retailprice: e.target.value }))}
          value={discount.retailprice}
        />

        <label>Discount Price:</label>
        <input 
          type="text" 
          placeholder="ID"
          onChange={(e) => setDiscount(prevState => ({ ...prevState, discountprice: e.target.value }))}
          value={discount.discountprice}
        />
        
        <label>Expire Date:</label>
        <input 
          type="date"
          onChange={(e) => setDiscount(prevState => ({ ...prevState, expdate: e.target.value }))}
          value={discount.expdate}
        />
        

        <button>Add Discount</button>
      </form>
    </div>
  )
}

export default DiscountForm*/

import { useState } from "react";
import { useDiscountsContext } from "../hooks/useDiscountContext";

const DiscountForm = () => {
  const { dispatch } = useDiscountsContext();

  const [image, setImage] = useState(null); // updated to null instead of empty string
  const [productid, setProductID] = useState("");
  const [retailprice, setRetailPrice] = useState("");
  const [discountprice, setDiscountPrice] = useState("");
  const [expdate, setExpDate] = useState("");
  const [error, setError] = useState(null);
  const [emptyFields, setEmptyFields] = useState([]);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const discount = { image, productid, retailprice, discountprice, expdate };

    const response = await fetch("/api/discounts", {
      method: "POST",
      body: JSON.stringify(discount),
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
      setImage(null);
      setProductID("");
      setRetailPrice("");
      setDiscountPrice("");
      setExpDate("");
      setError(null);
      setEmptyFields([]);
      console.log("new discount added", json);
      dispatch({ type: "CREATE_DISCOUNT", payload: json });
    }
  };

  return (
    <form className="create shadow flex flex-col p-3" onSubmit={handleSubmit}>
      <h3>Add a New Discount</h3>
      <br />
      <label htmlFor="image">
        Image:
        <div className="h-40 w-full bg-slate-300 my-3 rounded flex items-center justify-center cursor-pointer">
          <input
            type="file"
            accept="image/*"
            id="image"
            onChange={handleImageChange}
            className={emptyFields.includes("image") ? "error" : "hidden"}
          />
          {image && (
            <img src={image} alt="Discount" className="h-full w-full" />
          )}{" "}
          <span className="text-5x1"></span>
        </div>
      </label>

      <label>Product Name:</label>
      <input
        type="text"
        placeholder="Name"
        onChange={(e) => setProductID(e.target.value)}
        value={productid}
        className={emptyFields.includes("productid") ? "error" : ""}
      />

      <label>Retail Price:</label>
      <input
        type="text"
        placeholder="$$"
        onChange={(e) => setRetailPrice(e.target.value)}
        value={retailprice}
        className={emptyFields.includes("retailprice") ? "error" : ""}
      />

      <label>Discount Price:</label>
      <input
        type="text"
        placeholder="$$"
        onChange={(e) => setDiscountPrice(e.target.value)}
        value={discountprice}
        className={emptyFields.includes("discountprice") ? "error" : ""}
      />

      <label>Expire Date:</label>
      <input
        type="date"
        onChange={(e) => setExpDate(e.target.value)}
        value={expdate}
        className={emptyFields.includes("expdate") ? "error" : ""}
      />

      <button>Add Discount</button>
      {error && <div className="error">{error}</div>}
    </form>
  );
};

export default DiscountForm;

/*import React, { useState } from "react"
import { useDiscountsContext } from '../hooks/useDiscountContext'
import { ImagetoBase64 } from "../utility/ImagetoBase64"
//import {BsCloudUpload} from "react-icons/bs"

const DiscountForm = () => {
  const { dispatch } = useDiscountsContext()
 
  const [productid, setProductID] = useState('')
  const [retailprice, setRetailPrice] = useState('')
  const [discountprice, setDiscountPrice] = useState('')
  const [expdate, setExpDate] = useState('')

  const [discount, setDiscount] = useState({  // Define a state variable for discount
    image: ''
  })

  const uploadImage = async (e) => {
     console.log(e.files)
     const discount = await ImagetoBase64(e.target.files[0])
     //console.log(discount)
  }

    const handleSubmit = async (e) => {
     e.preventDefault()
     console.log(discount)
     
     const fetchDiscount = await fetch(`${process.env.MONGO_URI}/createDiscount`,{
      method : "POST",
      headers : {
        "content-type" : "application/json"
      },
      body : JSON.stringify(discount)
     })

     const fetchRes = await fetchDiscount.json()

     console.log(fetchRes) 
    }
  

  return (
    <div>
      <form className='shadow flex flex-col p-3' onSubmit={handleSubmit}>
      <label htmlFor="image">Image :
      <div className="h-40 w-full bg-slate-300 my-3 rounded flex items-center justify-center cursor-pointer">
        {
          discount.image ? <img src={discount.image} className="h-full w-full"/> : <span className="text-5x1"></span>
        }
        <input type={"file"} accept="image/*" id="image" onChange={uploadImage} className="hidden"/>
      </div>
      </label>

    
      <label>Product ID:</label>
        <input 
          type="text" 
          placeholder="ID"
          onChange={(e) => setProductID(e.target.value)}
          value={productid}
        />
       
        <label>Retail Price:</label>
        <input 
          type="text" 
          placeholder="$$"
          onChange={(e) => setRetailPrice(e.target.value)}
          value={retailprice}
        />

        <label>Discount Price:</label>
        <input 
          type="text" 
          placeholder="ID"
          onChange={(e) => setDiscountPrice(e.target.value)}
          value={discountprice}
        />
        
        <label>Expire Date:</label>
        <input 
          type="date"
          onChange={(e) => setExpDate(e.target.value)}
          value={expdate}
        />
        

        <button>Add Discount</button>
      </form>
    </div>
  )
}

export default DiscountForm*/

/*import React, { useState } from "react"
import { ImagetoBase64 } from "../utility/ImagetoBase64"
//import {BsCloudUpload} from "react-icons/bs"

const DiscountForm = () => {
 
  const [discount, setDiscount] = useState({
    image : "",
    Productid : "",
    RetailPrice : "",
    discountprice : "",
    expdate : ""
  })

  const handleOnChange = (e) => {
    const {name, value} = e.target

    setDiscount((preve) => {
      return{
        ...preve,
        [name] : value
      }
    })
  }

  const uploadImage = async (e) => {
     console.log(e.files)
     const discount = await ImagetoBase64(e.target.files[0])
     //console.log(discount)

     setDiscount((preve) => { 
      return{
        ...preve,
        image : discount
      }
     })
  }

    const handleSubmit = async (e) => {
     e.preventDefault()
     console.log(discount)
     
     const fetchDiscount = await fetch(`${process.env.MONGO_URI}/createDiscount`,{
      method : "POST",
      headers : {
        "content-type" : "application/json"
      },
      body : JSON.stringify(discount)
     })

     const fetchRes = await fetchDiscount.json()

     console.log(fetchRes) 
    }
  

  return (
    <div>
      <form className='shadow flex flex-col p-3' onSubmit={handleSubmit}>
      <label htmlFor="image">Image :
      <div className="h-40 w-full bg-slate-300 my-3 rounded flex items-center justify-center cursor-pointer">
        {
          discount.image ? <img src={discount.image} className="h-full w-full"/> : <span className="text-5x1"></span>
        }
        <input type={"file"} accept="image/*" id="image" onChange={uploadImage} className="hidden"/>
      </div>
      </label>

    
      <label htmlFor="productid">Product ID :</label>
        <input type={"text"} name="productid" className="" onChange={handleOnChange} placeholder="ID" />

        <label htmlFor="retailprice">Retail Price :</label>
        <input type={"text"} className="retailprice" name="retailprice" onChange={handleOnChange} placeholder="$$" />

        <label htmlFor="discountprice">Discount Price :</label>
        <input type={"text"} className="discountprice" name= "discountprice" onChange={handleOnChange} placeholder="ID"/>

        <label htmlFor="expdate">Expire Date :</label>
        <input type={"date"} className="expdate" name="expdate" onChange={handleOnChange} />
        <br></br>

        <button>Add Discount</button>

      </form>
    </div>
  )
}

export default DiscountForm*/

/*import { useState } from "react"
import { ImagetoBase64 } from "../utility/ImagetoBase64"
import { useDiscountsContext } from '../hooks/useDiscountContext'

const DiscountForm = () => {
  const { dispatch } = useDiscountsContext()

  const [image, setImage] = useState('')
  const [productid, setProductID] = useState('')
  const [retailprice, setRetailPrice] = useState('')
  const [discountprice, setDiscountPrice] = useState('')
  const [expdate, setExpDate] = useState('')
  const [error, setError] = useState(null)
  const [emptyFields, setEmptyFields] = useState([])

  const uploadImage = async (e) => {
    const image = await ImagetoBase64(e.target.files[0])
    setImage(image)

  /*const uploadImage = async (e) => {
    console.log(e.files)
    const image = await ImagetoBase64(e.target.files[0])
    //console.log(discount)*/

/*setImage((preve) => { 
     return{
       ...preve,
       image : image
     }
    })
 }



  /*const handleSubmit = async (e) => {
    e.preventDefault()

    const discount = { image, productid, retailprice, discountprice, expdate }

    const response = await fetch('/api/discounts', {
        method: 'POST',
        body: JSON.stringify(discount),
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
        setImage('')
        setProductID('')
        setRetailPrice('')
        setDiscountPrice('')
        setExpDate('')
        setError(null)
        setEmptyFields([])
        console.log('new discount added', json)
        dispatch({type: 'CREATE_DISCOUNT', payload: json})
    }
  }

    return(
      <form className="create shadow flex flex-col p-3" onSubmit={handleSubmit}>
        <h3>Add a New Discount</h3>

        <label htmlFor="image">Image:
        <div className="h-40 w-full bg-slate-300 my-3 rounded flex items-center justify-center cursor-pointer">
        {
        image ? (<img src={image} className="h-full w-full" alt="selected image" />) : (<span className="text-5x1"></span>)
        }

        {
          image ? <img src={image} className="h-full w-full"/> : <span className="text-5x1"></span>
        }
        <input  
          type="file" onChange={uploadImage} id="image" value={image} className={emptyFields.includes('image') ? 'error' : 'hidden'
        }
        />
        </div>
        </label>

        <label>Product ID:</label>
        <input 
          type="text" 
          placeholder="ID"
          onChange={(e) => setProductID(e.target.value)}
          value={productid}
          className={emptyFields.includes('productid') ? 'error' : ''}
        />
       
        <label>Retail Price:</label>
        <input 
          type="text" 
          placeholder="$$"
          onChange={(e) => setRetailPrice(e.target.value)}
          value={retailprice}
          className={emptyFields.includes('retailprice') ? 'error' : ''}
        />

        <label>Discount Price:</label>
        <input 
          type="text" 
          placeholder="ID"
          onChange={(e) => setDiscountPrice(e.target.value)}
          value={discountprice}
          className={emptyFields.includes('discountprice') ? 'error' : ''}
        />
        
        <label>Expire Date:</label>
        <input 
          type="date"
          onChange={(e) => setExpDate(e.target.value)}
          value={expdate}
          className={emptyFields.includes('expdate') ? 'error' : ''}
        />
        

        <button>Add Discount</button>
        {error && <div className="error">{error}</div>}
      </form>
    )
}


export default DiscountForm */

/*import { useState } from "react"
import { ImagetoBase64 } from "../utility/ImagetoBase64"
import { useDiscountsContext } from '../hooks/useDiscountContext'

const DiscountForm = () => {
  const { dispatch } = useDiscountsContext()

  const [image, setImage] = useState(null)
  const [productid, setProductID] = useState('')
  const [retailprice, setRetailPrice] = useState('')
  const [discountprice, setDiscountPrice] = useState('')
  const [expdate, setExpDate] = useState('')
  const [error, setError] = useState(null)
  const [emptyFields, setEmptyFields] = useState([])

  const uploadImage = async (e) => {
    const file = e.target.files[0]
    //const file = await ImagetoBase64(e.target.files[0])
    setImage(file)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const formData = new FormData()
    formData.append('image', image)
    formData.append('productid', productid)
    formData.append('retailprice', retailprice)
    formData.append('discountprice', discountprice)
    formData.append('expdate', expdate)

    const response = await fetch('/api/discounts', {
        method: 'POST',
        body: formData,
    }) 
    const json = await response.json() 

    if (!response.ok) {
        setError(json.error)
        setEmptyFields(json.emptyFields)
    }
    if(response.ok) {
        setImage(null)
        setProductID('')
        setRetailPrice('')
        setDiscountPrice('')
        setExpDate('')
        setError(null)
        setEmptyFields([])
        console.log('new discount added', json)
        dispatch({type: 'CREATE_DISCOUNT', payload: json})
    }
  }

  return(
    <form className="create shadow flex flex-col p-3" onSubmit={handleSubmit}>
      <h3>Add a New Discount</h3>

      <label htmlFor="image">Image:</label>
      <div className="h-40 w-full bg-slate-300 my-3 rounded flex items-center justify-center cursor-pointer">
        {image ? (
          <img src={image} className="h-full w-full" alt="selected image" />
        ) : (
          <span className="text-5x1"></span>
        )}
        <input  
          type="file" 
          onChange={uploadImage} 
          id="image" 
          className={emptyFields.includes('image') ? 'error' : ''}
        />
      </div>
 
      <label>Product ID:</label>
      <input 
        type="text" 
        placeholder="ID"
        onChange={(e) => setProductID(e.target.value)}
        value={productid}
        className={emptyFields.includes('productid') ? 'error' : ''}
      />
     
     <label>Retail Price:</label>
        <input 
          type="text" 
          placeholder="$$"
          onChange={(e) => setRetailPrice(e.target.value)}
          value={retailprice}
          className={emptyFields.includes('retailprice') ? 'error' : ''}
        />

        <label>Discount Price:</label>
        <input 
          type="text" 
          placeholder="ID"
          onChange={(e) => setDiscountPrice(e.target.value)}
          value={discountprice}
          className={emptyFields.includes('discountprice') ? 'error' : ''}
        />
        
        <label>Expire Date:</label>
        <input 
          type="date"
          onChange={(e) => setExpDate(e.target.value)}
          value={expdate}
          className={emptyFields.includes('expdate') ? 'error' : ''}
        />
        

        <button>Add Discount</button>
        {error && <div className="error">{error}</div>}
      </form>
    )
}


export default DiscountForm*/
