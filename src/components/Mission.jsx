import imageMain from '../assets/img/main.jpg'
import style from '../styles/components/main.module.scss'

const Mission = () => {
	return (
		<article>
			<div className={style.impact}>
				<h1>Impacto ecológico</h1>
				<p>
					Debido al impacto ambiental siendo las acciones <br />
					humanas las que modifican el ambiente, Eco-store <br /> se compromete
					a elaborar sus productos de manera <br />
					artesanal y con materiales que favorecen al cuidado <br /> del medio
					ambiente. Conoce más
				</p>
				<button>Conoce más</button>
			</div>
			<div className={style.image}>
				<img src={imageMain} alt='Imagen principal' />
			</div>
		</article>
	)
}

export default Mission
