'use client';
import { motion } from 'framer-motion';
import { SiAppgallery } from "react-icons/si";
import { useEffect, useState } from 'react';

export default function Cta({ locale, CTALocale }) {
	const [isHarmony, setIsHarmony] = useState(false);

	useEffect(() => {
		setIsHarmony(/OpenHarmony/.test(navigator.userAgent) && !window.MSStream);
	}, []);
	return (
		<section
			id='feature'
			className='relative py-10 md:py-20'
		>
			<motion.div
				initial={{ opacity: 0, y: 50 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{
					duration: 0.5,
				}}
			>
				<div className='relative z-10 flex flex-col gap-5 items-start md:items-center mb-10 mx-auto'>
					<h2
						className={`font-bold  text-5xl md:text-7xl md:text-center !leading-[1.25em] ${
							!isHarmony &&
							'bg-gradient-to-r from-base-content from-50% to-[#9c9c9c] bg-clip-text text-transparent'
						}`}
					>
						{locale.h2}
					</h2>

					<h3 className='w-full md:w-10/12 mx-auto text-xl md:text-2xl text-base-content/80 md:text-center'>{locale.h3}</h3>

					<a
						title='download'
						className='mt-10 btn btn-md btn-base border-none hover:ring-1 ring-base-content text-base-100 hover:text-base-content bg-base-content hover:bg-base-100 rounded-full gap-2'
						href='https://appgallery.huawei.com/app/detail?id=com.termnext.hos'
						target="_blank"
						rel="noopener noreferrer"
					>
						<SiAppgallery className='w-8 h-8' /> {CTALocale.btn1}
					</a>
				</div>
			</motion.div>

			<div className='hidden md:block absolute left-[30%] top-0 z-0'>
				<div className='absolute bottom-0 left-[-20%] right-0 top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]'></div>
			</div>
		</section>
	);
}
