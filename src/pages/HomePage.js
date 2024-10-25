import products from '../data/products'
import ProductCard from '../components/ProductCard'
import { Grid } from '@radix-ui/themes'

const HomePage = ({ onAddToCart }) => {
	return (
		<Grid
			style={{
				display: 'grid',
				gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
				gap: '20px',
				padding: '20px',
			}}
		>
			{products.map(product => (
				<ProductCard
					key={product.id}
					product={product}
					onAddToCart={onAddToCart}
				/>
			))}
		</Grid>
	)
}

export default HomePage
