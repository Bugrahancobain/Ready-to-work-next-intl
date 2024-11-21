Next.js Project with next-intl for Internationalization

This is a Next.js project configured with next-intl for handling internationalization (i18n). The project supports multiple languages, dynamic routing with locales, and formatting for currencies, dates, and numbers. Below, you’ll find an extensive explanation of the directory structure, installed packages, configurations, and the reasoning behind them.

Features

	•	Multi-language support (en, tr).
	•	Dynamic routing for locale-based pages (e.g., /en/about or /tr/about).
	•	Currency and date formatting based on locale using Intl.NumberFormat.
	•	Clean and scalable project structure.

Directory Structure

Here’s how the project is structured:

.
├── app
│   ├── [locale]
│   │   ├── aboutUs
│   │   │   └── page.js
│   │   ├── generateMetadata.js
│   │   ├── layout.js
│   │   └── page.js
│   ├── globals.css
│   └── page.module.css
├── components
│   └── Navbar.js
├── messages
│   ├── en.json
│   └── tr.json
├── public
├── src
│   ├── i18n.js
│   ├── middleware.js
├── .gitignore
├── package.json
├── next.config.mjs
└── README.md

Explanation of Folders and Files

	1.	app/[locale]
	•	This folder contains localized routes (e.g., /en, /tr).
	•	Each route can have its own page.js file and child folders for subroutes.
	•	layout.js defines the shared layout for all pages under [locale].
	2.	components
	•	Contains reusable UI components such as Navbar.js.
	3.	messages
	•	Stores translation JSON files (e.g., en.json for English and tr.json for Turkish).
	•	Each file contains translations for the app.
	4.	src/i18n.js
	•	Initializes next-intl and defines how messages are retrieved and provided.
	5.	src/middleware.js
	•	Configures middleware to handle locale-based routing.
	6.	next.config.mjs
	•	Configures Next.js settings, including supported locales and default locale.
	7.	public
	•	Used for static assets (images, fonts, etc.).

Installed Packages

Here are the main packages used in this project and why they were installed:

Dependencies

	1.	next
	•	Core framework for building server-rendered React applications.
	2.	next-intl
	•	Handles internationalization (i18n), including message translations and locale-aware formatting.
	3.	react and react-dom
	•	Core libraries for building React components and managing the DOM.

DevDependencies

None specific to this project, but eslint or prettier can be added for linting and formatting.

Step-by-Step Setup

1. Install Dependencies

Run the following command to install required packages:

npm install next next-intl react react-dom

2. Configure next.config.mjs

The next.config.mjs file is used to define the supported locales and default locale for the application.

/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    locales: ["en", "tr"], // Supported locales
    defaultLocale: "en",   // Default locale
  },
};

export default nextConfig;

3. Add Middleware for Locale Handling

The middleware.js file ensures that requests are routed to the correct locale subpath.

import createMiddleware from "next-intl/middleware";

export default createMiddleware({
  locales: ["en", "tr"], // Supported locales
  defaultLocale: "en",   // Default locale
});

export const config = {
  matcher: ["/((?!api|_next|.*\\..*).*)"], // Match all routes except API, static files, etc.
};

4. Create i18n.js

The i18n.js file initializes next-intl for retrieving translations dynamically.

import { getMessages } from "next-intl/server";

export async function getTranslations(locale) {
  return await getMessages({ locale });
}

5. Add Translation Files

Translation files are stored in the messages folder. Here’s an example of English and Turkish translations:

messages/en.json

{
  "NavbarLinks": {
    "home": "Home",
    "about": "About",
    "profile": "Profile"
  },
  "HomePage": {
    "title": "Welcome to the Home Page!"
  }
}

messages/tr.json

{
  "NavbarLinks": {
    "home": "Ana Sayfa",
    "about": "Hakkında",
    "profile": "Profil"
  },
  "HomePage": {
    "title": "Ana Sayfaya Hoş Geldiniz!"
  }
}

6. Add Navbar Component

The Navbar.js file provides a dynamic navigation menu that changes based on the selected locale.

"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";

export default function Navbar({ locale }) {
  const t = useTranslations("NavbarLinks");

  return (
    <nav>
      <Link href={`/${locale}/`}>{t("home")}</Link>
      <Link href={`/${locale}/about`}>{t("about")}</Link>
      <Link href={`/${locale}/profile`}>{t("profile")}</Link>
    </nav>
  );
}

7. Add Home Page

The page.js file in app/[locale]/ renders the home page dynamically based on the selected locale.

"use client";

import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("HomePage");

  return (
    <div>
      <h1>{t("title")}</h1>
    </div>
  );
}

8. Add a Subpage (e.g., About Us)

To add an aboutUs page:
	1.	Create a folder: app/[locale]/aboutUs/.
	2.	Add page.js inside it:

"use client";

import { useTranslations } from "next-intl";

export default function AboutUs() {
  const t = useTranslations("AboutPage");

  return (
    <div>
      <h1>{t("title")}</h1>
    </div>
  );
}


	3.	Update translation files:

{
  "AboutPage": {
    "title": "About Us"
  }
}

Running the Project

	1.	Development Server:

npm run dev

Open http://localhost:3000 to view the app.

	2.	Build for Production:

npm run build
npm start

Conclusion

This project demonstrates a scalable approach to building a multi-language website using next-intl. The directory structure, middleware, and dynamic routing make it easy to maintain and expand as new features or locales are added. For further improvements, consider adding:
	•	Unit tests for translation files.
	•	Support for number and date formatting using Intl.NumberFormat.

Feel free to fork this repository and adapt it to your needs. 😊
