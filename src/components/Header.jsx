import Profile from './Profile'
import style from '../styles/components/header.module.scss'

const Header = () => {
	return (
		<nav className={style.navbar}>
			<p>Eco-store</p>
			<Profile />
		</nav>
	)
}

export default Header
