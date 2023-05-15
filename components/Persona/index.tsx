import Image from 'next/image';
import bolso from '../../public/img/Componente 14 – 15@2x.png';
import artesano9 from '../../public/img/artesano1.png';
import artesano15 from '../../public/img/artesano15.png';
import enmascarar from '../../public/img/Enmascarar grupo 18.png';
import enmascarar1 from '../../public/img/Enmascarar grupo 19.png';

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
						<div className={style.img1}>
							<Image src={enmascarar1} alt="bolso" />
						</div>
						<div className={style.img2}>
							<Image src={enmascarar} alt="bolso" />
						</div>
						<div className={style.img3}>
							<Image src={bolso} alt="bolso" />
						</div>
						<div className={style.img4}>
							<Image src={artesano9} alt="bolso" />
						</div>
						<div className={style.img5}>
							<Image src={artesano15} alt="bolso" />
						</div>
					</div>
					<div className={style.divTexts}>
						<h5>Taller de personalización</h5>
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
