import { useTranslations } from "next-intl";
import React from "react";

function Education({ params }) {
  const t = useTranslations();

  return (
    <div className="education">
      <div className="educationTop">
        <div className="educationTitle">
          <span className="title2Word">{t("educationTitleTwoWorld")}</span>
          <span className="titleOtherWord">{t("educationTitleOutherWorld")}</span>
        </div>
      </div>
      <div className="educationBottom">
        <div className="educationFirstContext">
          <h1 className="educationFirstTitle">{t("educationFirstTitle")}</h1>
          <span className="educationFirstBottomTitle">2011 - 2016</span>

          <p className="educationFirstComment">{t("educationFirstComment")}</p>
        </div>
        <div className="educationSecondContext">
          <h2 className="educationSecondTitle">{t("educationSecondTitle")}</h2>
          <span className="educationSecondBottomTitle">2016 - 2022</span>

          <p className="educationSecondComment">{t("educationSecondComment")}</p>
        </div>
        <div className="educationThirdContext">
          <h3 className="educationThirdTitle">{t("educationThirdTitle")}</h3>
          <span className="educationThirdBottomTitle">2022 - ...</span>

          <p className="educationThirdComment">{t("educationThirdComment")}</p>
        </div>
      </div>
    </div>
  );
}

export default Education;
