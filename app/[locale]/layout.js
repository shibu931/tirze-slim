import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Common/Navbar";
import Footer from "@/components/Common/Footer";
import { CartProvider } from "@/context/CartContext";
import { Toaster } from "@/components/ui/sonner";
import { NextIntlClientProvider, hasLocale } from 'next-intl';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import { populateDB } from "@/lib/actions/product.action";
import Script from "next/script";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]
});

const metadataTranslations = {
  en: {
    title: "Tirzepatide | GIP + GLP-1 Tirze-slim – Order Effectively Online",
    description: "Order GIP + GLP-1 on Tirze-slim: effective products like semaglutide and tirzepatide for weight loss. Guaranteed quality and fast delivery to Italy.",
    keywords: ["Tirzepatide, tirzepatide weight loss, tirzepatide compound, compound tirzepatide, semaglutide, semaglutide weight loss, compounded semaglutide, Retatrutide, retatrutide peptide, retatrutide research peptide, retatrutide dosage, Cagrilintide, cagrilintide peptide, cagrilintide dosage"],
    openGraph: {
      images: ['/1.webp'],
    }
  },
  it: {
    title: "Tirzepatide | GIP + GLP-1 Tirze-slim – Ordina online in modo efficace",
    description: "Ordina GIP + GLP-1 su Tirze-slim: prodotti efficaci come semaglutide e tirzepatide per la perdita di peso. Qualità garantita e consegna veloce in Italia.",
    keywords: ["Tirzepatide, tirzepatide weight loss, tirzepatide compound, compound tirzepatide, semaglutide, semaglutide weight loss, compounded semaglutide, Retatrutide, retatrutide peptide, retatrutide research peptide, retatrutide dosage, Cagrilintide, cagrilintide peptide, cagrilintide dosage, semaglutide in Italy"],
    openGraph: {
      images: ['/1.webp'],
    }
  }
};

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const metadata = metadataTranslations[locale] || metadataTranslations.en;

  return {
    title: metadata.title,
    description: metadata.description,
    keywords: metadata.keywords,
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_BASE_URL}/${locale}`,
      languages: {
        'en': process.env.NEXT_PUBLIC_BASE_URL + '/en',
        'it': process.env.NEXT_PUBLIC_BASE_URL + '/it',
      },
    },
    openGraph: {
      title: metadata.title,
      description: metadata.description,
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/${locale}`,
      siteName: "Tirze Fit",
      images: metadata.openGraph.images,
      locale: locale,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: metadata.title,
      description: metadata.description,
      images: metadata.openGraph.images,
    },
    robots: {
      index: true,
      follow: true,
      nocache: false,
      googleBot: {
        index: true,
        follow: true,
        noimageindex: false,
      },
    },
    icons: {
      icon: [
        { url: '/android-chrome-192x192.png', type: 'image/png' },
      ],
      shortcut: ['/android-chrome-192x192.png'],
      apple: '/apple-touch-icon.png',
      other: {
        rel: 'apple-touch-icon',
        url: '/apple-touch-icon.png',
      },
    },
  };
}

function StructuredData({ locale }) {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  const logoUrl = `${baseUrl}/logo.png`; // Update with your actual logo path

  const schemaData = [
    // Breadcrumb Schema
    {
      "@context": "https://schema.org/",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": `${baseUrl}/${locale} - Home Page`,
          "item": `${baseUrl}/${locale}`
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Shop Now",
          "item": `${baseUrl}/${locale}/shop`
        }
      ]
    },
    // Website Schema
    {
      "@context": "https://schema.org/",
      "@type": "WebSite",
      "name": "Tirze-slim",
      "url": `${baseUrl}/${locale}`,
      "potentialAction": {
        "@type": "SearchAction",
        "target": `${baseUrl}/${locale}/search/{search_term_string}`,
        "query-input": "required name=search_term_string"
      }
    },
    // Organization Schema
    {
      "@context": "https://schema.org",
      "@type": "DiagnosticLab",
      "name": "Tirze-slim",
      "url": `${baseUrl}/${locale}`,
      "logo": logoUrl,
      "sameAs": `${baseUrl}/${locale}`
    }
  ];

  return (
    <>
      {schemaData.map((data, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
        />
      ))}
    </>
  );
}

export default async function RootLayout({ children, params }) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  return (
    <html lang={locale}>
      <head>
        <StructuredData locale={locale} />
        <meta name="google-site-verification" content="Ko2-cMrxnKDFKwvDsx11Z0Yx91z_u58fK-yZuEZQiL8" />
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-ZLREM0YTH8"></Script>
        <Script>
          {
            `window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-ZLREM0YTH8');
            `
          }
        </Script>
      </head>
      <body
        className={`${poppins.className} antialiased`}
      >
        <NextIntlClientProvider>
          <CartProvider>
            <Navbar />
            {children}
            <Footer />
            <Toaster richColors />
          </CartProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
