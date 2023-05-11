import Image from 'next/image';
import img from '../../public/img/img.png';
import women from '../../public/img/women.jpg';
import arreglo from '../../public/img/arreglo.jpg';
import hilos from '../../public/img/hilos.jpg';
import style from './style.module.css';

const Artesano = () => {
	return (
		<div className={style.container}>
			<div className={style.content}>
				<div className={style.item1}>
					<Image src={arreglo} alt="" />
				</div>
				<div className={style.item2}>
					<Image src={women} alt="" />
				</div>
				<div className={style.item3}>
					<Image src={hilos} alt="" />
				</div>
				<div className={style.item4}>
					<Image src={arreglo} alt="" />
				</div>
			</div>
		</div>
	);
};

export default Artesano;
