export const features = [
    {
        title: ["Drag-and-drop", "compression"],
        icon: "lucide:mouse-pointer-click",
    },
    {
        title: ["Images and", "videos"],
        icon: "lucide:images",
    },
    {
        title: ["Native macOS", "workflow"],
        icon: "lucide:monitor",
    },
    {
        title: ["Instant size", "feedback"],
        icon: "lucide:chart-no-axes-column-increasing",
    },
    {
        title: ["No account,", "no setup"],
        icon: "lucide:user-lock",
    },
    {
        title: ["Free and", "open source"],
        icon: "lucide:code-xml",
    },
] as const;

export const faqs = [
    {
        question: "What is Kompakt?",
        answer:
            "Kompakt is a lightweight macOS app for compressing images and videos quickly. It is built around a simple drag-and-drop workflow instead of complex export panels.",
    },
    {
        question: "What can I compress?",
        answer:
            "Kompakt is designed for common image and video files. Format support can expand over time as the app develops.",
    },
    {
        question: "Does Kompakt upload my files?",
        answer:
            "No. Kompakt is a local desktop app. Your files stay on your Mac while you compress them.",
    },
    {
        question: "Do I need an account?",
        answer:
            "No. There are no signups, accounts, subscriptions, or cloud workspace requirements.",
    },
    {
        question: "Is Kompakt free?",
        answer:
            "Yes. Kompakt is free to download and open source.",
    },
    {
        question: "Can I contribute?",
        answer:
            "Yes. Issues, feature ideas, bug reports, and code contributions are welcome on GitHub.",
    },
] as const;
