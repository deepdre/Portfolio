import { Canvas } from "@react-three/fiber";
import { PerspectiveCamera } from "@react-three/drei";
import HackerRoom from "../components/HackerRoom";
import { Suspense } from "react";
import CanvasLoader from "../components/CanvasLoader";
import { useMediaQuery } from "react-responsive";
import { calculateSizes } from "../constants";
import { useEffect } from "react";

const projects = [
  {
    title: "Crypto Tracker",
    description:
      "A real-time cryptocurrency tracking application built with React. It fetches and displays live data for hundreds of cryptocurrencies, allowing users to monitor the market.",
    tags: ["React", "API", "Tailwind CSS"],
    link: "https://lambent-basbousa-02a910.netlify.app/", // Add your link here
  },
  {
    title: "Emotion Recognition Mailer",
    description:
      "An innovative web app using TensorFlow.js to detect facial emotions via webcam. It provides a safe space for users to send an anonymous email about their feelings.",
    tags: ["JavaScript", "TensorFlow.js", "AI/ML"],
    link: "https://face-web-app.netlify.app/", // Add your link here
  },
  {
    title: "Bouncer Company Website",
    description:
      "A professional and responsive website developed for a client in the security industry. Built with React to ensure a modern, fast, and scalable user experience.",
    tags: ["React", "Client Project", "Responsive Design"],
    link: "https://singhbouncersecurityservice.com/", // Add your link here
  },
];
function Hero() {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ maxWidth: 1024, minWidth: 768 });
  const isSmalll = useMediaQuery({ maxWidth: 440 });

  const sizes = calculateSizes(isSmalll, isMobile, isTablet);
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
    return () => {
      document.documentElement.style.scrollBehavior = "auto";
    };
  }, []);
  return (
    <>
      <section className="min-h-screen w-full flex flex-col relative">
        <div className="w-full mx-auto flex flex-col sm:mt-36 mt-36 c-space gap-3">
          <p className="sm:text-3xl text-2xl font-medium text-white text-center font-generalsans">
            Hi I'm Deep Sagar <span className="waving-hand">👋</span>
          </p>
          <p className="hero_tag text-gray_gradient">
            Building Products & Brands
          </p>
        </div>

        <div className="w-full h-full absolute inset-0">
          {/* <Leva /> */}
          <Canvas className="w-full h-full">
            <Suspense fallback={<CanvasLoader />}>
              <PerspectiveCamera makeDefault position={[0, 0, 30]} />
              {/***used leva controls for setting controls here */}
              <HackerRoom
                scale={sizes.deskScale}
                position={sizes.deskPosition}
                rotation={[0, 0, 0]}
              />

              <ambientLight intensity={1} />
              <directionalLight intensity={5} position={[10, 10, 10]} />
            </Suspense>
          </Canvas>
        </div>
      </section>
      <section id="about" className="w-full bg-black py-20 px-3 sm:px-10">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-12 font-generalsans">
            My Projects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-neutral-900 p-6 rounded-lg border border-neutral-800 flex flex-col hover:border-neutral-700 transition-colors"
              >
                <h3 className="text-2xl font-semibold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-neutral-400 mb-4 flex-grow">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-neutral-800 text-neutral-300 text-xs font-medium px-2.5 py-0.5 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white font-medium hover:underline mt-auto"
                >
                  View Project &rarr;
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer
        id="contact"
        className="w-full bg-black py-20 px-5 sm:px-10 border-t border-neutral-800"
      >
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-4 font-generalsans">
            Get In Touch
          </h2>
          <p className="text-neutral-400 mb-8 max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or
            opportunities to be part of your visions. Feel free to reach out.
          </p>
          <a
            href="mailto:deepdre223@gmail.com"
            className="inline-block bg-white text-black font-bold py-3 px-6 rounded-lg hover:bg-neutral-200 transition-colors"
          >
            Say Hello
          </a>
          <div className="flex justify-center gap-6 mt-12">
            <a
              href="https://www.linkedin.com/in/deep-sagar-17b5b520a/"
              className="text-neutral-400 hover:text-white transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/deepdre"
              className="text-neutral-400 hover:text-white transition-colors"
            >
              GitHub
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Hero;
