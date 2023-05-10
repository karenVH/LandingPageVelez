import React, { useEffect } from 'react';
import style from '../styles/Home.module.css';

interface ParallaxLayerProps {
	speed: number;
	children: React.ReactNode;
}

const ParallaxLayer: React.FC<ParallaxLayerProps> = ({ speed, children }) => {
	useEffect(() => {
		const handleScroll = () => {
			const scrollTop = window.pageYOffset;
			const target = document.getElementById('parallax-layer');

			if (target) {
				target.style.transform = `translateY(${scrollTop * speed}px)`;
			}
		};

		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, [speed]);

	return (
		<div className={style.parallaxlayer} id="parallax-layer">
			{children}
		</div>
	);
};

export default ParallaxLayer;
