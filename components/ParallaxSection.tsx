import React from 'react';
import style from '../styles/Home.module.css';

interface ParallaxSectionProps {
	children: React.ReactNode;
}

const ParallaxSection: React.FC<ParallaxSectionProps> = ({ children }) => {
	return <section className={style.parallaxsection}>{children}</section>;
};

export default ParallaxSection;
