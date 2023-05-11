import style from './style.module.css';
import artesano from '../../public/img/women.jpg';
import Image from 'next/image';
const Cuidados = () => {
	return (
		<div className={style.container}>
			<div>
				<Image src={artesano} alt="" />
			</div>
			<div>
				<div>
					<Image src={artesano} alt="" />
					<Image src={artesano} alt="" />
					<Image src={artesano} alt="" />
				</div>
				<div>
					<h4>Taller de personalización</h4>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Id hic vel labore ipsa nisi
						facilis, quia inventore aliquam nemo delectus possimus voluptatibus animi corrupti!
						Delectus recusandae laborum dolor dolore impedit!
					</p>
				</div>
			</div>
		</div>
	);
};

export default Cuidados;
