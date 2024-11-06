export interface Project {
  title: string;
  year: number;
  description: string;
  url: string;
}

export const projects: Project[] = [
  {
    title: "K8s Cluster IDS with SPLUNK",
    year: 2022,
    description:
      "Multiple AWS Instances spawed using EC2 in a master-slave architecture. This architecture is secured with SNORT intrusion detection system. SLUNK node is installed configured to display the dashboard for monitoring",
    url: "https://example.com/",
  },
  {
    title: "Centralized Microservices Monitoring",
    year: 2022,
    description:
      "Centralized log management with Syslog, Prometheus, Promtail, and Loki. Monitored microservices with Node Exporter and visualized metrics/logs in Grafana, secured with LDAP, SSL, and alerts.",
    url: "/projects",
  },
  {
    title: "Darkly Scanner",
    year: 2021,
    description:
      "Shell script for mass port scanning of domain list, an useful tool for pen-testers and bug bounty hunters",
    url: "https://example.com/",
  },
  {
    title: "Containerized Services",
    year: 2021,
    description:
      "Deployed containerized microservices and databases within a Docker network for efficient deployment, resource optimization, and inter-service communication, aiming for future scalability and management with SWARM or Kubernetes.",
    url: "/projects",
  },
  {
    title: "Public Deployments",
    year: 2021,
    description:
      "Led system architecture and migration for CDAC's ACTS Website and PMS, ensuring smooth public deployments. Implemented Grafana in a DMZ for live internal network monitoring.",
    url: "/projects",
  },
];
