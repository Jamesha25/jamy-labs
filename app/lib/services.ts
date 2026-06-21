export interface Service {
  slug: string;
  icon: string;
  title: string;
  description: string;
  details?: string;
  features?: string[];
}

export const services: Service[] = [
  {
    slug: "custom-software-development",
    icon: "💻",
    title: "Custom Software Development",
    description: "Tailored software solutions built from the ground up to meet your unique business requirements and scale with your growth.",
    details: "We build custom software tailored exactly to your business needs. From complex enterprise solutions to specialized operational tools, our team ensures high performance, security, and scalability.",
    features: ["Enterprise Architecture", "Legacy System Modernization", "API Integration", "Automated Testing"]
  },
  {
    slug: "web-applications",
    icon: "🌐",
    title: "Web Applications",
    description: "Modern, responsive web applications using cutting-edge technologies for optimal performance and user experience.",
    details: "Our web applications are built using the latest modern frameworks. We focus on delivering fast, secure, and highly responsive web apps that provide an exceptional user experience on any device.",
    features: ["Progressive Web Apps (PWA)", "Single Page Applications (SPA)", "Responsive UI/UX", "High Performance"]
  },
  {
    slug: "mobile-applications",
    icon: "📱",
    title: "Mobile Applications",
    description: "Native and cross-platform mobile apps that deliver exceptional user experiences across iOS and Android.",
    details: "We design and develop high-quality mobile applications for both iOS and Android. Whether native or cross-platform, our apps are designed to be fast, reliable, and user-friendly.",
    features: ["Native iOS & Android", "Cross-Platform React Native/Flutter", "UI/UX Design", "App Store Optimization"]
  },
  {
    slug: "saas-platforms",
    icon: "☁️",
    title: "SaaS Platforms",
    description: "Scalable Software-as-a-Service solutions with robust architecture, security, and multi-tenancy support.",
    details: "Building a SaaS product requires specialized architectural knowledge. We handle the complexities of multi-tenancy, subscription billing, and secure data segregation to build a robust SaaS platform.",
    features: ["Multi-tenant Architecture", "Subscription Management", "Cloud Infrastructure", "Data Security"]
  },
  {
    slug: "ai-solutions",
    icon: "🤖",
    title: "AI Solutions",
    description: "Intelligent applications powered by machine learning and AI to automate processes and drive innovation.",
    details: "Unlock the power of Artificial Intelligence. We integrate machine learning models, predictive analytics, and generative AI into your existing systems to automate workflows and provide intelligent insights.",
    features: ["Machine Learning Models", "Generative AI Integration", "Predictive Analytics", "Natural Language Processing"]
  },
  {
    slug: "cloud-devops",
    icon: "⚡",
    title: "Cloud & DevOps",
    description: "Cloud-native solutions with automated deployment pipelines, monitoring, and infrastructure management.",
    details: "Streamline your development lifecycle and scale efficiently. Our DevOps experts set up continuous integration, automated deployments, and scalable cloud infrastructure to ensure high availability.",
    features: ["CI/CD Pipelines", "Infrastructure as Code", "Cloud Migration", "24/7 Monitoring"]
  }
];
