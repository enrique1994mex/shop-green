import SocialMedia from './SocialMedia'
import style from '../styles/components/footer.module.scss'
const Footer = () => {
	return (
		<footer className={style.footer}>
			<h3>Eco-store</h3>
			<p>Careers</p>
			<p>Terms and conditions</p>
			<p>Eco-store inc.</p>
			<SocialMedia />
		</footer>
	)
}

export default Footer
