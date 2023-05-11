import style from './style.module.css';
import artesano from '../../public/img/women.jpg';
import Image from 'next/image';
const Personalizacion = () => {
	return (
		<div className={style.container}>
			<div className={style.content}>
				<div className={style.imageLateral}>
					<Image src={artesano} alt="" />
				</div>
				<div className={style.contentText}>
					<div className={style.imagesTop}>
						<Image src={artesano} alt="" />
						<Image src={artesano} alt="" />
						<Image src={artesano} alt="" />
					</div>
					<div className={style.conText}>
						<h4>Taller de personalización</h4>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Id hic vel labore ipsa nisi
							facilis, quia inventore aliquam nemo delectus possimus voluptatibus animi corrupti!
							Delectus recusandae laborum dolor dolore impedit!
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Personalizacion;
