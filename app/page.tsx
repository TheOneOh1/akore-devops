import Image from "next/image";
import { socialLinks } from "./config";

export default function Page() {
  return (
    <section>
      <a  target="_blank">
        <Image
          src="/static-pages/profile.png"
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
        {/* Hi! My online presense is under the name TheOneOh1. I am a DevOps engineer with slight intrest in Cyber Security. */}
        Hey there! I'm TheOneOh1, a DevOps Engineer who believes in automating everything except my coffee breaks! ☕
        </p>
        <p>
        With 4+ years in the corporate tech world, I’ve had the privilege of diving deep into the heart of IT infrastructure, network security 🛡️, and deployment operations. I’m passionate about crafting robust CI/CD pipelines 🚀, scaling containerized environments 🐳, and optimizing cloud services ☁️ for top performance. 🚀
          {/* <a
            target="_blank"
            href="https://github.com/1msirius/Nextfolio?tab=readme-ov-file#features"
          >
            more
          </a> */}
        </p>
        <p>
        My journey began with a Post Graduate Diploma in IT Infrastructure, Systems and Security, and I've been breaking and fixing things (mostly fixing!) ever since. Currently crafting DevOps magic at C-DAC (Centre for Development of Advanced Computing) since 2022

        </p>
        <p>
        Think of me as the bridge between "it works on my machine" and "it works everywhere!" 🌉
        </p>
      </div>
    </section>
  );
}
