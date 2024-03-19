import { Link } from 'react-router-dom';

export default function NotFound() {
	return (
		<div className='center not-found'>
			<h1 className='not-found-title'>Упс, кажется данной страницы не существует😕</h1>

			<Link to='/' className=' product-box__browse-btn'>
				<button className='button product-box__browse-link'>
					Вернуться на главную
				</button>
			</Link>
		</div>
	);
}
