import { Box, Button, Text } from '@radix-ui/themes'
import ImageSlider from './ImageSlider'

const CartProductCard = ({ product, onRemoveFromCart }) => {
	return (
		<Box as='article' className='cart-product-card'>
			<ImageSlider images={product.images} />
			<Text size='4'>{product.name}</Text>
			<Text className='price'>{product.price}</Text>
			<Button onClick={() => onRemoveFromCart(product.id)} variant='classic'>
				Remove from Cart
			</Button>
		</Box>
	)
}

export default CartProductCard
