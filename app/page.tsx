import Image from "next/image";
import { socialLinks } from "./config";

export default function Page() {
  return (
    <section>
      <a  target="_blank">
        <Image
          src="/static-pages/out/profile.png"
          alt="Profile photo"
          className="rounded-full bg-gray-100 block lg:mt-5 mt-0 lg:mb-5 mb-10 mx-auto sm:float-right sm:ml-5 sm:mb-5 grayscale hover:grayscale-0"
          unoptimized
          width={160}
          height={160}
          priority
        />
      </a>

      <h1 className="mb-8 text-2xl font-medium tracking-tight">
        DevOps Engineer
      </h1>

      <div className="prose prose-neutral dark:prose-invert">
        <p>
        Hi! My online presense is under the name TheOneOh1. I am a DevOps engineer with slight intrest in Cyber Security.
        </p>
        <p>
        I have expertise in IT infrastructure, network security, and deployment operations. I am proficient in CI/CD pipelines, containerization, and cloud services as well.{" "}
          {/* <a
            target="_blank"
            href="https://github.com/1msirius/Nextfolio?tab=readme-ov-file#features"
          >
            more
          </a> */}
        </p>
        <p>
        I have total 4 years and 8 months of experience in the corporate world.

        </p>
        <p>
        After my Post Graduate Diploma in IT Infrastructure, Systems and Security, I joined C-DAC which is a Governement affiliated organisation, as a DevOps Engineer in 2022 and since I've been on my DevOps journey.
        </p>
      </div>
    </section>
  );
}
