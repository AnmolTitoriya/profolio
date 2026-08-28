export const profile = {
  name: 'Anmol Titoriya',
  title: 'Software Engineer | .NET / C# | Azure & AWS Cloud | Angular & React',
  tagline:
    "I build backend systems and full-stack apps across E-Commerce, Healthcare, Ed-Tech, and Logistics.",
  about:
    "I've spent the last 7+ years building backend systems in .NET Core and C#, integrating with Azure and AWS, and the last 4 of those working across the full stack with Angular and React too. I like owning problems end to end: API design, database schema decisions (SQL and NoSQL), the cloud infrastructure underneath, and the UI that actually ships to users. Recent work includes multi-tenant SaaS platforms, identity and auth systems, and Python automation, including IVR flows on Amazon Connect and serverless infra provisioned with Terraform.",
  location: 'India',
  email: 'anmol.titoriya0147@gmail.com',
  phone: '+91 8449855966',
  // File name of the resume PDF placed in public/.
  resumeUrl: 'resume.pdf',
  social: {
    github: 'https://github.com/AnmolTitoriya',
    linkedin: 'https://www.linkedin.com/in/anmol-t-258828a9',
  },
}

export const experience = [
  {
    company: 'Acelucid Technologies Private Limited',
    title: 'SDE II (Software Development Engineer 2)',
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
    title: 'Software Engineer',
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

export const projects = [
  {
    title: 'SaaS Multi-Tenant Platform',
    description:
      'A multi-tenant SaaS application with centralized identity and per-tenant data isolation, built on .NET Core with Identity Server-based authentication.',
    tags: ['.NET Core', 'Identity Server', 'Azure', 'SQL Server'],
    note: 'Confidential client project',
    repoUrl: '',
    liveUrl: '',
  },
  {
    title: 'ETL / Data Integration Platform',
    description:
      'A serverless data pipeline for ingesting, transforming, and syncing data across systems, provisioned with Terraform on AWS.',
    tags: ['AWS', 'Terraform', 'Python', 'Serverless'],
    note: 'Confidential client project',
    repoUrl: '',
    liveUrl: '',
  },
  {
    title: 'Contact Center Automation (IVR)',
    description:
      'Automated IVR contact flows and call routing logic for a customer support system using Amazon Connect.',
    tags: ['Amazon Connect', 'Python', 'AWS'],
    note: 'Confidential client project',
    repoUrl: '',
    liveUrl: '',
  },
]
