'use client';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { defaultLocale, getDictionary } from '@/lib/i18n';
import { useEffect, useState } from 'react';

export default function Footer() {
	const pathname = usePathname();
	const [langName, setLangName] = useState(defaultLocale);

	const [dict, setDict] = useState({});

	useEffect(() => {
		const fetchDict = async () => {
			let currentLangName = defaultLocale;
			if (pathname !== '/') {
				// 处理 /en.html 或 /zh.html 的情况
				const pathParts = pathname.split('/');
				const potentialLang = pathParts[1]; // 可能是 'en.html' 或 'zh'
				// 移除 .html 后缀如果存在
				currentLangName = potentialLang.replace('.html', '');
			}
			setLangName(currentLangName);
			const dict = await getDictionary(currentLangName); // 获取内容
			setDict(dict);
		};
		fetchDict();
	}, [pathname]); // langName 不应该作为依赖，因为它在 effect 内部设置

	return (
		<footer className='w-full px-5 py-10 bg-[#202020] text-[#f7f7f7] '>
			<div className='container mx-auto flex flex-col md:flex-row justify-between items-center md:items-end gap-2 text-sm'>
				<div className='flex flex-col items-center md:items-start'>
					<a
						aria-label='landing page template'
						className='flex items-center mb-3'
						title='landing page template'
						// href={`/${langName}`}
					>
						<Image
							width={200}
							height={200}
							src={'/logo_trans.png'}
							className='transition-all hover:scale-110 w-6 md:w-10 h-6 md:h-10'
							alt='logo'
						></Image>
						<h2 className='ml-3 font-bold leading-5'>TermNext</h2>
					</a>
					{/* <div className='flex flex-wrap justify-center gap-x-2 md:gap-x-5 gap-y-1'>
						{linkList.map((link, index) => {
							return (
								<a
									key={index}
									title={link.name}
									href={`/${langName}${link.url}`}
								>
									{link.name}
								</a>
							);
						})}
					</div> */}
					<p>
						{dict && dict.CTAButton && dict.CTAButton.contact}
					</p>
				</div>

				<p
					onClick={() => window.open('https://beian.miit.gov.cn/', '_blank')}
					role="button"
					tabIndex={0}
					onKeyDown={(e) => {
						if (e.key === 'Enter') {
							window.open('https://beian.miit.gov.cn/', '_blank');
						}
					}}
					className="cursor-pointer"
				>
					{dict && dict.CTAButton && dict.CTAButton.icp}
				</p>
			</div>
		</footer>
	);
}
