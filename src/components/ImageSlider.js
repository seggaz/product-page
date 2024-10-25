import React, { useState } from 'react'
import { Box, Button } from '@radix-ui/themes'
import '../index.css'

const ImageSlider = ({ images }) => {
	const [currentIndex, setCurrentIndex] = useState(0)

	if (!images || images.length === 0) {
		return <p>No images available</p>
	}

	const nextSlide = event => {
		event.preventDefault()
		setCurrentIndex(prev => (prev + 1) % images.length)
	}

	const prevSlide = event => {
		event.preventDefault()
		setCurrentIndex(prev => (prev - 1 + images.length) % images.length)
	}

	return (
		<Box className='slider-container'>
			<Button
				onClick={prevSlide}
				className='slider-button left'
				aria-label='Previous Slide'
			>
				&#9668;
			</Button>
			<img
				src={`${process.env.PUBLIC_URL}/${images[currentIndex]}`}
				alt={`Product Image ${currentIndex + 1}`}
				className='slider-image'
			/>
			<Button
				onClick={nextSlide}
				className='slider-button right'
				aria-label='Next Slide'
			>
				&#9658;
			</Button>
		</Box>
	)
}

export default ImageSlider
