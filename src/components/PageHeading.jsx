
export default function PageHeading({ children }) {
	return (
		<div className='page-heading center'>
			<h2 className='page-heading__title'>{children}</h2>
		</div>
	);
}
