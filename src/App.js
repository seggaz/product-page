import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import HomePage from './pages/HomePage'
import CartPage from './pages/CartPage'
import ProductPage from './pages/ProductPage'
import { Theme } from '@radix-ui/themes'
import './index.css'
import useCart from './hooks/useCart'

const App = () => {
	const { cartItems, handleAddToCart, handleRemoveFromCart } = useCart()

	return (
		<Theme appearance='dark' className='app'>
			<Router>
				<Header cartCount={cartItems.length} />
				<main className='main-container'>
					<Routes>
						<Route
							path='/'
							element={<HomePage onAddToCart={handleAddToCart} />}
						/>
						<Route
							path='/product/:id'
							element={<ProductPage onAddToCart={handleAddToCart} />}
						/>
						<Route
							path='/cart'
							element={
								<CartPage
									cartItems={cartItems}
									onRemoveFromCart={handleRemoveFromCart}
								/>
							}
						/>
					</Routes>
				</main>
			</Router>
		</Theme>
	)
}

export default App
