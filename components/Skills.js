import React from "react";
import { useTranslations } from "next-intl";

function Skills({ params }) {
  const t = useTranslations();

  return (
    <div className="skills">
      <div className="skillsTop">
        <div className="skillsTitle">
          <span className="title2Word">{t("skillsTitleTwoWorld")}</span>
          <span className="titleOtherWord">{t("skillsTitleOutherWorld")}</span>
        </div>
      </div>
      <div className="skillsBottom">
        <div className="boxMain1">
          <div className="boxTop">
            <div className="box1">
              <p
                className="center html"
                style={{
                  fontSize: "14px",
                  fontWeight: "bolder",
                }}
              >
                HTML
              </p>
              <p
                className="proficiendClass"
                style={{
                  color: "#df3042",
                  fontSize: "16px",
                  fontWeight: "bolder",
                }}
              >
                {t("proficiendClass")}
              </p>
            </div>
            <div className="box2">
              <p
                className="center css"
                style={{
                  fontSize: "14px",
                  fontWeight: "bolder",
                }}
              >
                CSS
              </p>
              <p
                className="proficiendClass"
                style={{
                  color: "#2f4875",
                  fontSize: "16px",
                  fontWeight: "bolder",
                }}
              >
                {t("proficiendClass")}
              </p>
            </div>
          </div>
          <div className="boxBottom">
            <div className="boxBig">
              <p
                className="javascript"
                style={{
                  paddingTop: 130,
                  fontSize: "20px",
                  fontWeight: "bolder",
                }}
              >
                JavaScript
              </p>
              <p
                className="advancedClass"
                style={{
                  color: "#df3042",
                  fontSize: "30px",
                  fontWeight: "bolder",
                }}
              >
                {t("advanced")}
              </p>
            </div>
          </div>
        </div>
        <div className="boxMain2">
          <div className="boxTop">
            <div className="box3">
              <p
                className="center sass"
                style={{
                  fontSize: "18px",
                  fontWeight: "bolder",
                  paddingTop: "20%",
                }}
              >
                SASS
              </p>
              <p
                className="proficiendClass"
                style={{
                  color: "#2f4875",
                  fontSize: "25px",
                  fontWeight: "bolder",
                }}
              >
                {t("proficiendClass")}
              </p>
            </div>
          </div>
          <div className="boxBottom">
            <div className="box4">
              <p
                className="typescript"
                style={{
                  paddingTop: "40%",
                  fontSize: "18px",
                  fontWeight: "bolder",
                }}
              >
                TypeScript
              </p>
              <p
                className="advancedClass"
                style={{
                  color: "#df3042",
                  fontSize: "25px",
                  fontWeight: "bolder",
                }}
              >
                {t("advanced")}
              </p>
            </div>
          </div>
        </div>
        <div className="boxMain3">
          <div className="box5">
            <p
              className="reactjscontext"
              style={{
                paddingTop: "45%",
                fontSize: "25px",
                fontWeight: "bolder",
              }}
            >
              React.Js
            </p>
            <p
              className="advancedClass"
              style={{
                color: "#2f4875",
                fontSize: "35px",
                fontWeight: "bolder",
              }}
            >
              {t("advanced")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
