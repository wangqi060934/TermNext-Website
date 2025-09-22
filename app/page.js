'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Page() {
	const router = useRouter();

	useEffect(() => {
		const manualLangSelection = localStorage.getItem('manual_lang_selection');

		// 如果用户没有手动选择过语言，则根据浏览器语言进行重定向
		if (!manualLangSelection) {
			const browserLang = navigator.language || navigator.userLanguage;
			if (browserLang.toLowerCase().startsWith('zh')) {
				router.replace('/zh/');
			} else {
				router.replace('/en/');
			}
		} else {
			// 如果用户手动选择过语言，则重定向到用户选择的语言
			router.replace(`/${manualLangSelection}/`);
		}
	}, [router]);

	return null;
}
