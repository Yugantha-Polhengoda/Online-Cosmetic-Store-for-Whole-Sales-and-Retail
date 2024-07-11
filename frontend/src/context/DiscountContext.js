/*import { createContext, useReducer, } from 'react'

export const DiscountsContext = createContext()



export const DiscountsReducer = (state, action) => {
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

export const DiscountsContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(DiscountsReducer, {
        discounts: null
    })

    return(
        <DiscountsContext.Provider value={{...state, dispatch}}>
           { children }
        </DiscountsContext.Provider>
    )
}*/

import { createContext, useReducer } from "react";

export const DiscountsContext = createContext();

export const DiscountsReducer = (state, action) => {
  switch (action.type) {
    case "SET_DISCOUNTS":
      return {
        discounts: action.payload,
      };
    case "CREATE_DISCOUNT":
      return {
        discounts: [action.payload, ...state.discounts],
      };
    case "UPDATE_DISCOUNT":
      return {
        discounts: state.discounts.map((discount) => {
          if (discount._id === action.payload._id) {
            return action.payload;
          } else {
            return discount;
          }
        }),
      };
    case "DELETE_DISCOUNT":
      return {
        discounts: state.discounts.filter((c) => c._id !== action.payload._id),
      };
    default:
      return state;
  }
};

export const DiscountsContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(DiscountsReducer, {
    discounts: [],
  });

  return (
    <DiscountsContext.Provider value={{ ...state, dispatch }}>
      {children}
    </DiscountsContext.Provider>
  );
};
