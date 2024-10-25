import CartProductCard from '../components/CartProductCard'
import { Box } from '@radix-ui/themes'

const CartPage = ({ cartItems, onRemoveFromCart }) => {
	return (
		<Box style={{ textAlign: 'center', fontSize: '1.5rem' }}>
			<h2 style={{ color: 'white' }}>Your Cart</h2>
			{cartItems.length === 0 ? (
				<Box>
					<h3 style={{ color: 'white' }}>Your cart is empty.</h3>
					<span style={{ fontSize: '4rem', display: 'block' }}>&#128542;</span>
				</Box>
			) : (
				cartItems.map(item => (
					<CartProductCard
						key={item.id}
						product={item}
						onRemoveFromCart={onRemoveFromCart}
					/>
				))
			)}
		</Box>
	)
}

export default CartPage
