"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
const Navbar = ({ locale }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const t = useTranslations();
  const pathname = usePathname();
  const router = useRouter();

  const handleLanguageChange = (e) => {
    const newLocale = e.target.value;
    const path = pathname.split("/").slice(2).join("/");
    router.push(`/${newLocale}/${path}`);
  };


  const handleMenuOpen = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuOpen &&
        !event.target.closest(".faBarsIconClass") &&
        !event.target.closest(".navlink")
      ) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [menuOpen]);
  return (
    <div className="navbar">
      <div className="navbox">
        <RxHamburgerMenu className="faBarsIconClass" onClick={handleMenuOpen} />
        <div className={`navlink ${menuOpen ? "open" : ""}`}>
          <div>
            <Link className="homeLink" href={`/${locale}`}>
              {t("home")}
            </Link>
          </div>
          <div>
            <Link className="myProjectLink" href={`/${locale}/references`}>
              {t("myprojects")}
            </Link>
          </div>
          <div>
            <Link className="myProjectLink" href={`/${locale}/blog`}>
              {t("blog")}
            </Link>
          </div>
        </div>
      </div>
      <div className="navBarRightSide">
        <div>
          <a
            className="bannerCvBtn"
            href="/bugrahancobancv.pdf"
            download="BugrahanCobanCv"
          >
            {t("downloadmyfullresume")}
          </a>
        </div>
        <select className="languageSwitcher"
          value={locale}
          onChange={handleLanguageChange}
        >
          <option value="en">EN</option>
          <option value="tr">TR</option>
        </select>
      </div>
    </div>
  );
};

export default Navbar;
