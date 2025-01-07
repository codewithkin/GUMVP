import "./globals.css";
import DesktopNavbar from "@/components/DesktopNavbar";
import MobileNavbar from "@/components/MobileNavbar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "GroundUpMVP | Custom Software and App Development in 21 Days",
  description:
    "GroundUpMVP helps startups and businesses create custom software, websites, and mobile apps in just 21 days. Affordable, reliable, and tailored to your needs.",
  keywords: [
    "custom software development",
    "software development services",
    "custom application development",
    "custom app development",
    "website development",
    "mobile app development",
    "web application development",
    "build a website",
    "create a mobile app",
    "startup app development",
    "web and mobile app development",
  ],
  openGraph: {
    title: "GroundUpMVP | Custom Software and App Development in 21 Days",
    description:
      "We specialize in creating custom software, websites, and mobile apps for startups and businesses in just 21 days. Affordable, reliable, and tailored to your needs.",
    url: "https://groundupmvp.com",
    type: "website",
    images: [
      {
        url: "/assets/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "GroundUpMVP banner showing custom app development in 21 days",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "GroundUpMVP | Custom Software in 21 Days",
    description:
      "Affordable, reliable custom software development services. Startups and businesses trust GroundUpMVP to deliver in just 21 days.",
    images: ["/assets/twitter-image.jpg"],
  },
  alternates: {
    canonical: "https://groundupmvp.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
       <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "GroundUpMVP",
              url: "https://groundupmvp.com",
              description:
                "GroundUpMVP helps startups and businesses create custom software, websites, and mobile apps in just 21 days. Affordable, reliable, and tailored to your needs.",
              author: {
                "@type": "Organization",
                name: "GroundUpMVP",
                url: "https://groundupmvp.com",
              },
              potentialAction: {
                "@type": "SearchAction",
                target: "https://groundupmvp.com/search?q={search_term_string}",
                "query-input": "required name=search_term_string",
              },
              inLanguage: "en",
            }),
          }}
        />
      </head>
      <body>
        <DesktopNavbar />
        <MobileNavbar />
        {children}
      </body>
    </html>
  );
}
