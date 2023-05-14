import instragram from '../assets/img/instagram.png'
import facebook from '../assets/img/facebook.png'
import twitter from '../assets/img/twitter.png'
import style from '../styles/components/footer.module.scss'
const Footer = () => {
	return (
		<footer className={style.footer}>
			<h3>Eco-store</h3>
			<p>Careers</p>
			<p>Terms and conditions</p>
			<p>Eco-store inc.</p>
			<div className={style.social}>
				<img src={instragram} alt='Instagram' />
				<img src={facebook} alt='Facebook' />
				<img src={twitter} alt='Twitter' />
			</div>
		</footer>
	)
}

export default Footer
