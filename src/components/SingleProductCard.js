import ImageSlider from './ImageSlider'
import { Box, Button, Text } from '@radix-ui/themes'
import '../index.css'

const SingleProductCard = ({ product, onAddToCart }) => {
	const handleAddToCart = () => {
		onAddToCart(product.id)
	}

	return (
		<Box as='article' className='single-product-card gradient-background'>
			<ImageSlider images={product.images} />
			<Text size='7' className='product-name'>
				{product.name}
			</Text>
			<Text className='text-with-border'>{product.description}</Text>
			<Text className='product-price'>{product.price}</Text>
			<Button variant='classic' onClick={handleAddToCart}>
				Add to Cart
			</Button>
		</Box>
	)
}

export default SingleProductCard
