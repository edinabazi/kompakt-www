export const features = [
    {
        title: ["Drag 'n drop", "workflow"],
        icon: "lucide:mouse-pointer-click",
    },
    {
        title: ["Convert", "media files"],
        icon: "lucide:repeat-2",
    },
    {
        title: ["Batch", "processing"],
        icon: "lucide:layers-2",
    },
    {
        title: ["Local on", "your Mac"],
        icon: "lucide:hard-drive",
    },
    {
        title: ["Size result", "summary"],
        icon: "lucide:chart-no-axes-column-increasing",
    },
    {
        title: ["macOS", "native"],
        icon: "lucide:monitor-dot",
    },
] as const;

export const faqs = [
    {
        question: "What is Kompakt?",
        answer:
            "Kompakt is a lightweight macOS app for compressing and converting media files quickly. It is built around a simple drag-and-drop workflow instead of complex export panels.",
    },
    {
        question: "What can I compress or convert?",
        answer:
            "Kompakt is designed for common image and video files, with conversion support for formats like PNG, JPG, WebP, MOV, and MP4.",
    },
    {
        question: "How does conversion work?",
        answer:
            "Drop a supported file into the Konvert area, pick a target format when needed, and Kompakt creates a new converted copy while keeping the original file.",
    },
    {
        question: "Does Kompakt upload my files?",
        answer:
            "No. Kompakt is a local desktop app. Your files stay on your Mac while you compress or convert them.",
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
