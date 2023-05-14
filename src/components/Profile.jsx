import style from '../styles/components/header.module.scss'
import profile from '../assets/profile.svg'
import heart from '../assets/heart.svg'
import shopping from '../assets/shopping-cart.svg'

const Profile = () => {
	return (
		<div className={style.icons}>
			<button className='profile'>
				<img src={profile} height='30' width='30' />
			</button>
			<button className='wishlist'>
				<img src={heart} height='30' width='30' />
			</button>
			<button className='cart'>
				<img src={shopping} height='30' width='30' />
			</button>
		</div>
	)
}

export default Profile
