import instragram from '../assets/img/instagram.png'
import facebook from '../assets/img/facebook.png'
import twitter from '../assets/img/twitter.png'
import style from '../styles/components/footer.module.scss'

const SocialMedia = () => {
	return (
		<div className={style.social}>
			<img src={instragram} alt='Instagram' />
			<img src={facebook} alt='Facebook' />
			<img src={twitter} alt='Twitter' />
		</div>
	)
}

export default SocialMedia
