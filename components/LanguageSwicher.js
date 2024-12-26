import React from "react";
import { useRouter } from "next/router";

function LanguageSwitcher({ locale, t }) {
  const router = useRouter();

  const handleLanguageChange = (lng) => {
    const currentPath = router.pathname;
    const asPath = router.asPath;
    router.push(currentPath, asPath.replace(`/${locale}`, `/${lng}`), {
      locale: lng,
    });
  };
  return (
    <div>
      <select
        aria-label="Dil Seçin"
        id="language"
        name="language"
        className="languageSwitcher"
        value={locale}
        onChange={(e) => handleLanguageChange(e.target.value)}
      >
        <option value="en">English</option>
        <option value="tr">Türkçe</option>
        <option value="de">Deutsch</option>
        <option value="es">Español</option>
        <option value="it">Italiano</option>
        <option value="nl">Nederlands</option>
        <option value="pl">Polski</option>
      </select>
    </div>
  );
}

export default LanguageSwitcher;
