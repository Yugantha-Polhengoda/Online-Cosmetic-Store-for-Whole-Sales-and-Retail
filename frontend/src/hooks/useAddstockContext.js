import { AddstocksContext } from '../context/AddstockContext'
import { useContext } from 'react'

export const useAddstocksContext = () => {
    const context = useContext(AddstocksContext)

    if (!context) {
        throw Error('useAddstocksContext must be used inside an AddstocksContextProvider')
    }
 
    return context
}
