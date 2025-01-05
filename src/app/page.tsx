import Header from "@/components/Header";
import Process from "@/components/Process";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "GroundUpMVP | Build Your Idea in 21 Days",
  description:
    "GroundUpMVP specializes in turning your business ideas into fully functional web or mobile applications with expert design, deployment, and analytics—all in just 21 days.",
  openGraph: {
    type: "website",
    url: "https://groundupmvp.com",
    title: "GroundUpMVP | Build Your Idea in 21 Days",
    description:
      "Transform your idea into a professional, ready-to-launch web or mobile app with GroundUpMVP. Complete delivery in 21 days, from design to deployment.",
    images: [
      {
        url: "https://groundupmvp.com/og-image.jpg", // Replace with the actual image URL
        width: 1200,
        height: 630,
        alt: "GroundUpMVP Landing Page Hero Banner",
      },
    ],
  },
  twitter: {
    site: "@groundupmvp",
    title: "GroundUpMVP | Build Your Idea in 21 Days",
    description:
      "GroundUpMVP helps you bring your ideas to life with fully functional web or mobile apps. 21-day turnaround, expert design, and full deployment.",
  },
  keywords: [
    "MVP development",
    "web app development",
    "mobile app development",
    "startup MVP",
    "software development services",
    "groundupmvp",
    "build your idea",
    "app deployment",
    "21 day MVP",
    "app analytics",
  ],
};

export default function Home () {
  return (
    <section>
      <Header />
      <Process />
    </section>
  )
}