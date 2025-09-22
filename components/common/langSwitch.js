'use client';
import { useParams, useRouter, usePathname } from 'next/navigation';
import { defaultLocale, localeNames, locales } from '@/lib/i18n'; // 导入 locales

export default function LangSwitch() {
	const params = useParams();
	const lang = params.lang;
	const pathname = usePathname();
	const router = useRouter();

	let langName = lang && lang !== 'index' ? lang : defaultLocale;

	const handleSwitchLanguage = (value) => {
		return () => {
			localStorage.setItem('manual_lang_selection', value);
			let newPathname;
			const pathParts = pathname.split('/').filter(Boolean);

			// 统一处理，生成带尾部斜杠的路径，以匹配 trailingSlash: true 的设置
			if (pathParts.length === 0) {
				// 处理根路径 / 或 /index.html
				newPathname = `/${value}/`;
			} else if (pathParts[0] === lang) {
				// 当前路径已经包含语言代码 (例如 /en/some-page)
				// 将当前语言替换为新语言
				pathParts[0] = value;
				newPathname = '/' + pathParts.join('/') + '/';
			} else {
				// 当前路径不包含语言代码 (例如在 /about 页面)
				// 这种情况在静态导出中比较复杂，简单处理是跳转到新语言的根页面
				newPathname = `/${value}/`;
			}
			
			// 使用 router.replace 进行客户端导航
			// 在 trailingSlash: true 的情况下，这应该能正确工作
			router.replace(newPathname);
		};
	};

	return (
		<div className='dropdown dropdown-end dropdown-hover z-[100]'>
			<div
				tabIndex={0}
				role='button'
				className='flex items-center justify-center md:bg-base-100 md:rounded-full w-15 md:w-[100px] h-5 text-sm md:h-8 md:shadow-sm md:hover:shadow-md transition-all'
			>
				{localeNames[langName]}
			</div>
			<ul
				tabIndex={0}
				className='dropdown-content menu bg-base-100 rounded-box z-[1] w-40 p-2 shadow'
			>
				{Object.keys(localeNames).map((key) => {
					const name = localeNames[key];
					return (
						<li key={key}>
							<a
								href='#'
								title={`switch to ${name}`}
								className='cursor-pointer'
								onClick={handleSwitchLanguage(key)}
							>
								{name}
							</a>
						</li>
					);
				})}
			</ul>
		</div>
	);
}
