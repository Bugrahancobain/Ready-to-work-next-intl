import Navbar from "../../components/Navbar";
import "../globals.css";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";

export default async function RootLayout({ children, params }) {
  // params.locale'i await ile çöz
  const locale = params?.locale || "en"; // Varsayılan dil atanır
  const messages = await getMessages({ locale });

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <div className="mx-auto max-w-4xl h-screen">
            <Navbar locale={locale} />
            {children}
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}