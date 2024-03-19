import { Outlet } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header/Header';
import './scss/app.scss';

function App() {
	return (
		<>
			<div className='content'>
				<Header />
				<Outlet />
			</div>
			<Footer />
		</>
	);
}

export default App;
