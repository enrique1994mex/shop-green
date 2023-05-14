import Mission from './Mission'
import Products from './Products'
import Info from './Info'
import style from '../styles/components/main.module.scss'
const Main = () => {
	return (
		<main className={style.main}>
			<Mission />
			<Products />
			<Info />
		</main>
	)
}

export default Main
