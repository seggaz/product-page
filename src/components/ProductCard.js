import { Link } from 'react-router-dom'
import ImageSlider from './ImageSlider'
import { Box, Button, Text } from '@radix-ui/themes'

const ProductCard = ({ product, onAddToCart }) => {
	const handleAddToCart = event => {
		event.preventDefault()
		onAddToCart(product.id)
	}

	return (
		<Link to={`/product/${product.id}`} className='product-card-link'>
			<Box
				className='product-card'
				onMouseEnter={e => {
					e.currentTarget.classList.add('hover')
				}}
				onMouseLeave={e => {
					e.currentTarget.classList.remove('hover')
				}}
			>
				<ImageSlider images={product.images} />
				<Text size='7' className='product-name'>
					{product.name}
				</Text>
				<Text className='product-description'>{product.description}</Text>
				<Text className='product-price'>{product.price}</Text>
				<Button variant='classic' onClick={handleAddToCart}>
					Add to Cart
				</Button>
			</Box>
		</Link>
	)
}

export default ProductCard
