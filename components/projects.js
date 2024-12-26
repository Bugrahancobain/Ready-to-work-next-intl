import React from "react";
import { useTranslations } from "next-intl";

function Projects({ params }) {
  const t = useTranslations();

  return (
    <div className="projects">
      <div className="projectCards">
        <div className="card">
          <a
            style={{ textDecoration: "none" }}
            className="projectlink"
            target="_blank"
            href="https://www.karamans.com/"
          >
            <img
              loading="lazy"
              className="cardImg"
              src="/karamans-logo.webp"
              alt="Karamans"
              style={{ width: "100%" }}
            />

            <div className="cardContainer">
              <h4>
                <b>Karamans Tekstil</b>
              </h4>
              <p>
                <b>{t("status")}:</b> {t("finished")} / {t("outOfRelease")}
              </p>
              <br />
              <p>
                <b>{t("Explanation")}: </b> {t("KaramansExplanation")}
              </p>
            </div>
          </a>
        </div>
        <div className="card">
          <a
            style={{ textDecoration: "none" }}
            className="projectlink"
            target="_blank"
            href="https://www.dosecalculate.me/"
          >
            <img
              loading="lazy"
              className="cardImg"
              src="/doseCalculate.webp"
              alt="doseCalculate"
              style={{ width: "100%" }}
            />

            <div className="cardContainer">
              <h4>
                <b>Dose Calculate</b>
              </h4>
              <p>
                <b>{t("status")}:</b> {t("inProgress")} / {t("release")}
              </p>
              <br />
              <p>
                <b>{t("Explanation")}: </b>
                {t("DoseCalculateExplanation")}
              </p>
            </div>
          </a>
        </div>
        <div className="card">
          <a
            style={{ textDecoration: "none" }}
            className="projectlink"
            target="_blank"
            href="https://cafe-menu-project.vercel.app/"
          >
            <img
              loading="lazy"
              className="cardImg"
              src="/cafeMenu.webp"
              alt="cafeMenu"
              style={{ width: "100%" }}
            />

            <div className="cardContainer">
              <h4>
                <b>Cafe Menu Project</b>
              </h4>
              <p>
                <b>{t("status")}:</b> {t("finished")} / {t("release")}
              </p>
              <br />
              <p>
                <b>{t("Explanation")}: </b> {t("CafeMenuProjectExplanation")}
              </p>
            </div>
          </a>
        </div>
        <div className="card">
          <a
            style={{ textDecoration: "none" }}
            className="projectlink"
            target="_blank"
            href="https://bugrahancoban.com/"
          >
            <img
              loading="lazy"
              className="cardImg"
              src="/ComingSoon.webp"
              alt="comingSoon"
              style={{ width: "100%" }}
            />

            <div className="cardContainer">
              <h4>
                <b></b>
              </h4>
              <p>
                <b>{t("status")}:</b> {t("inProgress")} / {t("outOfRelease")}
              </p>
              <br />
              <p>
                <b>Açıklama: </b> {t("comingSoon")}
              </p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Projects;
