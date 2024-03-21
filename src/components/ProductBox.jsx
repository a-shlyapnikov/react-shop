import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchProducts } from '../redux/Slices/productSlice';
import Product from './Product';

export default function ProductBox() {
	const products = useSelector((state) => state.products.items);
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(fetchProducts());
	}, []);

	return (
		<section className='product-box center'>
			<h2 className='product-box__heading'>Fetured Items</h2>
			<p className='product-box__text'>
				Shop for items based on&nbsp;what we&nbsp;featured in&nbsp;this week
			</p>
			<div className='product-box__content'>
				{products.map((product) => (
					<Product key={product.id} {...product} />
				))}
			</div>
			<div className='product-box__browse-btn'>
				<Link to='/catalog' className='button product-box__browse-link'>
					Browse All Product
				</Link>
			</div>
		</section>
	);
}
