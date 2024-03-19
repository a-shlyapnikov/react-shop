import FeatureSection from '../components/FeatureSection';
import ProductBox from '../components/ProductBox';
import PromoSection from '../components/PromoSection';
import SaleSection from '../components/SaleSection';

export default function Home() {
	return (
		<>
			<PromoSection />
			<SaleSection />
			<ProductBox />
			<FeatureSection />
		</>
	);
}
