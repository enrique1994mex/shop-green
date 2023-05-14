import productSvg from '../assets/heart.svg'
import product from '../assets/img/brush.jpg'
import style from '../styles/components/main.module.scss'

const ProductCard = () => {
	return (
		<div className={style.productCard}>
			<div className={style.icon}>
				<img src={productSvg} alt='Icono de producto' />
			</div>
			<div className={style.productImage}>
				<img src={product} alt='Cepillo' />
			</div>
			<h3>Cepillo de bambú</h3>
			<p>Paquete de 2 unidades</p>
		</div>
	)
}

export default ProductCard
