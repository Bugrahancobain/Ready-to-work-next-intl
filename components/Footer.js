"use client";
import React, { useTransition } from "react";
import { FaLinkedin, FaTwitterSquare, FaGithubSquare } from "react-icons/fa";
import { FaSquareInstagram, FaSquareWhatsapp } from "react-icons/fa6";
import { getMessages } from "next-intl/server";
import { useTranslations } from "next-intl";

function Footer({ params }) {

  // params.locale'i await ile çöz
  const locale = params?.locale || "en"; // Varsayılan dil atanır
  const t = useTranslations();
  const year = new Date().getFullYear();
  return (
    <div className="footer">
      <div className="cv">
        <a
          className="footerCvBtn"
          href="/bugrahancobancv.pdf"
          download="BugrahanCobanCv"
        >
          {t("downloadmyfullresume")}
        </a>
      </div>
      <div className="social">
        <div className="icons">
          <a
            target="_blank"
            href="https://www.linkedin.com/in/bu%C4%9Frahan-%C3%A7oban-37934724a/?originalSubdomain=tr"
          >
            <FaLinkedin className="iconClass" />
          </a>
          <a target="_blank" href="https://x.com/Muzisyen_Adam">
            <FaTwitterSquare className="iconClass" />
          </a>
          <a target="_blank" href="https://www.instagram.com/muzisyenadam/">
            <FaSquareInstagram className="iconClass" />
          </a>
          <a
            target="_blank"
            href="https://api.whatsapp.com/send/?phone=905061566364&text&type=phone_number&app_absent=0"
          >
            <FaSquareWhatsapp className="iconClass" />
          </a>
          <a target="_blank" href="https://github.com/Bugrahancobain">
            <FaGithubSquare className="iconClass" />
          </a>
        </div>
      </div>
      <div className="reserved">
        © Buğrahan Çoban {year}. ALL RIGHTS RESERVED.
      </div>
    </div>
  );
}

export default Footer;
