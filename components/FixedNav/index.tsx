import React, { useEffect, useState } from 'react';
import style from './style.module.css';
const FixedNav: React.FC = () => {
	const [activeLink, setActiveLink] = useState('');

	useEffect(() => {
		const handleScroll = () => {
			const sections = document.querySelectorAll('section');
			const currentSection = Array.from(sections).find(
				(section) =>
					section.getBoundingClientRect().top <= window.innerHeight / 2 &&
					section.getBoundingClientRect().bottom > window.innerHeight / 2
			);

			if (currentSection) {
				setActiveLink(currentSection.id);
			}
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);
	return (
		<nav>
			<ul className={style.menu}>
				<li>
					<a
						href="#seccion1"
						className={`${style['menu-item']} ${activeLink === 'seccion1' ? style.active : ''}`}
					>
						Sección 1
					</a>
				</li>
				<li>
					<a
						href="#seccion2"
						className={`${style['menu-item']} ${activeLink === 'seccion2' ? style.active : ''}`}
					>
						Sección 2
					</a>
				</li>
				<li>
					<a
						href="#seccion3"
						className={`${style['menu-item']} ${activeLink === 'seccion3' ? style.active : ''}`}
					>
						Sección 3
					</a>
				</li>
				<li>
					<a
						href="#seccion4"
						className={`${style['menu-item']} ${activeLink === 'seccion4' ? style.active : ''}`}
					>
						Sección 4
					</a>
				</li>
			</ul>
		</nav>
	);
};

export default FixedNav;
