import { FC } from 'react';
import style from '../styles/Home.module.css';
import Manos from '@/components/Manos';
import Time from '@/components/Time';
import Artesano from '@/components/Artesano';
import Navbar from '@/components/Navbar';
import Personalizacion from '@/components/Persona';
import Cuidados from '@/components/Cuidados';

const Test: FC = () => {
	return (
		<>
			<div className={style.snapcontainer}>
				<Navbar />
				<div className={style.sticky}>
					<Artesano />
				</div>

				<div className={style.sticky2}>
					<Manos />
				</div>

				<div className={style.sticky3}>
					<Time />
				</div>
				<div className={style.sticky4}>
					<Personalizacion />
				</div>
				<div className={style.sticky5}>
					<Cuidados />
				</div>
			</div>
		</>
	);
};

export default Test;
