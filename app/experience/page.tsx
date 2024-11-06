// import React from "react";
// import type { Metadata } from "next";
// // import { ImageGrid } from "app/components/image-grid";

// export const metadata: Metadata = {
//   title: "Experience",
//   description: "My Photos",
// };

import React from "react";
import type { Metadata } from "next";
import { projects } from "./experience-data";

export const metadata: Metadata = {
  title: "Experience",
  description: "My Experience",
};

// export default function Photos() {
//   return (
//     <section>
//       <h1 className="mb-8 text-2xl font-medium tracking-tight">Photos</h1>
//       <ImageGrid
//         columns={3}
//         images={[
//           {
//             src: "/photos/photo7.png",
//             alt: "Roman columns",
//             href: "https://unsplash.com/photos/people-walking-near-building-during-daytime-dFLBDQQeffU?utm_content=creditShareLink&utm_medium=referral&utm_source=unsplash",
//           },
//           {
//             src: "/photos/photo2.jpg",
//             alt: "Big Ben",
//             href: "https://unsplash.com/photos/big-ben-london-MdJq0zFUwrw?utm_content=creditShareLink&utm_medium=referral&utm_source=unsplash",
//           },
//           {
//             src: "/photos/photo3.jpg",
//             alt: "Sacré-Cœur Basilica",
//             href: "https://unsplash.com/photos/a-view-of-the-inside-of-a-building-through-a-circular-window-Tp-3hrx88J4",
//           },
//           {
//             src: "/photos/photo4.jpg",
//             alt: "Eiffel Tower",
//             href: "https://unsplash.com/photos/the-eiffel-tower-towering-over-the-city-of-paris-OgPuPvPsHLM?utm_content=creditShareLink&utm_medium=referral&utm_source=unsplash",
//           },
//           {
//             src: "/photos/photo5.jpg",
//             alt: "Taj Mahal",
//             href: "https://unsplash.com/photos/taj-mahal-india-IPlPkWPJ2fo",
//           },
//           {
//             src: "/photos/photo6.jpg",
//             alt: "Colosseum",
//             href: "https://unsplash.com/photos/brown-concrete-building-under-blue-sky-during-daytime-3cyBR1rIJmA?utm_content=creditShareLink&utm_medium=referral&utm_source=unsplash",
//           },
//         ]}
//       />

//       <ImageGrid
//         columns={2}
//         images={[
//           { src: "/photos/photo1.jpg", alt: "Roman columns" },
//           { src: "/photos/photo2.jpg", alt: "Big Ben" },
//           { src: "/photos/photo3.jpg", alt: "Sacré-Cœur Basilica" },
//           { src: "/photos/photo4.jpg", alt: "Eiffel Tower" },
//         ]}
//       />

//       <ImageGrid
//         columns={4}
//         images={[
//           { src: "/photos/photo1.jpg", alt: "Roman columns" },
//           { src: "/photos/photo2.jpg", alt: "Big Ben" },
//           { src: "/photos/photo3.jpg", alt: "Sacré-Cœur Basilica" },
//           { src: "/photos/photo4.jpg", alt: "Eiffel Tower" },
//           { src: "/photos/photo5.jpg", alt: "Taj Mahal" },
//           { src: "/photos/photo6.jpg", alt: "Colosseum" },
//         ]}
//       />
//     </section>
//   );
// }

// export default function experience() {
//   return (
//     <section>
//       <h1 className="mb-8 text-2xl font-medium tracking-tight">Experience</h1>
//       <div className="space-y-6">
//         {projects.map((project, index) => (
//           <a
//             key={index}
//             href={project.url}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="block group hover:opacity-80 transition-opacity duration-200"
//           >
//             <div className="flex flex-col">
//               <div className="w-full flex justify-between items-baseline">
//                 <li className="text-black dark:text-white font-medium tracking-tight">
//                   {project.title}
//                 </li>
//                 <span className="text-neutral-600 dark:text-neutral-400 tabular-nums text-sm">
//                   {project.year}
//                 </span>
//               </div>
//               <span className="text-black dark:text-white font-medium tracking-tight">
//                   {project.company}
//                 </span>
//               <p className="prose prose-neutral dark:prose-invert pt-3">
//                 {project.description}
//               </p>
//             </div>
//           </a>
//         ))}
//       </div>
//     </section>
//   );
// }

export default function experience() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-medium tracking-tight">Experience</h1>
      <div className="space-y-6">
        {projects.map((project, index) => (
          <a
            key={index}
            // href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block group hover:opacity-80 transition-opacity duration-200"

            style={{
              border: '1px solid #ccc',
              padding: '16px',
              borderRadius: '8px',
              marginBottom: '20px'
            }}
          >
            <div className="flex flex-col">
              <div className="w-full flex justify-between items-baseline">
                <span className="text-black dark:text-white font-medium tracking-tight">
                  {project.title}
                </span>
                <span className="text-neutral-600 dark:text-neutral-400 tabular-nums text">
                  {project.year}
                </span>
              </div>
              <br></br>
              {/* <span className="text-white dark:text-white font-small tracking-tight">
                  {project.company}
                </span> */}
              {/* <p className="prose prose-neutral dark:prose-invert pt-3">
                {project.description}
              </p> */}
              {/* <ul className="list-disc list-inside prose prose-neutral dark:prose-invert pt-3 space-y-1">
                {project.description.map((line, i) => (
                  <li key={i}>{line}</li>
                ))}
              </ul> */}
            <div className="text-neutral-600 dark:text-neutral-300 tabular-nums text">
              {project.description.map((line, i) => (
                <p key={i}>{line}</p>
              ))}
            </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}