import { useDispatch } from 'react-redux';
import { removeFromCart } from '../redux/Slices/cartSlice';

export default function CartItem({ id, title, price, size, color, img }) {
	const dispatch = useDispatch();
	return (
		<div className='cart'>
			<div className='cart__img'>
				<img src={img} alt={title} />
			</div>
			<div className='cart__info'>
				<h3 className='cart__title'>{title}</h3>
				<div className='cart__properties'>
					<p className='cart__price'>
						Price: <span className='pink-colored'>$ {price}</span>
					</p>
					<p className='cart__color'>Color: {color}</p>
					<p className='cart_size'>Size: {size} </p>
					{/* <p className='cart__quantity'>Quantity: </p> */}
				</div>
			</div>
			<button
				onClick={() => dispatch(removeFromCart(id))}
				className='cart__close'
			>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					width='18'
					height='18'
					viewBox='0 0 18 18'
					fill='none'
				>
					<path
						d='M11.2453 9L17.5302 2.71516C17.8285 2.41741 17.9962 2.01336 17.9966 1.59191C17.997 1.17045 17.8299 0.76611 17.5322 0.467833C17.2344 0.169555 16.8304 0.00177586 16.4089 0.00140366C15.9875 0.00103146 15.5831 0.168097 15.2848 0.465848L9 6.75069L2.71516 0.465848C2.41688 0.167571 2.01233 0 1.5905 0C1.16868 0 0.764125 0.167571 0.465848 0.465848C0.167571 0.764125 0 1.16868 0 1.5905C0 2.01233 0.167571 2.41688 0.465848 2.71516L6.75069 9L0.465848 15.2848C0.167571 15.5831 0 15.9877 0 16.4095C0 16.8313 0.167571 17.2359 0.465848 17.5342C0.764125 17.8324 1.16868 18 1.5905 18C2.01233 18 2.41688 17.8324 2.71516 17.5342L9 11.2493L15.2848 17.5342C15.5831 17.8324 15.9877 18 16.4095 18C16.8313 18 17.2359 17.8324 17.5342 17.5342C17.8324 17.2359 18 16.8313 18 16.4095C18 15.9877 17.8324 15.5831 17.5342 15.2848L11.2453 9Z'
						fill='#575757'
					/>
				</svg>
			</button>
		</div>
	);
}
