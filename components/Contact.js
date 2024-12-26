import React from "react";
import { useTranslations } from "next-intl";

function Contact({ params }) {
  const t = useTranslations();

  return (
    <div className="contact">
      <div className="quickId">
        <div className="start"></div>
        <div className="quickIdTop">
          <div className="quickIdTitle">
            <span className="title2Word">{t("quickIdTitleTwoWorld")}</span>
            <span className="titleOtherWord">{t("quickIdTitleOutherWorld")}</span>
          </div>
        </div>
        <div className="quickIdBottom">
          <div className="titles">
            <span>{t("phone")}</span>
            <span>{t("email")}</span>
            <span>{t("address")}</span>
          </div>

          <div className="contexts">
            <span>+90 506 156 63 64</span>
            <span>bugra@cobanogluiplik.com</span>
            <span>
              Sanayi Mah. Sancaklı Cad. Çarşı Sok. No: 30. 34165
              Güngören/İstanbul
            </span>
          </div>
        </div>
      </div>
      <div className="contactMe">
        <div className="contactMeTop">
          <div className="contactMeTitle">
            <span className="title2Word">{t("contactTitleTwoWorld")}</span>
            <span className="titleOtherWord">{t("contactTitleOutherWorld")}</span>
          </div>
        </div>
        <div className="contactMeBottom">
          <form
            action="https://formspree.io/f/xkgwgwyb"
            method="POST"
            name="karamansForm"
            className="formMain"
          >
            <div className="formTitle"></div>
            <div className="formObjects">
              <div className="formObject">
                <label htmlFor="name" className="formTitles">
                  {t("name")}*
                </label>
                <input
                  id="name"
                  name="name"
                  className="formInput"
                  type="text"
                  required
                />
              </div>
              <div className="formObject">
                <label htmlFor="email" className="formTitles">
                  E-mail*
                </label>
                <input
                  id="email"
                  name="email"
                  className="formInput"
                  type="email"
                  required
                />
              </div>
              <div className="formObject">
                <label htmlFor="subject" className="formTitles">
                  {t("subject")}*
                </label>
                <input
                  id="subject"
                  name="subject"
                  className="formInput"
                  type="text"
                  required
                />
              </div>
            </div>
            <div>
              <label htmlFor="message" className="formTitles">
                {t("message")}*
              </label>
              <textarea
                id="message"
                name="message"
                className="formTextArea"
                type="text"
                required
              />
            </div>
            <button className="formSubmitBtn" type="submit">
              {t("submit")}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
