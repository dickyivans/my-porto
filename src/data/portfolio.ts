export const profile = {
  name: "Dicky Ivan Setiawan",
  role: "Fullstack Developer",
  tagline:
    "Informatics Technology graduate with a double degree from Esa Unggul University and Nanjing Xiaozhuang University. Over 3 years of experience building full-stack systems across transportation, healthcare, fintech, and government sectors.",
  about: [
    "Hello! I'm Dicky Ivan Setiawan, a fullstack developer with a strong focus on building robust and scalable systems. Since 2020 I've worked as a software developer, building backends with Java (Spring Boot) and Go, and modern frontends with Next.js, TypeScript, and Tailwind CSS.",
    "I'm experienced in RESTful API development, microservices architecture, and containerized deployments using Docker and Kubernetes. Currently I work as a Fullstack Developer at Dinas Komunikasi dan Informatika Kabupaten Sanggau, building government data platforms and internal web applications. Fluent in English and Indonesian, with strong critical thinking and time management skills.",
  ],
  cvUrl:
    "https://drive.google.com/uc?export=download&id=1s2D12ONStMKkxCC99tlj7fjc37xGIL_u",
  email: "dickyivan778@gmail.com",
  socials: {
    linkedin: "https://www.linkedin.com/in/dicky-ivan-setiawan-72a66223b/",
    github: "https://github.com/dickyivans",
    gitlab: "https://gitlab.com/dicky-ivan-s",
    instagram: "https://www.instagram.com/dickyivans_/",
    whatsapp: "https://wa.me/6281287790226",
  },
}

export type SkillGroup = {
  title: string
  skills: string[]
}

export const skillGroups: SkillGroup[] = [
  {
    title: "Backend",
    skills: [
      "Java",
      "Spring Boot",
      "Go",
      "Laravel",
      "PHP",
      "RESTful API",
      "Microservices",
      "Spring Security",
      "Apache Dubbo",
      "RabbitMQ",
    ],
  },
  {
    title: "Frontend & Mobile",
    skills: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Flutter",
      "Bootstrap",
      "HTML & CSS",
    ],
  },
  {
    title: "Database",
    skills: ["MySQL", "MariaDB", "MongoDB", "Spring JPA"],
  },
  {
    title: "DevOps & Tools",
    skills: [
      "Docker",
      "Kubernetes",
      "Jenkins",
      "Google Cloud Platform",
      "Git",
      "Zookeeper",
      "Linux",
    ],
  },
]

export type Experience = {
  company: string
  location: string
  role: string
  period: string
  current?: boolean
  description: string
  highlights: string[]
}

export const experiences: Experience[] = [
  {
    company: "Dinas Komunikasi dan Informatika Kabupaten Sanggau",
    location: "Kabupaten Sanggau, Indonesia",
    role: "Fullstack Developer",
    period: "May 2025 - Present",
    current: true,
    description:
      "Government institution managing communication, informatics, and data services for Sanggau Regency.",
    highlights: [
      "Developed and released Portal Satu Data Sanggau (data.sanggau.go.id) using the CKAN framework as the backend for centralized government dataset management, with a revamped Next.js frontend for a modern, responsive experience.",
      "Designed a new self-hosted hosting architecture for Sanggau government websites on Proxmox: MinIO object storage, a dockerized data hub (Laravel API, PostgreSQL, Redis, Laravel Horizon) with a Next.js admin dashboard, and dockerized public sites (sanggau.go.id, diskominfo, bkpsdm, kabar, opd-kec) deployed from a centralized GitHub organization.",
      "Built and deployed e-Perjadin, a business trip management web application with budget tracking, automated SPPD document and payment receipt generation, and a centralized archive system.",
      "Built comprehensive guide websites for Panduan Portal Satu Data and e-Walidata Sanggau with responsive design across all devices.",
    ],
  },
  {
    company: "DANA Indonesia",
    location: "Jakarta, Indonesia",
    role: "Backend Developer",
    period: "Nov 2023 - Feb 2024",
    description:
      "DANA is a highly secured and scalable payment service platform in Indonesia.",
    highlights: [
      "Migrated config Enum to Parameter Center using the SOFA Framework on Spring Boot.",
      "Fixed unit tests with Mockito, TestNG, and iTest.",
    ],
  },
  {
    company: "Fit Happy",
    location: "Jakarta, Indonesia",
    role: "Backend Developer",
    period: "Jul 2021 - Sep 2023",
    description:
      "A health and wellness startup providing diet programs and health consultation services.",
    highlights: [
      "Engineered backend services with Spring Boot in a microservice architecture, secured with Spring Security and routed through Zuul gateway.",
      "Leveraged MariaDB and MongoDB with Spring JPA, and facilitated inter-service communication with Apache Dubbo and RabbitMQ.",
      "Deployed applications using Docker, Jenkins, and Zookeeper on Google Cloud Platform, and integrated the Strava API for user workout data.",
    ],
  },
  {
    company: "Sembuh",
    location: "Jakarta, Indonesia",
    role: "Backend Developer",
    period: "Oct 2020 - Jul 2021",
    description:
      "A health-sector startup providing health information, consultations, and support groups via mobile apps.",
    highlights: [
      "Developed backend applications using Spring Boot with a microservice architecture, Spring Security, and Zuul gateway.",
      "Used MariaDB and MongoDB with Spring JPA, plus Apache Dubbo and RabbitMQ as message brokers.",
      "Handled deployment with Docker, Jenkins, and Zookeeper on Google Cloud Platform.",
    ],
  },
  {
    company: "Angkuts",
    location: "Pontianak, Indonesia",
    role: "Backend Developer",
    period: "Feb 2020 - Sep 2020",
    description:
      "An environmental cleanliness startup collecting waste from customers' homes for delivery to disposal sites.",
    highlights: [
      "Built backend applications from scratch using Spring Boot with a microservice architecture, Eureka discovery server, and Zuul gateway.",
      "Managed service configuration with Spring Cloud Config and authentication with Spring Security.",
      "Produced JSON REST APIs consumed by other teams and deployed the application with Docker on a Linux VM.",
    ],
  },
]

export type Project = {
  name: string
  status: "Ongoing" | "Live" | "Completed"
  description: string
  stack: string[]
  url?: string
}

export type FeaturedProject = {
  name: string
  tagline: string
  role: string
  overview: string
  features: string[]
  challenges: { title: string; description: string }[]
  stack: string[]
}

export const featuredProject: FeaturedProject = {
  name: "Haruna HRIS — Integrated Attendance & HR Management System",
  tagline:
    "End-to-end HRIS platform for a multi-branch coffee shop network: GPS + biometric fingerprint attendance, payroll, shift scheduling, multi-level approvals, and a real-time analytics dashboard.",
  role: "Full-stack developer — architecture, backend, mobile app, hardware integration, and DevOps/deployment.",
  overview:
    "A complete HRIS built for Haruna Coffee, a multi-branch coffee shop network. It combines a Laravel web admin, a native Flutter mobile app for employee attendance, and direct integration with on-site biometric fingerprint machines — covering the full HR cycle from attendance, shift scheduling, leave, and overtime to payroll, KPIs, and recruitment, all with role-based access control and per-branch scoping. A Next.js company profile website connects to the HRIS backend via REST API for the recruitment module.",
  features: [
    "Multi-method attendance: server-side GPS geofencing with anti-spoofing, selfie verification, and biometric fingerprint machines at each branch.",
    "Native Flutter app with live camera preview, interactive geofence map, slide-to-confirm clock-in/out, and attendance history — replacing the legacy PWA.",
    "Shift scheduling and monitoring per group/branch with anomaly detection and attendance breakdowns per shift and position.",
    "Multi-level leave and overtime approvals that adapt to the requester's role (staff → Head → HRD), with granular per-branch permission scoping across six roles.",
    "Payroll import and Excel-exportable reports for attendance, lateness, overtime, leave, and salary.",
    "Owner analytics dashboard with four lazy-loaded tabs (Finance, Attendance, Schedule, Staffing), trend charts, and attendance matrices, plus self-hosted Web Push notifications per role.",
  ],
  challenges: [
    {
      title: "Integrating undocumented biometric hardware",
      description:
        "The Fingerspot T218 machine turned out to speak a Hikvision-OEM protocol (ISAPI / HTTP Listening) instead of the classic ADMS. I reverse-engineered the event payload, mapped biometric events to employee records via MAC address, and built IN/OUT detection based on the application's working-hour windows rather than machine configuration — keeping it accurate across shifts and overtime.",
    },
    {
      title: "Attendance anti-fraud",
      description:
        "Geofence coordinates and working hours are enforced server-side (never trusted from the client), with per-account rate limiting, photo MIME validation, and a single source of truth for attendance storage — the mobile API delegates to the same controller as the web app.",
    },
    {
      title: "Dynamic multi-level approvals",
      description:
        "Leave and overtime approval flows adjust automatically to the requester's role with per-branch permission scoping, avoiding hardcoded logic for every role combination.",
    },
  ],
  stack: [
    "Laravel 13",
    "PHP 8.3",
    "MySQL",
    "Laravel Sanctum",
    "Spatie Permission",
    "Flutter",
    "Riverpod 3",
    "Next.js 16",
    "TypeScript",
    "Tailwind CSS v4",
    "Docker",
    "Nginx",
    "Cloudflare",
    "Web Push (VAPID)",
  ],
}

export const projects: Project[] = [
  {
    name: "Portal Satu Data Sanggau",
    status: "Live",
    description:
      "Centralized open data portal for Sanggau Regency government datasets — data management, publication, and public access. Built on the CKAN framework as the backend, with a freshly revamped Next.js frontend featuring dataset search, release schedules, and per-agency catalogs.",
    stack: ["CKAN", "Next.js", "TypeScript", "Tailwind CSS"],
    url: "https://data.sanggau.go.id",
  },
  {
    name: "Sanggau Hosting Architecture & Web Platform",
    status: "Ongoing",
    description:
      "New self-hosted infrastructure for Sanggau government websites on Proxmox across three servers: MinIO object storage, a dockerized data hub (Laravel API, PostgreSQL, Redis, Laravel Horizon) powering a Next.js admin dashboard, and dockerized public sites — including the Sanggau information portal — deployed from a centralized GitHub organization.",
    stack: [
      "Proxmox",
      "Docker",
      "Laravel",
      "PostgreSQL",
      "Redis",
      "MinIO",
      "Next.js",
      "Nginx",
    ],
  },
  {
    name: "e-Perjadin",
    status: "Live",
    description:
      "Government business trip management application that streamlines monitoring and archiving of official travel. Features real-time budget tracking, automated generation of SPPD documents and payment receipts, and a centralized archive of historical trip data.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    name: "e-Walidata & Panduan Portal Satu Data",
    status: "Live",
    description:
      "Comprehensive guide websites for e-Walidata Sanggau and the Satu Data portal, ensuring responsive design and an optimal user experience across all devices.",
    stack: ["Bootstrap", "HTML", "CSS"],
    url: "https://dickyivans.github.io/panduan-sdi-ewalidata/",
  },
]
