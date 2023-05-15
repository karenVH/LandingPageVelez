import Image from 'next/image';
import bolso from '../../public/img/bolso.png';
import artesano9 from '../../public/img/artesano9.png'
import artesano15 from '../../public/img/artesano15.png'
import enmascarar from '../../public/img/Enmascarar grupo 18.png'
import enmascarar1 from '../../public/img/Enmascarar grupo 19.png'

import style from './style.module.css';
const Maestro = () => {
	return (
		<div className={style.container}>
			<div className={style.content}>
				<div className={style.lateral}>
					<Image src={bolso} alt="bolso" />
				</div>
				<div className={style.contentSection}>
					<div className={style.divImages}>
						<Image src={enmascarar1} alt="bolso" />
						<Image src={enmascarar} alt="bolso" />
						<Image src={artesano9} alt="bolso" />
						<Image src={artesano15} alt="bolso" />
					</div>
					<div className={style.divTexts}>
						<h5>Maestros Artesanos</h5>
						<p>
							Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam quibusdam quisquam
							obcaecati facere fugit ipsa optio. Lorem ipsum dolor sit, amet consectetur adipisicing
							elit. Eum deserunt dolores necessitatibus doloremque laudantium reprehenderit, optio
							
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};
export default Maestro;
