import Image from 'next/image';
import style from './style.module.css';

const folder = '/img/';
const Navbar = () => {
	return (
		<div className={style.container}>
			<nav className={style.contentItems}>
				<div className={style.menu}>
					<li>MUJER</li>
					<li>HOMBRE</li>
					<li>OUTLET</li>
					<li>CRÉDITOS</li>
					<li>FLY UP</li>
				</div>
					<div className={style.menuMovil}>
						-
					</div>
				<div className={style.titlelogo}>
					<h3>VÉLEZ</h3>
				</div>
				<div className={style.contentInt}>
					<input type="search" placeholder="¿QUÉ BUSCAS?" className={style.input} />
					<Image src={folder + 'lupa.svg'} alt="lupa" width={30} height={30} />
					<Image src={folder + 'user.svg'} alt="user" width={25} height={25} />
					<Image src={folder + 'bolsa.svg'} alt="bolsa" width={25} height={25} />
				</div>
			</nav>
		</div>
	);
};

export default Navbar;
