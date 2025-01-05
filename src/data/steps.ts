export type Step = {
    id: number;
    title: string;
    description: string;
    imageUrl?: string
}

export const steps: Step[] = [
    {
        id: 1,
        title: "Kickoff meeting",
        description: "We meet to align on your vision, goals and features, setting a strong foundation for your project"
    },
    {
        id: 2,
        title: "Design Phase",
        description: "We create high quality wireframes and mockups in just 4 days and ensure it meets your expectations, taking the first steps towards making your idea a reality"
    },
    {
        id: 3,
        title: "Development Sprint",
        description: "In 12 days, we code and integrate features. Turning your design into a functional MVP ready for launch"
    }
]