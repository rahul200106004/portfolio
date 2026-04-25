export const personalInfo = {
  name: "Rahul Aryan",
  firstName: "Rahul",
  lastName: "Aryan",
  title: "AI Engineer | GenAI Developer",
  tagline: "Building intelligent systems that think, adapt, and scale.",
  email: "rahularien06@gmail.com",
  phone: "+91 6206038079",
  location: "Noida, India",
  linkedin: "https://www.linkedin.com/in/rahul-aryan-429860184",
  instagram: "https://www.instagram.com/ig.rahul007",
  resumeUrl: "https://customer-assets.emergentagent.com/job_6a96a4ad-ed95-44dc-891d-dc916fa89fec/artifacts/q59cpdvc_Resume_Rahul%20Aryan.pdf",
  totalExperience: "1.5+ Years",
  summary: "AI Engineer with hands-on experience building production-grade GenAI systems on Azure. Specialized in end-to-end RAG pipelines, agentic AI orchestration using Semantic Kernel, and multi-source enterprise knowledge retrieval. Delivered the RKR Agent \u2014 a GPT-4-powered Teams chatbot indexing 5+ enterprise knowledge sources.",
  about: {
    intro: "I'm Rahul \u2014 an AI Engineer focused on building production-grade GenAI solutions, from multi-source RAG pipelines and agentic orchestration with Semantic Kernel to scalable cloud-native architectures on Azure. I specialize in turning complex AI concepts into reliable, enterprise-ready systems.",
    personality: "Beyond the terminal, you'll find me exploring new places across India, staying on top of emerging tech trends, or diving deep into research papers. I believe great engineering comes from continuous learning and real-world curiosity.",
    philosophy: "Every state I've traveled, every chess match I've played, every research paper I've read \u2014 it all feeds into how I approach problem-solving. Curiosity isn't just a trait; it's my operating system."
  }
};

export const experience = [
  {
    id: 1,
    company: "Cognizant Technology Solutions",
    role: "AI Engineer",
    duration: "Nov 2024 \u2014 Present",
    type: "Full-time",
    description: "Building production-grade GenAI systems on Azure \u2014 delivering enterprise RAG pipelines, agentic AI orchestration, and multi-agent automation solutions.",
    highlights: [
      "Designed and delivered the RKR Agent \u2014 an end-to-end enterprise RAG system ingesting from SharePoint, Confluence, ServiceNow, GitHub, and Azure DevOps via nightly Azure Functions pipelines",
      "Built a multi-plugin Semantic Kernel agent with GPT-4o function calling for autonomous tool selection across 5+ knowledge indexes",
      "Implemented multi-modal document conversion (PDFs via PyMuPDF + GPT-4 Vision OCR, videos via Azure Speech-to-Text) and token-based chunking with tiktoken",
      "Resolved hallucination failures through prompt engineering, similarity-score fallback responses, and an abbreviation expansion map for enterprise acronyms",
      "Built a 12+ agent AI Infra Assistant automating Azure infrastructure discovery, ESLZ migration planning, and Terraform code generation with React Flow architecture diagrams",
      "Authored Terraform IaC, CI/CD pipelines via GitHub Actions across DEV/UAT/PRD, and KQL monitoring scripts in Application Insights"
    ]
  },
  {
    id: 2,
    company: "Emertxe Information Technologies",
    role: "Embedded Systems Intern",
    duration: "3 Months",
    type: "Internship",
    description: "Developed embedded systems skills through hands-on C programming and SDLC projects.",
    highlights: [
      "Built C programs for microcontroller architectures enhancing embedded system proficiency",
      "Contributed to SDLC projects \u2014 improving code quality and system reliability by 15%",
      "Achieved 98% system functionality success rate through comprehensive testing"
    ]
  }
];

export const projects = [
  {
    id: 1,
    title: "Rapid Knowledge Retrieval Agent",
    subtitle: "Enterprise RAG + Teams Chatbot",
    description: "GPT-4-powered Microsoft Teams chatbot indexing 5+ enterprise knowledge sources (SharePoint, Confluence, ServiceNow, GitHub, Azure DevOps). Features multi-plugin Semantic Kernel agents, multi-modal document conversion (PDF/Video/Image), token-based chunking, and topic-isolated multi-index routing with hallucination mitigation.",
    impact: "Production-deployed across DEV/UAT/PRD",
    tags: ["Semantic Kernel", "GPT-4o", "Azure AI Search", "Azure Functions", "FastAPI", "tiktoken", "Power BI"],
    category: "GenAI",
    featured: true
  },
  {
    id: 2,
    title: "AI Infra Assistant",
    subtitle: "Multi-Agent Cloud Automation",
    description: "12+ orchestrated AI agents automating Azure infrastructure discovery, ESLZ migration planning, architecture diagram generation (React Flow + Dagre), Terraform code generation with validation, and technical documentation. Features a natural language chatbot for live diagram editing with a clarify-confirm-apply workflow.",
    impact: "End-to-end cloud migration automation",
    tags: ["Agentic AI", "GPT-4o", "React Flow", "Terraform", "Presidio", "FastAPI", "Microsoft Agent SDK"],
    category: "GenAI",
    featured: true
  },
  {
    id: 3,
    title: "DoRA",
    subtitle: "Document Review Assistant",
    description: "Semantic compliance document review engine using chunking, embeddings, and LLM-driven context validation. Integrates FAISS vector store and templated LLM prompts for automated feedback generation on regulatory compliance documents.",
    impact: "Automated compliance review pipeline",
    tags: ["FAISS", "LangChain", "Azure OpenAI", "Python"],
    category: "GenAI",
    featured: false
  },
  {
    id: 4,
    title: "Drowsiness Detection",
    subtitle: "Real-time Safety System",
    description: "Trifold computer vision approach combining eye aspect ratio (blink detection), mouth aspect ratio (yawn detection), and head tilt angle (posture monitoring) using OpenCV and dlib for real-time driver safety across automotive and industrial domains.",
    impact: "95% detection accuracy in real-time",
    tags: ["OpenCV", "dlib", "Python", "Computer Vision"],
    category: "CV/ML",
    featured: false
  }
];

export const skillCategories = [
  {
    category: "AI & Generative AI",
    icon: "brain",
    skills: ["RAG Pipelines", "Agentic AI", "Semantic Kernel", "LangChain", "Prompt Engineering", "Function Calling", "LLM Evaluation", "Hallucination Mitigation", "Vector Search", "Semantic Search", "RAGAS", "Fine-Tuning"]
  },
  {
    category: "Models & APIs",
    icon: "cpu",
    skills: ["GPT-4o", "GPT-4-turbo", "text-embedding-3-large", "Azure Speech-to-Text", "Azure Vision API", "Microsoft Graph API"]
  },
  {
    category: "Azure Cloud",
    icon: "cloud",
    skills: ["Azure OpenAI", "Azure AI Search", "Azure Functions", "Azure App Service", "Azure Bot Service", "Azure Blob Storage", "Azure Queue Storage", "Azure SQL", "Application Insights", "Key Vault"]
  },
  {
    category: "Backend & Languages",
    icon: "code",
    skills: ["Python", "FastAPI", "SQL", "KQL", "Terraform (HCL)", "tiktoken", "PyMuPDF", "Presidio"]
  },
  {
    category: "Tools & DevOps",
    icon: "wrench",
    skills: ["GitHub Actions (CI/CD)", "Snyk", "Power BI", "Azure DevOps", "Postman", "FAISS", "Chroma", "Git"]
  },
  {
    category: "Practices & Security",
    icon: "shield",
    skills: ["System Design", "Microsoft Entra ID", "OAuth 2.0", "PII Anonymization", "Integration Testing", "SDLC"]
  }
];

export const certifications = [
  {
    id: 1,
    title: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    validity: "Valid until 2028"
  },
  {
    id: 2,
    title: "Azure Data Fundamentals (DP-900)",
    issuer: "Microsoft",
    validity: "Certified"
  },
  {
    id: 3,
    title: "Azure Fundamentals (AZ-900)",
    issuer: "Microsoft",
    validity: "Certified"
  },
  {
    id: 4,
    title: "Prompt Engineering for ChatGPT",
    issuer: "Vanderbilt University (Coursera)",
    validity: "Completed"
  }
];

export const beyondCode = {
  chess: {
    title: "Chess Grandmaster Aspirant",
    description: "Ranked in the top 1% of global live chess players on chess.com. Won 1st place among 672 participants in the FIDE Online Arena's New Year's Special Swiss Tournament.",
    image: "https://customer-assets.emergentagent.com/job_profile-platform-8/artifacts/xl8x8ois_image.png",
    stats: [
      { label: "Global Ranking", value: "Top 1%" },
      { label: "FIDE Tournament", value: "#1 / 672" },
      { label: "Time Control", value: "Classic 3m" }
    ]
  },
  travel: {
    title: "Explorer & Content Creator",
    description: "Covered 12 of 28 Indian states, creating content and collecting perspectives along the way. Every destination shapes how I see technology and its impact on diverse communities.",
    image: "https://customer-assets.emergentagent.com/job_profile-platform-8/artifacts/ydb9xtq8_image.png",
    stats: [
      { label: "States Explored", value: "12 / 28" },
      { label: "Style", value: "Content Creator" },
      { label: "Languages", value: "EN / HI" }
    ]
  },
  passions: [
    { name: "Psychology", detail: "Human & Animal Behavior", icon: "brain" },
    { name: "Meditation", detail: "Mindfulness & Spirituality", icon: "sparkles" },
    { name: "Reading", detail: "Research Papers & Books", icon: "book" },
    { name: "Sports", detail: "Cricket, Badminton, Boxing", icon: "trophy" },
    { name: "Content", detail: "Travel & Tech Stories", icon: "camera" },
    { name: "Tech", detail: "Always Exploring What's New", icon: "zap" }
  ]
};

export const education = {
  degree: "B.Tech, Electronics & Communication Engineering",
  institution: "Bangalore Institute of Technology",
  shortName: "BIT",
  year: "2024",
  cgpa: "7.5 / 10",
  location: "Bangalore, India"
};
