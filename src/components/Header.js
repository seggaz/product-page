import { Link } from 'react-router-dom'
import { Box, Button, Text } from '@radix-ui/themes'
import { FaHome, FaShoppingCart } from 'react-icons/fa'

const Header = ({ cartCount }) => {
	return (
		<Box className='header-container'>
			<Link to='/'>
				<Button variant='soft' className='header-button'>
					<FaHome />
				</Button>
			</Link>
			<Text size='6'>Stylish Seating &#169;</Text>
			<Link to='/cart' style={{ position: 'relative' }}>
				<Button variant='soft' className='header-button'>
					<FaShoppingCart />
					{cartCount > 0 && <Box className='cart-count'>{cartCount}</Box>}
				</Button>
			</Link>
		</Box>
	)
}

export default Header
