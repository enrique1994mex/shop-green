import { createContext } from 'react'
import { useInitialState } from '../hooks/useInitialState'

export const StoreContext = createContext(null)

export const StoreProvider = ({ children }) => {
	const initialState = useInitialState()

	return (
		<StoreContext.Provider value={initialState}>
			{children}
		</StoreContext.Provider>
	)
}
