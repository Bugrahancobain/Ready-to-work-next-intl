import React from "react";
import { useTranslations } from "next-intl";

function Experience({ params }) {
  const t = useTranslations();

  return (
    <div className="experience">
      <div className="experienceTop">
        <div className="experienceTitle">
          <span className="title2Word">{t("experienceTitleTwoWorld")}</span>
          <span className="titleOtherWord">
            {t("experienceTitleOutherWorld")}
          </span>
        </div>
      </div>
      <div className="experienceBottom">
        <div className="experienceFirstContext">
          <h1 className="experienceFirstTitle">{t("experienceFirstTitle")}</h1>
          <span className="experienceFirstBottomTitle">
            {t("experienceFirstBottomTitle")}
          </span>

          <p className="experienceFirstComment">{t("experienceFirstComment")}</p>
        </div>
        <div className="experienceSecondContext">
          <h2 className="experienceSecondTitle">{t("experienceSecondTitle")}</h2>
          <span className="experienceSecondBottomTitle">
            {t("experienceSecondBottomTitle")}
          </span>

          <p className="experienceSecondComment">
            {t("experienceSecondComment")}
          </p>
        </div>
        <div className="experienceThirdContext">
          <h3 className="experienceThirdTitle">{t("experienceThirdTitle")}</h3>
          <span className="experienceThirdBottomTitle">
            {t("experienceThirdBottomTitle")}
          </span>

          <p className="experienceThirdComment">{t("experienceThirdComment")}</p>
        </div>
      </div>
    </div>
  );
}

export default Experience;
