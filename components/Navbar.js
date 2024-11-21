"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { ChangeEvent } from "react";

const Navbar = ({ locale }) => {
  const t = useTranslations("NavbarLinks");
  const pathname = usePathname();
  const router = useRouter();

  const handleLanguageChange = (e) => {
    const newLocale = e.target.value;
    const path = pathname.split("/").slice(2).join("/");
    router.push(`/${newLocale}/${path}`);
  };
  return (
    <div>
      <div>
        <Link href={`/${locale}/`}>{t("home")}</Link>
        <Link href={`/${locale}/about`}>{t("about")}</Link>
        <Link href={`/${locale}/about/profile`}>{t("profile")}</Link>
      </div>
      <select
        value={locale}
        onChange={handleLanguageChange}
      >
        <option value="en">EN</option>
        <option value="tr">TR</option>
      </select>
    </div>
  );
};

export default Navbar;
