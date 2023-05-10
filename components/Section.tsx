import React from 'react';
import styles from './section.module.css';

interface SectionProps {
	title: string;
	backgroundImage: string;
}

const Section: React.FC<SectionProps> = ({ title, backgroundImage }) => {
	return (
		<div className={styles.section} style={{ backgroundImage: `url(${backgroundImage})` }}>
			<h2>{title}</h2>
		</div>
	);
};

export default Section;
