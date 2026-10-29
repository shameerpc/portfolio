import { useState, useEffect, useMemo, useCallback } from 'react';
import { LanguageContext } from './context';
import en from './en';
import ar from './ar';

const dictionaries = { en, ar };

export function LanguageProvider({ children }) {
  const [lang, setLangState] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('spc_lang') || 'en';
    }
    return 'en';
  });

  const dir = lang === 'ar' ? 'rtl' : 'ltr';

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('spc_lang', lang);
      document.documentElement.lang = lang;
      document.documentElement.dir = dir;
    }
  }, [lang, dir]);

  const toggleLang = useCallback(() => {
    setLangState((prev) => (prev === 'en' ? 'ar' : 'en'));
  }, []);

  const setLang = useCallback((nextLang) => {
    if (nextLang === 'en' || nextLang === 'ar') {
      setLangState(nextLang);
    }
  }, []);

  // Nested key resolver, e.g. t('nav.identity')
  const t = useCallback((path, fallback) => {
    const dict = dictionaries[lang] || dictionaries.en;
    const parts = path.split('.');
    let cur = dict;
    for (const p of parts) {
      if (cur && typeof cur === 'object' && p in cur) {
        cur = cur[p];
      } else {
        return fallback || path;
      }
    }
    return typeof cur === 'string' ? cur : (fallback || path);
  }, [lang]);

  const value = useMemo(
    () => ({ lang, dir, setLang, toggleLang, t }),
    [lang, dir, setLang, toggleLang, t]
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export default LanguageProvider;
