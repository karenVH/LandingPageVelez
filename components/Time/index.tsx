import { useState } from 'react';
import style from './style.module.css';
import fondo from '../../public/img/fondo.png';
import fondo2 from '../../public/img/fondo2.png';
import fondo3 from '../../public/img/background.jpg';
import Image from 'next/image';

const folder = '/img/';
const Time = () => {
	return (
		<div className={style.container}>
			<div className={style.content}>
				<div className={style.item1} />
				<div className={style.item2}>
					<div />
					<Image src={folder + 'artesano1.png'} alt="imagen" width={50} height={50} />
					<div />
				</div>
				<div className={style.item3}>
					<div className={style.row1} />
					<div className={style.row2}>
						<div>
							<pre>LA DEVOCION</pre>
							<p>DEL TIEMPO</p>
							<button>Ver nueva colección</button>
						</div>
						<hr />
					</div>
					<div className={style.row3}>
						<div>
							<Image src={folder + 'artesano12.png'} alt="" width={50} height={50} />
						</div>
						<div>
							<p>
								{' '}
								aperiam amet repellendus? Adipisci dolor odit, officia temporibus dolores quas
								itaque omnis quibusdam hic, maiores minima optio placeat?
							</p>
							<br />{' '}
							<p>
								{' '}
								dolorum praesentium et, nulla, reprehenderit voluptatem animi voluptatibus aliquam
								qui minus alias eos iusto odio. Quam, est.
							</p>
						</div>
					</div>
				</div>
				<div className={style.item4}>
					<div>
						<Image src={folder + 'artesano15.png'} alt="" width={100} height={100} />
					</div>
					<div />
				</div>
				<div />
			</div>
		</div>
	);
};

export default Time;
