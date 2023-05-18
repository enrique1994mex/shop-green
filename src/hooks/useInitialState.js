import { useReducer } from 'react'

export const actionTypes = {
	addToCart: 'ADD_TO_CART',
	addToFavorites: 'ADD_TO_FAVORITES',
}

const initialState = {
	cart: [],
	favorites: [],
}

const reducer = (state, action) => {
	switch (action.type) {
		case actionTypes.addToCart:
			return {
				...state,
				cart: [...state.cart, action.payload],
			}
		case actionTypes.addToFavorites:
			return {
				...state,
				favorites: [...state.favorites, action.payload],
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
