import { useSelector } from 'react-redux';
import CartItem from './CartItem';

export default function CartBox() {
	const items = useSelector((state) => state.cart.items);
	return (
		<div className='shopping-cart__box'>
			{items.map((item) => (
				<CartItem key={item.id} {...item} />
			))}
		</div>
	);
}
