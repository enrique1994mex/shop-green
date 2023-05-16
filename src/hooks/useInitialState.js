import { useReducer } from 'react'

export const actionTypes = {
	addToProduct: 'ADD_TO_PRODUCT',
}

const initialState = {
	products: [],
}

const reducer = (state, action) => {
	switch (action.type) {
		case actionTypes.addToProduct:
			return {
				...state,
				products: [...state.products, action.payload],
			}
		default:
			return state
	}
}

export const useInitialState = () => {
	const [state, dispatch] = useReducer(reducer, initialState)

	return {
		state,
		dispatch,
	}
}
