export interface Event {
    id: number;
    title: string;
    image: string;
    slug: string;
    location: string;
    date: string; // ISO date or human readable
    time: string; // range or start time
    description?: string;
    tags?: string[];
};

const events: Event[] = [
    {
        id: 1,
        title: "Global Hackathon 2026",
        image: "/images/event1.png",
        slug: "global-hackathon-2026",
        location: "Online (Zoom)",
        date: "2026-01-15",
        time: "09:00 - 18:00 UTC",
        description: "A 24-hour online hackathon for developers, designers, and product people to build impactful projects and win prizes.",
        tags: ["hackathon", "virtual", "collaboration"],
    },
    {
        id: 2,
        title: "Local Devs Meetup",
        image: "/images/event2.png",
        slug: "local-devs-meetup",
        location: "Springfield Library — Hall B",
        date: "2026-02-10",
        time: "19:00 - 21:00",
        description: "An informal meetup for local developers to share projects, network, and learn from a short lightning talk series.",
        tags: ["meetup", "networking", "talks"],
    },
    {
        id: 3,
        title: "State Tech Conference",
        image: "/images/event3.png",
        slug: "state-tech-conference-2026",
        location: "Downtown Convention Center",
        date: "2026-04-21",
        time: "09:00 - 17:00",
        description: "A full-day conference featuring workshops, panels, and keynotes from industry experts across web and cloud technologies.",
        tags: ["conference", "workshops", "keynotes"],
    },
    {
        id: 4,
        title: "Design Sprint Weekend",
        image: "/images/event4.png",
        slug: "design-sprint-weekend",
        location: "Studio 12 — Design Hub",
        date: "2026-03-06",
        time: "10:00 - 18:00",
        description: "A hands-on two-day design sprint where cross-functional teams prototype and test product ideas with real users.",
        tags: ["design", "workshop", "ux"],
    },
    {
        id: 5,
        title: "AI & Data Workshop",
        image: "/images/event5.png",
        slug: "ai-data-workshop",
        location: "Tech Campus — Lab 3",
        date: "2026-05-12",
        time: "13:00 - 16:30",
        description: "An interactive workshop covering practical AI patterns, model evaluation, and data engineering best practices.",
        tags: ["ai", "data", "workshop"],
    },
    {
        id: 6,
        title: "Startup Pitch Night",
        image: "/images/event6.png",
        slug: "startup-pitch-night",
        location: "City Hall — Auditorium",
        date: "2026-06-18",
        time: "18:30 - 21:00",
        description: "Early-stage founders pitch to local investors and mentors; open networking follows each presentation.",
        tags: ["startup", "pitch", "networking"],
    },
];

export default events;
