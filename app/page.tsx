import Portfolio from '@/components/Portfolio'

export default function Home() {
  return <Portfolio />
}



// import React from 'react';
// import { Github, Linkedin, Mail, Terminal } from 'lucide-react';

// const Portfolio = () => {
//   return (
//     <div className="min-h-screen bg-gray-900 text-gray-100">
//       {/* Header/Hero Section */}
//       <header className="bg-gray-800 border-b border-gray-700">
//         <div className="max-w-4xl mx-auto px-4 py-16">
//           <h1 className="text-4xl font-bold text-gray-100">Anand Kore</h1>
//           <p className="mt-2 text-xl text-gray-400">DevOps Engineer</p>
//           <div className="mt-4 flex space-x-4">
//             <a href="mailto:anandkore1@gmail.com" className="text-gray-400 hover:text-gray-100 transition-colors">
//               <Mail className="w-5 h-5" />
//             </a>
//             <a href="https://github.com/" className="text-gray-400 hover:text-gray-100 transition-colors">
//               <Github className="w-5 h-5" />
//             </a>
//             <a href="https://linkedin.com/" className="text-gray-400 hover:text-gray-100 transition-colors">
//               <Linkedin className="w-5 h-5" />
//             </a>
//           </div>
//         </div>
//       </header>

//       {/* Main Content */}
//       <main className="max-w-4xl mx-auto px-4 py-12">
//         {/* About Section */}
//         <section className="mb-12">
//           <h2 className="text-2xl font-bold text-gray-100 mb-4">About</h2>
//           <p className="text-gray-300">
//             Result-driven DevOps Engineer with expertise in IT infrastructure, network security, and deployment operations. 
//             Proficient in CI/CD pipelines, containerization, and cloud services.
//           </p>
//         </section>

//         {/* Skills Section */}
//         <section className="mb-12">
//           <h2 className="text-2xl font-bold text-gray-100 mb-4">Technical Skills</h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             <div className="bg-gray-800 p-4 rounded-lg border border-gray-700">
//               <h3 className="font-semibold mb-2 text-gray-100">CI/CD</h3>
//               <p className="text-gray-300">GitLab CI/CD, GitHub Actions, Jenkins, BitBucket</p>
//             </div>
//             <div className="bg-gray-800 p-4 rounded-lg border border-gray-700">
//               <h3 className="font-semibold mb-2 text-gray-100">Containerization</h3>
//               <p className="text-gray-300">Docker, Kubernetes, Docker Swarm</p>
//             </div>
//             <div className="bg-gray-800 p-4 rounded-lg border border-gray-700">
//               <h3 className="font-semibold mb-2 text-gray-100">Monitoring</h3>
//               <p className="text-gray-300">Prometheus, Grafana, Loki, SPLUNK, Nagios</p>
//             </div>
//             <div className="bg-gray-800 p-4 rounded-lg border border-gray-700">
//               <h3 className="font-semibold mb-2 text-gray-100">Scritping</h3>
//               <p className="text-gray-300">Bash, YAML, Powershell, Python</p>
//             </div>
//             <div className="bg-gray-800 p-4 rounded-lg border border-gray-700">
//               <h3 className="font-semibold mb-2 text-gray-100">Web Servers</h3>
//               <p className="text-gray-300">Nginx, Apache, IIS, TomCat</p>
//             </div>
//             <div className="bg-gray-800 p-4 rounded-lg border border-gray-700">
//               <h3 className="font-semibold mb-2 text-gray-100">SAST</h3>
//               <p className="text-gray-300">SonarQube</p>
//             </div>
//           </div>
//         </section>

//         {/* Projects Section */}
//         <section className="mb-12">
//           <h2 className="text-2xl font-bold text-gray-100 mb-4">Featured Projects</h2>
//           <div className="space-y-6">
//             <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
//               <div className="flex items-center mb-2">
//                 <Terminal className="w-5 h-5 mr-2 text-blue-400" />
//                 <h3 className="font-semibold text-gray-100">K8s Cluster IDS with SPLUNK</h3>
//               </div>
//               <p className="text-gray-300">
//                 <li>Multiple AWS Instances spawed using EC2 in a master-slave architecture</li>
//                 <li>This architecture is secured with SNORT intrusion detection system</li>
//                 <li>SLUNK node is installed configured to display the dashboard for monitoring</li>
//               </p>
//             </div>
//             <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
//               <div className="flex items-center mb-2">
//                 <Terminal className="w-5 h-5 mr-2 text-blue-400" />
//                 <h3 className="font-semibold text-gray-100">Centralized Microservices Monitoring</h3>
//               </div>
//               <p className="text-gray-300">
//                 A centralized Syslog server for microservices monitoring using Prometheus, 
//                 Loki and Promtail with visualized dashboards in Grafana.
//               </p>
//             </div>
//           </div>
//         </section>

//         {/* Experience Section */}
//         <section>
//           <h2 className="text-2xl font-bold text-gray-100 mb-4">Experience</h2>
//           <div className="space-y-6">
//             <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
//               <h3 className="font-semibold text-gray-100">Project Engineer</h3>
//               <p className="text-gray-400">C-DAC: Centre for Development of Advanced Computing</p>
//               <p className="text-gray-400">Nov 2022 - Present</p>
//             </div>
//             <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
//               <h3 className="font-semibold text-gray-100">CSA and SME</h3>
//               <p className="text-gray-400">Amazon</p>
//               <p className="text-gray-400">Jul 2018 - Mar 2021</p>
//             </div>
//           </div>
//         </section>
//       </main>
//     </div>
//   );
// };

// export default Portfolio;