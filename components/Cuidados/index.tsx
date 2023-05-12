import style from './style.module.css';
import bolso from '../../public/img/bolso.png';
import Image from 'next/image';
const Cuidados = () => {
	return (
		<div className={style.container}>
			<div className={style.content}>
				<div className={style.lateral}>
					<Image src={bolso} alt="bolso" />
				</div>
				<div className={style.contentSection}>
					<div className={style.divImages}>
						<Image src={bolso} alt="bolso" />
						<Image src={bolso} alt="bolso" />
						<Image src={bolso} alt="bolso" />
						<Image src={bolso} alt="bolso" />
					</div>
					<div className={style.divTexts}>
						<h5>Maestros Artesanos</h5>
						<p>
							Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam quibusdam quisquam
							obcaecati facere fugit ipsa optio. Lorem ipsum dolor sit, amet consectetur adipisicing
							elit. Eum deserunt dolores necessitatibus doloremque laudantium reprehenderit, optio
							corporis similique deleniti, neque dolore, quaerat saepe doloribus error! Voluptatibus
							ab nam eveniet praesentium?
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Cuidados;
