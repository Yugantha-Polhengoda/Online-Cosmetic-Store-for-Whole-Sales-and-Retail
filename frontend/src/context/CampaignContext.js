import { createContext, useReducer, } from 'react'

export const CampaignsContext = createContext()



export const CampaignsReducer = (state, action) => {
   switch (action.type) {
    case 'SET_CAMPAIGNS':
        return {
            campaigns: action.payload
        }
    case 'CREATE_CAMPAIGN':
        return {
            campaigns: [action.payload, ...state.campaigns]
        }
    /*case 'UPDATE_CAMPAIGN':
        return state.map(campaign => {
              if (campaign._id === action.payload._id) 
              {
                return action.payload
              } else {
                return campaign
              }
            })*/
    case 'DELETE_CAMPAIGN':
        return {
            campaigns: state.campaigns.filter((c) => c._id !== action.payload._id)
        }
    case 'UPDATE_CAMPAIGN':
        const updatedCampaigns = state.campaigns.map(campaign => {
            if (campaign._id === action.payload._id) {
            return { ...campaign, ...action.payload }
            } 
            else {
                return campaign
              }
            })
            return {
              campaigns: updatedCampaigns
            }

    default:
        return state
   }
}

export const CampaignsContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(CampaignsReducer, {
        campaigns: null
    })

    return(
        <CampaignsContext.Provider value={{...state, dispatch}}>
           { children }
        </CampaignsContext.Provider>
    )
}
