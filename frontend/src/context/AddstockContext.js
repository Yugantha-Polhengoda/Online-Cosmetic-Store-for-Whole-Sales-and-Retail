import { createContext, useReducer, } from 'react'

export const AddstocksContext = createContext()



export const AddstocksReducer = (state, action) => {
   switch (action.type) {
    case 'SET_STOCKS':
        return {
            stocks: action.payload
        }
    case 'CREATE_STOCK':
        return {
            stocks: [action.payload, ...state.stocks]
        }
    case 'UPDATE_STOCK':
        return state.map(stock => {
              if (stock._id === action.payload._id) 
              {
                return action.payload
              } else {
                return stock
              }
            })
    case 'DELETE_STOCK':
        return {
            stocks: state.stocks.filter((c) => c._id !== action.payload._id)
        }
    default:
        return state
   }
}

export const AddstocksContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AddstocksReducer, {
        stocks: null
    })

    return(
        <AddstocksContext.Provider value={{...state, dispatch}}>
           { children }
        </AddstocksContext.Provider>
    )
}
