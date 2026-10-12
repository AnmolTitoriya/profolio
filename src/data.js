export const profile = {
  name: 'Anmol Titoriya',
  role: '.NET Engineer',
  stack: ['.NET / C#', 'Azure', 'AWS', 'Angular', 'React'],
  title: '.NET Engineer | Azure & AWS | Angular / React',
  tagline:
    "I build secure, observable APIs and event-driven integrations across Healthcare, Finance, and Logistics.",
  about:
    "I'm a .NET and Azure integration engineer with 7 years of professional experience, 5 of them in software engineering, building REST APIs, event-driven integrations, and cloud services. I deliver secure, observable APIs on Azure (Functions, Service Bus, APIM, Entra ID, Key Vault) and serverless workloads on AWS (Lambda, S3, CloudFront, Terraform, CDK). I work full-stack with Angular and React, have hands-on experience with AI workflows through Microsoft Copilot Studio, and enjoy code reviews and mentoring junior engineers. Immediate joiner, open to Noida/NCR, Bengaluru, and remote roles.",
  focusAreas: [
    'REST APIs and event-driven integrations in .NET / C# on Azure',
    'API Management, OAuth2/JWT, Entra ID, and Key Vault for secure access',
    'Serverless workloads on AWS with Terraform and CDK',
    'Full-stack work with Angular and React',
    'Code reviews and mentoring junior engineers',
  ],
  location: 'India',
  availability: 'Immediate joiner · Open to Noida/NCR, Bengaluru, Remote',
  email: 'anmol.titoriya0147@gmail.com',
  phone: '+91 8449855966',
  // File name of the resume PDF placed in public/.
  resumeUrl: 'resume.pdf',
  social: {
    github: 'https://github.com/AnmolTitoriya',
    linkedin: 'https://www.linkedin.com/in/anmoltitoriya/',
  },
}

export const experience = [
  {
    company: 'Acelucid Technologies Private Limited',
    title: 'Software Engineer II (Apr 2024 – Sep 2026) · Software Engineer I (Nov 2021 – Mar 2024)',
    period: 'Nov 2021 – Sep 2026',
    points: [
      'Healthcare Support System: designed REST APIs on Azure published through API Management with OAuth2/JWT and Entra ID; built event-driven integrations with Azure Functions and Service Bus (retry policies, dead-letter handling, correlation-ID logging)',
      'Set up Application Insights dashboards and alerts for proactive production monitoring; centralised secrets in Azure Key Vault; integrated Identity Server authentication',
      'Built the Angular 18 frontend, refactored SQL Server stored procedures, built ETL pipelines, and integrated Microsoft Copilot Studio for AI-assisted workflows',
      'AWS and frontend client work: private CloudFront + S3 file sharing with Origin Access Control, CDK library upgrade to Node 24 / SDK v3, Terraform-provisioned Lambda and S3, Amazon Connect IVR flows, Angular-to-React admin panel migration',
      'Earlier projects: ASP.NET MVC inventory system for a stone and monument manufacturer, and a logistics warehouse portal',
      'Reviewed code and mentored junior engineers on .NET best practices, unit testing, and clean architecture',
    ],
    tech: [
      '.NET 6/8/10',
      'C#',
      'Azure Functions',
      'Service Bus',
      'APIM',
      'Entra ID',
      'Key Vault',
      'Application Insights',
      'Angular 18',
      'React',
      'SQL Server',
      'AWS Lambda',
      'Terraform',
      'CDK',
      'Copilot Studio',
    ],
  },
  {
    company: 'Eureka Outsourcing Solutions Private Limited',
    title: 'Customer Service Representative',
    period: 'Apr 2021 – Oct 2021',
    points: ['Managed client email communication for API requests, gathering requirements and coordinating with the technical team through to resolution'],
    tech: [],
  },
  {
    company: 'Aurum E-Serve LLP',
    title: 'Customer Support Associate',
    period: 'Jun 2019 – Mar 2021',
    points: [
      'Performed payment gateway reconciliation, matching transactions against internal records and resolving discrepancies',
      'Managed internal and client email communication, tracking requests and following up to closure',
    ],
    tech: [],
  },
]

export const education = [
  {
    degree: 'Bachelor of Computer Applications (BCA)',
    institution: 'Dewan Institute of Management Studies',
    period: '2016 – 2019',
  },
]

export const skillGroups = [
  {
    category: 'Backend',
    summary: 'Primary stack for APIs, business logic, and service architecture.',
    items: ['C#', '.NET 6/8/10', 'ASP.NET Core Web API', 'REST', 'Microservices', 'Entity Framework', 'LINQ', 'Python'],
  },
  {
    category: 'Azure',
    summary: 'Secure, observable APIs and event-driven integrations.',
    items: ['Functions', 'Service Bus', 'API Management', 'Data Factory', 'App Services', 'Blob Storage', 'Entra ID', 'Key Vault', 'Application Insights'],
  },
  {
    category: 'AWS',
    summary: 'Serverless workloads and infrastructure as code.',
    items: ['Lambda', 'S3', 'CloudFront (OAC)', 'Amazon Connect (IVR)', 'CDK', 'Terraform', 'Serverless'],
  },
  {
    category: 'Frontend',
    summary: 'Used when a project needs a UI layer, on top of the backend work.',
    items: ['Angular 18', 'React', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'Zustand'],
  },
  {
    category: 'Data',
    summary: 'Schema design, query optimisation, and pipelines.',
    items: ['SQL Server', 'Stored Procedures', 'NoSQL', 'ETL Pipelines'],
  },
  {
    category: 'DevOps',
    summary: 'Delivery and environment tooling.',
    items: ['Azure DevOps', 'CI/CD Pipelines', 'ARM Templates', 'Docker', 'Git'],
  },
  {
    category: 'Security & Patterns',
    summary: 'Auth and resilient integration design.',
    items: ['OAuth2', 'JWT', 'Identity Server', 'Event-Driven Architecture', 'CQRS', 'Retry & DLQ', 'Structured Logging'],
  },
  {
    category: 'AI',
    summary: 'AI-assisted development and conversational workflows.',
    items: ['GitHub Copilot', 'Claude Code', 'Microsoft Copilot Studio'],
  },
]

export const projects = [
  {
    title: 'Healthcare Support System',
    description:
      'An Azure-hosted healthcare platform with REST APIs behind API Management, event-driven processing on Functions and Service Bus, an Angular 18 frontend, and Copilot Studio conversational workflows.',
    role: 'Designed the APIs and integrations, observability, SQL Server optimisation, and Angular frontend; mentored junior engineers.',
    tags: ['.NET', 'Azure Functions', 'Service Bus', 'APIM', 'Entra ID', 'Angular 18'],
    note: 'Confidential client project',
    repoUrl: '',
    liveUrl: '',
  },
  {
    title: 'AWS & Frontend Client Engagements',
    description:
      'Private CloudFront + S3 file sharing with Origin Access Control, Terraform-provisioned Lambda and S3, Amazon Connect IVR flows, a shared CDK library upgrade, and an Angular-to-React admin panel migration.',
    role: 'Built and maintained the infrastructure and frontend migration work.',
    tags: ['AWS Lambda', 'CloudFront', 'Terraform', 'CDK', 'Amazon Connect', 'React'],
    note: 'Confidential client projects',
    repoUrl: '',
    liveUrl: '',
  },
  {
    title: 'Logistics Warehouse Portal',
    description:
      'A warehouse management module covering inbound/outbound stock movement, shipment tracking, and operational dashboards, with an embedded Angular real-time tracking widget.',
    role: 'Built the MVC workflows, optimised SQL Server queries, and bridged the Angular component with MVC actions.',
    tags: ['ASP.NET MVC', 'jQuery AJAX', 'Angular', 'SQL Server'],
    note: 'Confidential client project',
    repoUrl: '',
    liveUrl: '',
  },
  {
    title: 'QRinator',
    description:
      'A kraft-paper styled QR code tag generator with customizable patterns, corner marks, colors, and center marks, exportable as PNG, SVG, or image.',
    role: 'Personal project, built solo end-to-end.',
    tags: ['JavaScript', 'HTML', 'CSS'],
    repoUrl: 'https://github.com/AnmolTitoriya/QRinator',
    liveUrl: 'https://anmoltitoriya.github.io/QRinator/',
  },
]
