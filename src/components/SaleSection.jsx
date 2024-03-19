export default function SaleSection() {
	return (
		<section className='sale center'>
			<a href='#' className='sale__item'>
				<img src='img/index/sale/sale1.jpg' alt='sale image' />
				<div className='sale__content'>
					<h4 className='sale__subtitle '>30% OFF</h4>
					<h3 className='sale__title'>FOR WOMEN</h3>
				</div>
			</a>
			<a href='#' className='sale__item'>
				<img src='img/index/sale/sale2.jpg' alt='sale image' />
				<div className='sale__content'>
					<h4 className='sale__subtitle'>HOT DEAL</h4>
					<h3 className='sale__title'>FOR MEN</h3>
				</div>
			</a>
			<a href='#' className='sale__item'>
				<img src='img/index/sale/sale3.jpg' alt='sale image' />
				<div className='sale__content'>
					<h4 className='sale__subtitle'>NEW ARRIVALS</h4>
					<h3 className='sale__title'>FOR KIDS</h3>
				</div>
			</a>
			<a href='#' className='sale__item sale__item-big'>
				<img src='img/index/sale/sale4.jpg' alt='sale image' />
				<div className='sale__content'>
					<h4 className='sale__subtitle'>LUXIROUS &amp;&nbsp;TRENDY</h4>
					<h3 className='sale__title'>ACCESORIES</h3>
				</div>
			</a>
		</section>
	);
}
