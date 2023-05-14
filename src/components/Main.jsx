import imageMain from '../assets/img/main.jpg'
import productSvg from '../assets/heart.svg'
import product from '../assets/img/brush.jpg'
import earth from '../assets/img/earth.png'
import ecology from '../assets/img/ecology.png'
import gallery1 from '../assets/img/gallery-1.jpg'
import gallery2 from '../assets/img/gallery-2.jpg'
import gallery3 from '../assets/img/gallery-3.jpg'
import map from '../assets/img/map.png'
import style from '../styles/components/main.module.scss'
const Main = () => {
	return (
		<main className={style.main}>
			<article>
				<div className={style.impact}>
					<h1>Impacto ecológico</h1>
					<p>
						Debido al impacto ambiental siendo las acciones <br />
						humanas las que modifican el ambiente, Eco-store <br /> se
						compromete a elaborar sus productos de manera <br />
						artesanal y con materiales que favorecen al cuidado <br /> del medio
						ambiente. Conoce más
					</p>
					<button>Conoce más</button>
				</div>
				<div className={style.image}>
					<img src={imageMain} alt='Imagen principal' />
				</div>
			</article>
			<section className={style.product}>
				<div className={style.healthcare}>
					<h2>Cuidado de la salud</h2>
					<div className={style.card}>
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
					</div>
				</div>
				<div className={style.furniture}>
					<h2>Decoración del hogar</h2>
					<div className={style.card}>
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
					</div>
				</div>
			</section>
			<section className='info'>
				<div className={style.aboutUs}>
					<h2>¿Por qué nosotros?</h2>
					<div className={style.mision}>
						<div className={style.earth}>
							<img src={earth} alt='Tierra' />
							<p>
								Compromiso con el medio ambiente garantizando el uso de
								materiales 100% reciclables.
							</p>
						</div>
						<div className={style.innovation}>
							<img src={ecology} alt='Ecología' />
							<p>
								Innovando con estilo el diseño de nuestros muebles es único.
							</p>
						</div>
					</div>
				</div>
				<div className={style.gallery}>
					<h2>Galería de estilos</h2>
					<div className={style.galleryImages}>
						<img src={gallery1} alt='Galería 1' />
						<img src={gallery2} alt='Galería 2' />
						<img src={gallery3} alt='Galería 3' />
					</div>
				</div>
				<div className={style.location}>
					<h2>Encuéntranos</h2>
					<div className={style.map}>
						<img src={map} alt='Mapa' />
					</div>
					<h3>Centro Mayor Centro Comercial</h3>
					<p>Cl. 38A Sur #34d-51, Bogotá, Colombia</p>
				</div>
			</section>
		</main>
	)
}

export default Main
