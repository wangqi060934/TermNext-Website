'use client';

import Script from 'next/script';

export default function ThemeScript() {
  return (
    <Script id='theme-switcher' strategy='beforeInteractive'>
      {`
      (function() {
    // 从 localStorage 获取保存的主题
    const savedTheme = localStorage.getItem('theme');
    
    if (savedTheme) {
      document.documentElement.setAttribute('data-theme', savedTheme);
    } else {
      // 检测系统主题偏好
      // const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
      // const initialTheme = prefersDarkMode ? 'business' : 'corporate';
      
      // 默认使用深色主题 'business'
      const initialTheme = 'business';
      document.documentElement.setAttribute('data-theme', initialTheme);
      localStorage.setItem('theme', initialTheme);
    }
  })();
    `}
      </Script>
   );
}
