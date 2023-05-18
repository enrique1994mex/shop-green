import { useProducts } from '../hooks/useProducts'
import { actionTypes } from '../hooks/useInitialState'
import productSvg from '../assets/heart.svg'
import product from '../assets/img/brush.jpg'
import style from '../styles/components/main.module.scss'

const ProductCard = () => {
	const { dispatch } = useProducts()

	const addToCart = () => {
		dispatch({
			type: actionTypes.addToCart,
			payload: 'Cepillo de bambú',
		})
	}
	const addToFavorites = () => {
		dispatch({
			type: actionTypes.addToFavorites,
			payload: 'Cepillo de bambú',
		})
	}
	return (
		<div className={style.productCard}>
			<div className={style.icon}>
				<button onClick={addToFavorites}>
					<img src={productSvg} alt='Icono de producto' />
				</button>
			</div>
			<div className={style.productImage}>
				<img src={product} alt='Cepillo' />
			</div>
			<h3>Cepillo de bambú</h3>
			<p>Paquete de 2 unidades</p>
			<button onClick={addToCart}>Agregar al carrito</button>
		</div>
	)
}

export default ProductCard
