
'use client';

import { useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';

export default function useLanguageRedirect() {
    const router = useRouter();
    const pathname = usePathname();

    useEffect(() => {
        const manualLangSelection = localStorage.getItem('manual_lang_selection');
        const langRedirectChecked = sessionStorage.getItem('lang_redirect_checked');

        if (!manualLangSelection && !langRedirectChecked) {
            const browserLang = navigator.language || navigator.userLanguage;
            if (browserLang.toLowerCase().startsWith('zh')) {
                router.push('/zh' + pathname);
            }
            sessionStorage.setItem('lang_redirect_checked', 'true');
        }
    }, [pathname, router]);
}
