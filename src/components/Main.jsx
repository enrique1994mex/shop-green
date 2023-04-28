import style from '../styles/components/main.module.scss'
const Main = () => {
	return (
		<main className={style.main}>
			<article>
				<div className='impact'>
					<h1>Impacto ecológico</h1>
					<p>
						Impacto Ecológico Debido al impacto ambiental siendo las acciones
						humanas las que modifican el ambiente, Eco-store se compromete a
						elaborar sus productos de manera artesanal y con materiales que
						favorecen al cuidado del medio ambiente. Conoce más
					</p>
					<button>Conoce más</button>
				</div>
				<div className='image'>
					<img src='' alt='' />
				</div>
			</article>
			<section className='product'>
				<div className='healthcare'>
					<h2>Cuidado de la salud</h2>
				</div>
				<div className='furniture'>
					<h2>Decoración del hogar</h2>
				</div>
			</section>
			<section className='info'>
				<div className='about-us'>
					<h2>¿Por qué nosotros?</h2>
					<div className='earth'>
						<img src='' alt='' />
					</div>
					<div className='innovation'>
						<img src='' alt='' />
					</div>
				</div>
				<div className='gallery'>
					<h2>Galería de estilos</h2>
					<div>
						<img src='' alt='' />
					</div>
					<div>
						<img src='' alt='' />
					</div>
					<div>
						<img src='' alt='' />
					</div>
				</div>
				<div className='location'>
					<h2>Encuéntranos</h2>
					<div className='map'>
						<img src='' alt='' />
					</div>
					<p></p>
				</div>
			</section>
		</main>
	)
}

export default Main
