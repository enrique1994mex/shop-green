import style from '../styles/components/header.module.scss'
const Header = () => {
	return (
		<nav className={style.navbar}>
			<p>Eco-store</p>
			<button className='profile'>
				<svg></svg>
			</button>
			<button className='wishlist'>
				<svg></svg>
			</button>
			<button className='cart'>
				<svg></svg>
			</button>
		</nav>
	)
}

export default Header
