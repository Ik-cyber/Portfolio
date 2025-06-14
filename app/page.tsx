import RotatingSphere from "@/components/RotatingSphere";
import Image from "next/image";
import CodeTerminal from "@/components/RotatingSphere";

export default function Home() {
  return (
    <div className="space-y-24 pt-16 md:pt-32">
      <CodeTerminal />
      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center md:items-start md:space-x-8 space-y-6 md:space-y-0">
        {/* Image Placeholder */}

        <div className="w-40 h-40 md:w-56 md:h-56 rounded-xl overflow-hidden border-2 border-neutral-800 flex-shrink-0">
          <Image
            src="/face.png"
            alt="Terminal Num"
            width={224}
            height={224}
            className="object-cover w-full h-full"
          />
        </div>
        {/* Text Content */}
        <div className="space-y-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white">
            Hi, I’m IK.
          </h1>
          <p className="text-lg text-neutral-400 max-w-xl">
            I build simple, fast, and accessible web experiences. Currently
            exploring the intersection of design and development.
          </p>
        </div>
      </section>

      {/* About Section */}

      <section className="mt-16 space-y-4">
        <h2 className="text-2xl font-semibold mb-2">About Me</h2>
        <p className="text-neutral-400">
          I'm a backend-leaning developer who loves writing in Go (my favorite)
          and Next.js with TypeScript. I enjoy building scalable systems, clean
          APIs, and occasionally tinkering with C++ and Node.js.
        </p>
        <p className="text-neutral-400">
          Outside coding, I love customizing and ricing my Linux setup, and I
          work exclusively in Neovim—it's where I feel most at home.
        </p>
        <p className="text-neutral-400">
          I'm always excited to build, break, and learn new things.
        </p>
      </section>
      {/* Projects Section */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-white">Projects</h2>
        <ul className="space-y-2">
          <li>
            <a href="#" className="text-blue-400 hover:underline">
              🔗 Project One – A simple portfolio site built with Next.js
            </a>
          </li>
          <li>
            <a href="#" className="text-blue-400 hover:underline">
              🔗 Project Two – A URL shortener built with Go and React
            </a>
          </li>
          <li>
            <a href="#" className="text-blue-400 hover:underline">
              🔗 Project Three – A minimal markdown-based blog
            </a>
          </li>
        </ul>
      </section>

      {/* Contact Section */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-white">Contact</h2>
        <p className="text-neutral-400 max-w-xl">
          I’m always open to new opportunities, collaborations, or just a chat.
          Feel free to reach out.
        </p>
        <a
          href="mailto:yourname@example.com"
          className="inline-block mt-2 text-blue-400 hover:underline"
        >
          📬 yourname@example.com
        </a>
      </section>
    </div>
  );
}
