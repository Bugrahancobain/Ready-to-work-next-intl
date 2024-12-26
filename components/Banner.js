import React from "react";
import { useTranslations } from "next-intl";

export function Banner({ params }) {

  // params.locale'i await ile çöz
  const locale = params?.locale || "en"; // Varsayılan dil atanır
  const t = useTranslations();

  return (
    <div>
      <img
        loading="lazy"
        src="/BannerImg.webp"
        alt="BannerImage"
        className="bannerImg"
      />

      <div className="bannerMain">
        <h1 className="bannerTitle">Buğrahan Çoban</h1>
        <p className="bannerContext">{t("bannerContext")}</p>
      </div>
    </div>
  );
};

export default Banner;
