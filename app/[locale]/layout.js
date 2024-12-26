import Navbar from "../../components/Navbar";
import "../globals.css";
import "../../styles/Banner.css";
import "@/../styles/Contact.css";
import "@/../styles/Experience.css";
import "@/../styles/Education.css";
import "@/../styles/Footer.css";
import "@/../styles/NavBar.css";
import "@/../styles/Projects.css";
import "@/../styles/Skills.css";
import "@/../styles/Me.css";
import "@/../styles/AboutMe.css";
import "@/../styles/MyProject.css";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import Footer from "../../components/Footer";

export default async function RootLayout({ children, params }) {
  // params.locale'i await ile çöz
  const locale = params?.locale || "en"; // Varsayılan dil atanır
  const messages = await getMessages({ locale });

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <div>
            <Navbar locale={locale} />
            {children}
            <Footer />
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}