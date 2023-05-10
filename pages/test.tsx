import ParallaxLayer from '@/components/ParallaxLayer';
import ParallaxSection from '@/components/ParallaxSection';
import { FC } from 'react';
import style from '../styles/Home.module.css';

const Test: FC = () => {
	return (
		<>
			<div className={style.App}>
				<p>arrox con leche</p>
				<ParallaxSection>
					<ParallaxLayer speed={0.2}>
						<h2>Section 1</h2>
						<div>arrox</div>
					</ParallaxLayer>
				</ParallaxSection>

				<ParallaxSection>
					<ParallaxLayer speed={0.4}>
						<h2>Section 2</h2>
					</ParallaxLayer>
				</ParallaxSection>

				<ParallaxSection>
					<ParallaxLayer speed={0.6}>
						<h2>Section 3</h2>
					</ParallaxLayer>
				</ParallaxSection>
			</div>
		</>
	);
};

export default Test;
