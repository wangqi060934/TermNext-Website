import { defaultLocale, getDictionary } from '@/lib/i18n';

import Hero from '@/components/home/hero';
import Feature from '@/components/home/feature';
import Cta from '@/components/home/cta';
export default async function Home({ params }) {
	const langName = params.lang || defaultLocale;
	const dict = await getDictionary(langName); // 获取内容

	return (
		<div className='container mx-auto md:px-5'>
			<Hero
				locale={dict.Hero}
				CTALocale={dict.CTAButton}
			/>
			<Feature
				locale={dict.Feature}
				langName={langName}
			/>
			<Cta
				locale={dict.CTA}
				CTALocale={dict.CTAButton}
			/>
		</div>
	);
}

export async function generateStaticParams() {
	return [{ lang: 'en' }, { lang: 'zh' }];
}
