import { useParams } from 'react-router-dom'
import products from '../data/products'
import SingleProductCard from '../components/SingleProductCard'

const ProductPage = ({ onAddToCart }) => {
	const { id } = useParams()
	const product = products.find(p => p.id === parseInt(id))

	if (!product) {
		return <div>Product not found</div>
	}

	return (
		<>
			<SingleProductCard product={product} onAddToCart={onAddToCart} />
		</>
	)
}

export default ProductPage
