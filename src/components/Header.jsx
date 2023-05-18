import Profile from './Profile'
import style from '../styles/components/header.module.scss'

const Header = () => {
	return (
		<nav className={style.navbar}>
			<h1>Eco-store</h1>
			<Profile />
		</nav>
	)
}

export default Header
