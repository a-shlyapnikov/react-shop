import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import CartBox from '../components/CartBox';
import PageHeading from '../components/PageHeading';
import { clearCart } from '../redux/Slices/cartSlice';
export default function Cart() {
	const dispatch = useDispatch();
	const { totalPrice } = useSelector((state) => state.cart);

	return (
		<>
			<PageHeading>SHOPPING CART</PageHeading>
			{totalPrice === 0 ? (
				<div className='shopping-cart-empty center'>
					<h2>Your cart is empty</h2>
					<Link
						to='/catalog'
						className='shopping-cart_btn shopping-cart__button'
					>
						CONTINUE SHOPPING
					</Link>
				</div>
			) : (
				<div className='shopping-cart center'>
					<div className='shopping-cart__content'>
						<CartBox />
						<div className='shopping-cart__buttons'>
							<button
								onClick={() => dispatch(clearCart())}
								className='shopping-cart_btn shopping-cart__button'
							>
								CLEAR SHOPPING CART
							</button>
							<Link
								to='/catalog'
								className='shopping-cart_btn shopping-cart__button'
							>
								CONTINUE SHOPPING
							</Link>
						</div>
					</div>
					<div className='shopping-cart__info'>
						<div className='shipping'>
							<h3 className='shipping__title'>SHIPPING ADRESS</h3>
							<form className='shipping__form' action='#'>
								<input
									className='shipping__input'
									type='text'
									placeholder='Country'
								/>
								<input
									className='shipping__input'
									type='text'
									placeholder='State'
								/>
								<input
									className='shipping__input'
									type='text'
									placeholder='Postcode / Zip'
								/>
							</form>
							<a href='#' className='shopping-cart_btn shipping__button'>
								GET A QUOTE
							</a>
						</div>
						<div className='checkout'>
							<div className='checkout__sub'>
								<h4 className='checkout__subtitle'>SUB TOTAL</h4>
								<p className='checkout__sub-price'>${totalPrice}</p>
							</div>
							<div className='checkout__grand'>
								<h4 className='checkout__title'>GRAND TOTAL</h4>
								<p className='checkout__total-price pink-colored'>
									${totalPrice}
								</p>
							</div>
							<hr className='checkout__hr' />
							<a href='#' className='checkout__btn'>
								PROCEED TO CHECKOUT
							</a>
						</div>
					</div>
				</div>
			)}
		</>
	);
}
