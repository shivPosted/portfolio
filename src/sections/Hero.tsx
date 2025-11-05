import Arrowdown from "../assets/icons/arrow-down";
import memojiLaptop from "../assets/images/memoji-computer.png";
import GrainOverlay from "../components/GrainOverlay";
import HeroOrbit from "../components/HeroOrbit";
import RingOverlay from "../components/RingOverlay";

function Hero() {
  return (
    <div className="container py-32 md:py-40 lg:py-50 flex flex-col gap-8 items-center justify-center mx-auto overflow-x-clip z-100">
      <div className="flex flex-col items-center">
        <figure className="w-[100px] h-[100px]">
          <img
            className="w-full"
            src={memojiLaptop}
            alt="A person peeking behind from laptop"
          />
        </figure>
        <div className="inline-flex items-center gap-4 bg-gray-950 border border-gray-800 rounded-lg px-4 py-1.5">
          <div className="size-2.5 rounded-full bg-green-500"></div>
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
        <button className="inline-flex items-center gap-2 border rounded-xl border-white/15  px-6 h-12">
          <span className="font-semibold">Explore my work</span>
          <Arrowdown size="size-4" />
        </button>
        <button className="inline-flex items-center gap-2 border rounded-xl border-white bg-white text-gray-900 px-6 h-12">
          <span>👋</span>
          <span className="font-semibold">Let's Connect</span>
        </button>
      </div>
      <div className="size-inherit absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)] overflow-clip">
        <GrainOverlay />
        <RingOverlay size="sm" />
        <RingOverlay size="md" />
        <RingOverlay size="lg" />
        <RingOverlay size="xl" />
        <RingOverlay size="2xl" />
        <RingOverlay size="3xl" />
      </div>
      <HeroOrbit />
    </div>
  );
}
export default Hero;
