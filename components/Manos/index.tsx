import Image from 'next/image';
import women from '../../public/img/women.jpg';
import style from './style.module.css';

const Manos = () => {
	return (
		<div className={style.container}>
			<div className={style.content}>
				<Image src={women} alt="" />
				<Image src={women} alt="" />
				<Image src={women} alt="" />
				<Image src={women} alt="" />
				<Image src={women} alt="" />
				<Image src={women} alt="" />
				<Image src={women} alt="" />
				<Image src={women} alt="" />
				<Image src={women} alt="" />
			</div>
		</div>
	);
};

export default Manos;
