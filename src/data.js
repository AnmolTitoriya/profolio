export const profile = {
  name: 'Anmol Titoriya',
  title: 'Software Engineer | .NET / C# | Azure & AWS Cloud | Angular & React',
  tagline:
    'Building scalable, cloud-native applications across logistics, e-commerce, healthcare, and edtech domains.',
  about:
    "7+ years of experience as a software engineer specializing in .NET Core, C#, and cloud integration (Azure & AWS), with 4 years of full-stack experience in Angular and React. Comfortable across the stack — backend API design, database (SQL & NoSQL), cloud infrastructure, and frontend delivery — with hands-on work in SaaS multi-tenant architectures, identity/auth systems, and Python-based automation (including Amazon Connect/IVR and Terraform-provisioned serverless infra).",
  location: 'India',
  email: 'anmol.titoriya0147@gmail.com',
  phone: '+91 8449855966',
  // Place your resume PDF at public/resume.pdf for this link to work.
  resumeUrl: '/resume.pdf',
  social: {
    github: 'https://github.com/AnmolTitoriya',
    linkedin: 'https://www.linkedin.com/in/anmol-t-258828a9',
  },
}

export const experience = [
  {
    company: 'Acelucid Technologies Private Limited',
    title: 'Software Engineer',
    period: 'Nov 2021 – Present',
    points: [
      'Delivered projects across logistics, e-commerce, healthcare, and edtech domains',
      'Built SaaS-based, multi-tenant applications with Identity Server-based auth',
    ],
    tech: [
      '.NET',
      'ADO.NET',
      'Entity Framework',
      'LINQ',
      'C#',
      'MS SQL',
      'Python',
      'TypeScript',
      'Angular',
      'React',
      'MVC',
      'Azure',
      'AWS',
    ],
  },
  {
    company: 'Eureka Outsourcing Solutions Private Limited',
    title: 'API Developer',
    period: 'Apr 2021 – Oct 2021',
    points: ['Built APIs for a brokerage firm client'],
    tech: ['.NET', 'Entity Framework', 'LINQ'],
  },
  {
    company: 'Aurum E-Serve LLP',
    title: 'Software Engineer',
    period: 'Jun 2019 – Mar 2021',
    points: ['Worked on payment gateway integration', 'Built an internal IT ticket generation tool'],
    tech: ['.NET', 'C#'],
  },
]

export const skillGroups = [
  {
    category: 'Backend',
    items: ['.NET Core', '.NET Framework', 'ASP.NET MVC', 'C#', 'ADO.NET', 'Entity Framework', 'LINQ', 'Web APIs', 'Microservices'],
  },
  {
    category: 'Frontend',
    items: ['Angular', 'React', 'TypeScript', 'JavaScript'],
  },
  {
    category: 'Cloud & DevOps',
    items: ['Azure', 'AWS', 'Terraform', 'Serverless Architecture'],
  },
  {
    category: 'Databases',
    items: ['MS SQL Server', 'NoSQL'],
  },
  {
    category: 'Other',
    items: ['Python', 'Node.js', 'Amazon Connect (IVR)', 'Identity Server', 'Multi-tenant SaaS Architecture'],
  },
]

// Placeholder highlights — replace with real project details you're free to share.
export const projects = [
  {
    title: 'SaaS Multi-Tenant Platform',
    description:
      'A multi-tenant SaaS application with centralized identity and per-tenant data isolation, built on .NET Core with Identity Server-based authentication.',
    tags: ['.NET Core', 'Identity Server', 'Azure', 'SQL Server'],
    repoUrl: '',
    liveUrl: '',
  },
  {
    title: 'ETL / Data Integration Platform',
    description:
      'A serverless data pipeline for ingesting, transforming, and syncing data across systems, provisioned with Terraform on AWS.',
    tags: ['AWS', 'Terraform', 'Python', 'Serverless'],
    repoUrl: '',
    liveUrl: '',
  },
  {
    title: 'Contact Center Automation (IVR)',
    description:
      'Automated IVR contact flows and call routing logic for a customer support system using Amazon Connect.',
    tags: ['Amazon Connect', 'Python', 'AWS'],
    repoUrl: '',
    liveUrl: '',
  },
]
