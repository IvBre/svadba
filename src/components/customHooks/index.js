import { useContext } from 'preact/hooks';
import React, { useState, useEffect } from 'react';

/* Toggling the navigations class & visibility when a certain screen widht is reached */
function getWindowDimensions() {
	const { innerWidth: width, innerHeight: height } = window;
	return {
		width,
		height,
	};
}

export default function useWindowDimensions() {
	const [windowsDimensions, setWindowDimensions] = useState(getWindowDimensions());

	useEffect(() => {
		function handleResize() {
			setWindowDimensions(getWindowDimensions());
		}

		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	});

	return windowsDimensions;
}