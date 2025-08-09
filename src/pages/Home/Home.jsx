import './Home.css';
import BurguerIcon from '../../assets/svg/hamburger-svgrepo-com.svg';
import CalendarIcon from '../../assets/svg/calendar-heart-svgrepo-com.svg';
import MapsIcons from '../../assets/svg/maps-svgrepo-com.svg';
import FacebookIcon from '../../assets/svg/facebook-svgrepo-com.svg';
import InstagramIcon from '../../assets/svg/instagram-svgrepo-com.svg';
import WhatsAppIcon from '../../assets/svg/whatsapp-color-svgrepo-com.svg';

import {Link} from 'react-router-dom';

export default function Home() {
	return (
		<div class="home">
			<div className="home__blur-overlay"></div>
			<div className="home__content">
				<img className="restaurant_logo" src={BurguerIcon} alt="restaurant icon" srcset="" />
				<h1>¡Bienvenido a nuestro restaurante!</h1>
				<div className="home_Actions">
					<Link to="/menu" className="home_ActionsButtons">
						<p>Ver Menú</p>
					</Link>
					<Link className="home_ActionsButtons">
						<img src={CalendarIcon} alt="" srcset="" />
						<p>Reservar mesa</p>
					</Link>
					<Link className="home_ActionsButtons">
						<img src={MapsIcons} alt="" srcset="" />
						<p>Descubre como llegar</p>
					</Link>
				</div>
				<div className="home_socialNetworks">
					<a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
						<img src={FacebookIcon} alt="facebook" srcset="" />
					</a>
					<a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
						<img src={InstagramIcon} alt="instagram" srcset="" />
					</a>
					<a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
						<img src={WhatsAppIcon} alt="whatsapp" srcset="" />
					</a>
				</div>
			</div>
		</div>
	);
}
