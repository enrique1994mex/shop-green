import ProductCard from './ProductCard'
import style from '../styles/components/main.module.scss'

const Products = () => {
	return (
		<section className={style.product}>
			<div className={style.healthcare}>
				<h2>Cuidado de la salud</h2>
				<div className={style.card}>
					<ProductCard />
					<ProductCard />
					<ProductCard />
					<ProductCard />
					<ProductCard />
					<ProductCard />
				</div>
			</div>
			<div className={style.furniture}>
				<h2>Decoración del hogar</h2>
				<div className={style.card}>
					<ProductCard />
					<ProductCard />
					<ProductCard />
					<ProductCard />
					<ProductCard />
					<ProductCard />
				</div>
			</div>
		</section>
	)
}

export default Products
