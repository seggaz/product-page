import { useState, useCallback } from 'react'
import products from '../data/products'

const useCart = () => {
	const [cartItems, setCartItems] = useState([])

	const handleAddToCart = useCallback(id => {
		setCartItems(prevItems => {
			const product = products.find(p => p.id === id)

			if (!product) {
				console.error(`Product with ID ${id} not found.`)
				return prevItems
			}

			return [
				...prevItems,
				{
					id: `${product.id}-${
						prevItems.filter(item => item.id === product.id).length + 1
					}`,
					name: product.name,
					price: product.price,
					images: product.images,
					quantity: 1,
				},
			]
		})
	}, [])

	const handleRemoveFromCart = useCallback(id => {
		setCartItems(prevItems => {
			if (!Array.isArray(prevItems)) {
				console.error('prevItems is not an array')
				return []
			}

			return prevItems.filter(item => item.id !== id)
		})
	}, [])

	return {
		cartItems,
		handleAddToCart,
		handleRemoveFromCart,
	}
}

export default useCart
