import './Menu.css';

import {useState} from 'react';

import BurguerIcon from '../../assets/svg/hamburger-svgrepo-com.svg';
import CategoryImg from '../../assets/img/category-img.webp';
import Plato_img from '../../assets/img/plato-img.webp';

const categorys = [
	{
		id: 1,
		name: 'Category 1',
		image: 'category-img.webp',
		dishes: [
			{id: 1, name: 'Dish 1', price: 5000, image: 'https://example.com/dish1.jpg', description: '', observations: 'Spicy', quantifier: 'unique'},
			{id: 2, name: 'Dish 2', price: 10000, image: 'https://example.com/dish2.jpg', description: '', quantifier: 'numeral'},
			{id: 3, name: 'Dish 3', price: 20000, image: 'https://example.com/dish3.jpg', description: '', quantifier: 'numeral'},
		],
	},
];

export default function Menu() {
	return (
		<div className="menu">
			<div className="menu_background-image"></div>
			<div className="menu_content">
				<header className="menu_header">
					<img className="restaurant_logo" src={BurguerIcon} alt="restaurant icon" srcset="" />
					<h1>Nuestro restaurante</h1>
					<input type="text" name="finder" id="menu_input-finder" className="menu_input-finder" />
				</header>
				<ul className="categorys">
					{categorys.map((category) => (
						<Category key={`category-${category.id}`} category={category} />
					))}
				</ul>
			</div>
		</div>
	);
}

function Category({category}) {
	const [showDishes, setShowDishes] = useState(false);

	function toggleDishes() {
		setShowDishes(!showDishes);
	}
	return (
		<li key={`category-${category.id}`} className="category">
			<img src={CategoryImg} alt={category.name} className="category-image" onClick={toggleDishes} />
			<ul className={`dishes ${!showDishes && 'dishes-hidden'}`}>
				{category.dishes.map((dish) => (
					<Dish key={`dish-${dish.id}`} dish={dish} />
				))}
			</ul>
		</li>
	);
}

function Dish({dish}) {
	return (
		<li key={`dish-${dish.id}`} className="dish">
			<div className="dish-image-container">
				<img src={Plato_img} alt={dish.name} className="dish-image" />
			</div>
			<div className="dish-details">
				<h3 className="dish-name">{dish.name}</h3>
				<p className="dish-price">${dish.price}</p>
				<p className="dish-description">{dish.description || 'No description available'}</p>
				{dish.observations && <p className="dish-observations">{dish.observations}</p>}
			</div>
			<div className="dish-actions">
				<div className="dish-actions_butons">
					{dish.quantifier === 'unique' ? (
						<button className="dish-add-button">Add</button>
					) : (
						<>
							<button className="dish-add-button">+</button>
							<p className="dish-amount">0</p>
							<button className="dish-remove-button">-</button>
						</>
					)}
				</div>
			</div>
		</li>
	);
}
