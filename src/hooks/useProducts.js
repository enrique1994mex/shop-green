import { useContext } from 'react'
import { StoreContext } from '../context/StoreContext'

export const useProducts = () => {
	return useContext(StoreContext)
}
