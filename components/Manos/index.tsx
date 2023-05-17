import Image from 'next/image';
import women from '../../public/img/women.jpg';
import artesano from '../../public/img/artesano3.png';
import otro from '../../public/img/Enmascarar grupo 10.png';
import style from './style.module.css';

const Manos = () => {
	return (
		<div className={style.container}>
			<div className={style.content}>
				<div className={style.itema}>
					<Image src={otro} alt="" />
				</div>
				<div className={style.itemb}>
					<Image src={otro} alt="" />
				</div>
				<div className={style.itemc}>
					<Image src={otro} alt="" />
				</div>
				<div className={style.itemd}>
					<Image src={artesano} alt="" />
				</div>
				<div className={style.iteme}>
					<Image src={artesano} alt="" />
				</div>
				<div className={style.itemf}>
					<Image src={artesano} alt="" />
				</div>
				<div className={style.itemg}>
					<Image src={women} alt="" />
				</div>
				<div className={style.itemh}>
					<Image src={women} alt="" />
				</div>
				<div className={style.itemi}>
					<Image src={women} alt="" />
				</div>
			</div>
		</div>
	);
};

export default Manos;
