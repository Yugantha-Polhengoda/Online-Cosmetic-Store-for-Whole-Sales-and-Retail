import { DiscountsContext } from '../context/DiscountContext'
import { useContext } from 'react'

export const useDiscountsContext = () => {
    const context = useContext(DiscountsContext)

    if (!context) {
        throw Error('useDiscountsContext must be used inside an DiscountsContextProvider')
    }
 
    return context
}