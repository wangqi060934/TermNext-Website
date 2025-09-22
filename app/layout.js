'use client';
import './globals.css';
import { Plus_Jakarta_Sans } from 'next/font/google';
import ThemeScript from '@/components/common/themeScript';

const jakarta = Plus_Jakarta_Sans({
	weight: ['500', '800'],
	subsets: ['latin'],
});

export default function RootLayout({ children }) {
	const fontClass = jakarta.className || ''
	
	return (
		<html lang="en" className={fontClass} suppressHydrationWarning={true}>
			<body>
				<ThemeScript />
				<div className='w-full min-h-svh text-base-content bg-base-100'>
					{children}
				</div>
			</body>
		</html>
	);
}
