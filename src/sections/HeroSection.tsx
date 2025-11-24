import Arrowdown from "../assets/icons/arrow-down";
import memojiLaptop from "../assets/images/memoji-computer.png";
import GrainOverlay from "../components/GrainOverlay";
import HeroOrbit from "../components/HeroOrbit";
import RingOverlay from "../components/RingOverlay";

function HeroSection() {
  return (
    <section
      id="hero-section"
      className="container lg:max-w-[80%] py-32 md:py-40 lg:py-50 flex flex-col gap-8 items-center justify-center mx-auto overflow-hidden z-100"
    >
      <div className="flex flex-col items-center">
        <figure className="w-[100px] h-[100px]">
          <img
            className="w-full"
            src={memojiLaptop}
            alt="A person peeking behind from laptop"
          />
        </figure>
        <div className="inline-flex items-center gap-4 bg-gray-950 border border-gray-800 rounded-lg px-4 py-1.5">
          <div className="size-2.5 rounded-full bg-green-500 relative">
            <div className="size-2.5 rounded-full bg-green-500 absolute animate-ping"></div>
          </div>
          <span className="text-sm font-medium">
            Available for new projects
          </span>
        </div>
      </div>
      <div className="text-center md:max-w-lg md:mx-auto">
        <h1 className="font-calistogo capitalize tracking-wide text-3xl font-medium px-2 md:text-5xl">
          Building exceptional user experience
        </h1>
        <p className="mt-4 text-white/60 text-pretty px-2 md:text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat animi
          consectetur velit reprehenderit, cupiditate ea.
        </p>
      </div>
      <div className="flex flex-col md:flex-row items-center gap-4">
        <a href="https://github.com/shivPosted" className="font-semibold z-100">
          <button className="cursor-pointer inline-flex items-center gap-2 border rounded-xl border-white/15  px-6 h-12">
            Explore my work
            <Arrowdown size="size-4" />
          </button>
        </a>
        <a href="https://x.com/shiv_posted" className="font-semibold z-100">
          <button className="cursor-pointer inline-flex items-center gap-2 border rounded-xl border-white bg-white text-gray-900 px-6 h-12">
            <span>👋</span>
            Let's Connect
          </button>
        </a>
      </div>
      <div className="size-inherit absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)] overflow-clip">
        <GrainOverlay />
        <RingOverlay size="sm" />
        <RingOverlay size="md" />
        <RingOverlay size="lg" />
        <RingOverlay size="xl" />
        <RingOverlay size="2xl" />
        <RingOverlay size="3xl" />
        <HeroOrbit />
      </div>
    </section>
  );
}
export default HeroSection;
