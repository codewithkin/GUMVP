import { props } from "@/components/ui/pricing-tier";

export const tiers: Array<props> = [
    {
        title: 'Starter',
        price: 899,
        features: [
            "Web or mobile app with core MVP features",
            "High quality design mockup",
            "2 Revisions",
            "Submission to Google Playstore  / Appstore",
            "Domain registration",
            "Payment integration",
            "Post-launch support"
        ]
    },
    {
        title: 'Standard',
        price: 2400,
        features: [
            "Everything in starter +",
            "Cloud hosting and complete deployment",
            "5 Revisions",
            "Advanced analytics for user tracking",
            "SEO optimization for better reach",
            "Professional landing Pge"
        ]
    },
    {
        title: 'Business',
        price: 4000,
        features: [
            "Everything in Standard +",
            "Extermely detailed Analytics",
            "10 Revisions and a CMS integration",
            "Custom branding tailored for your business",
            "Priority Support",
            "Free domain registration for 1 year",
            "Perfomance enhancements"
        ]
    }
]