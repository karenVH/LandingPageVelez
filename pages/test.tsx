import { FC } from 'react';
import style from '../styles/Home.module.css';
import Manos from '@/components/Manos';
import Time from '@/components/Time';
import Artesano from '@/components/Artesano';
import Navbar from '@/components/Navbar';
import Personalizacion from '@/components/Persona';
import Cuidados from '@/components/Cuidados';
import Maestro from '@/components/Maestros';
import Link from 'next/link';
import Menu from '@/components/FixedNav';

const Test: FC = () => {
	return (
		<>
			<div className={style.snapcontainer}>
				<Navbar />
				<div className={style.sticky} id="seccion1">
					<Artesano />
					<Menu />
				</div>
				<div className={style.sticky2} id="seccion2">
					<Maestro />
				</div>
				<div className={style.sticky3} id="seccion3">
					<Manos />
				</div>

				<div className={style.sticky4} id="seccion4">
					<Time />
				</div>
				{/* <div className={style.sticky5} id="inicio">
					<Personalizacion />
				</div>
				<div className={style.sticky6} id="inicio">
					<Cuidados />
				</div> */}
				{/* <div className={style.menufijo}> */}
				{/* <li>Artesanos</li>
					<li>Maestros</li>
					<li>Mano</li>
					<li>La devovión del tiempo</li>
					<li>Personalizacion</li>
					<li>Cuidados del cuero</li> */}
				{/* </div> */}
			</div>
		</>
	);
};

export default Test;
