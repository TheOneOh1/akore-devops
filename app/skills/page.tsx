import React from "react";
import type { Metadata } from "next";
import { skills } from "./skills-data";

export const metadata: Metadata = {
  title: "Skills",
  description: "My Skills",
};

export default function Skills() {
  return (
    <section>
      <h1 className="mb-2 text-2xl font-small tracking-tight">Skills</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {skills.map((category, index) => (
          <div key={index} className="border p-4 rounded-lg mb-2">
            <h2 className="text-l font-semibold">{category.category}</h2>
            <ul className="list-disc list-inside ml-4 mt-2 space-y">
              {category.skills.map((skill, skillIndex) => (
                <li key={skillIndex} className="text-neutral-700 dark:text-neutral-300">
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
