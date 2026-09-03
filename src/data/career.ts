export interface CareerEntry {
  period: string;
  role: string;
  org: string;
  description: string;
}

export const career: CareerEntry[] = [
  {
    period: "May 2026 — Present",
    role: "Telemarketing Representative",
    org: "Remote Shifts",
    description:
      "Manage high-volume outbound calls across multiple time zones using cloud-based CRM tools to track lead status, conversions, and daily KPIs, alongside social media scheduling and customer inbox support.",
  },
  {
    period: "Nov 2025 — Mar 2026",
    role: "Data Analyst",
    org: "MCB Bank Limited",
    description:
      "Built and maintained interactive Power BI dashboards tracking branch performance, loan portfolio, and customer transaction metrics — cutting manual reporting time by 20%.",
  },
  {
    period: "Feb 2023 — Nov 2025",
    role: "Data Analyst",
    org: "Upwork",
    description:
      "Delivered end-to-end data analysis for international freelance clients: cleaning and modeling datasets in Python (Pandas) and designing Power BI dashboards that turned complex data into clear, actionable insight.",
  },
  {
    period: "Jan 2019 — Oct 2022",
    role: "Lead Generation Specialist",
    org: "Upwork",
    description:
      "Sourced and qualified leads for international clients, maintaining accurate CRM records and working directly with stakeholders to clarify data requirements.",
  },
];
