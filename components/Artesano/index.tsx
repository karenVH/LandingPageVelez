import Image from 'next/image';
import img1 from '../../public/img/img1.png';
import title2 from '../../public/img/title2.png';
import title3 from '../../public/img/title3.png';
import title4 from '../../public/img/title4.png';
import hilos from '../../public/img/hilos.jpg';
import style from './style.module.css';

const Artesano = () => {
	return (
		<div className={style.container}>
			<div className={style.content}>
				<div className={style.item1}>
					<Image src={img1} alt="" />
				</div>
				<div className={style.item2}>
					<Image src={title2} alt="" />
				</div>
				<div className={style.item3}>
					<Image src={title3} alt="" />
				</div>
				<div className={style.item4}>
					<Image src={title4} alt="" />
				</div>
			</div>
		</div>
	);
};

export default Artesano;
