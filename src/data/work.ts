export interface Project {
  title: string;
  year: string;
  description: string;
  tags: string[];
  liveUrl?: string;
  repoUrl?: string;
}

export const projects: Project[] = [
  {
    title: "MCB Bank KPI Dashboard",
    year: "2025–2026",
    description:
      "Interactive Power BI dashboard tracking branch performance, loan portfolio, and customer transactions — cut manual reporting time by 20%.",
    tags: ["Power BI", "DAX", "KPI Reporting"],
  },
  {
    title: "Freelance Client Analytics",
    year: "2023–2025",
    description:
      "End-to-end data analysis for international Upwork clients, from raw data to Power BI dashboards that surfaced trends non-technical stakeholders could act on.",
    tags: ["Power BI", "Data Modeling", "Client Communication"],
  },
  {
    title: "Data Cleaning & Transformation Pipeline",
    year: "2023–2025",
    description:
      "Cleaned, transformed, and modeled client datasets in Python (Pandas) to keep client-facing reports accurate and reliable.",
    tags: ["Python", "Pandas", "Data Quality"],
  },
  {
    title: "CRM Lead Database Management",
    year: "2019–2022",
    description:
      "Sourced and qualified leads for international clients, maintaining clean, accurate CRM records to support downstream sales and marketing decisions.",
    tags: ["CRM", "Data Entry", "Lead Generation"],
  },
];

// Add `liveUrl` (e.g. a published Power BI report link) or `repoUrl` to any
// project above once you have a public link to share — the card only shows
// the buttons for links you actually provide.
