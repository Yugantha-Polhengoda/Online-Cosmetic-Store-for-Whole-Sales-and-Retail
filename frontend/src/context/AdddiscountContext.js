/*import { createContext, useReducer, } from 'react'

/*export const AdddiscountsContext = createContext()



/*export const AdddiscountsReducer = (state, action) => {
   switch (action.type) {
    case 'SET_DISCOUNTS':
        return {
            stocks: action.payload
        }
    case 'CREATE_DISCOUNT':
        return {
            discounts: [action.payload, ...state.discounts]
        }
    case 'UPDATE_DISCOUNT':
        return state.map(discount => {
              if (discount._id === action.payload._id) 
              {
                return action.payload
              } else {
                return discount
              }
            })
    case 'DELETE_DISCOUNT':
        return {
            discounts: state.discounts.filter((c) => c._id !== action.payload._id)
        }
    default:
        return state
   }
}

export const AdddiscountsContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AdddiscountsReducer, {
        discounts: null
    })

    return(
        <AdddiscountsContext.Provider value={{...state, dispatch}}>
           { children }
        </AdddiscountsContext.Provider>
    )
}*/
