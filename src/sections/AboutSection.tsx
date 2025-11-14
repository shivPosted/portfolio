import Card from "../components/Card";
import SectionHeader from "../components/SectionHeader";
import BookImg from "../assets/images/book-cover.png";
import StaticMapImg from "../assets/images/jaipur-map.png";
import MyAvatarImg from "../assets/images/my-avatar.jpg";
import CardHeader from "../components/CardHeader";
import Skills from "../components/Skills";

const hobbies = [
  {
    name: "Gaming",
    icon: "🎮",
    left: "5%",
    top: "5%",
  },
  {
    name: "Music",
    icon: "🎧",
    left: "50%",
    top: "5%",
  },
  {
    name: "Reading",
    icon: "📖",
    left: "35%",
    top: "40%",
  },
  {
    name: "Fitness",
    icon: "💪",
    left: "10%",
    top: "35%",
  },
  {
    name: "Riding",
    icon: "🚴",
    left: "70%",
    top: "45%",
  },
  {
    name: "Anime",
    icon: "🍿",
    left: "5%",
    top: "65%",
  },
  {
    name: "Photography",
    icon: "📸",
    left: "45%",
    top: "70%",
  },
];

function AboutSection() {
  return (
    <div className="my-32">
      <div className="container">
        <SectionHeader
          eyebrow="About Me"
          heading="A Glimpse into My World"
          description="Learn more about who I am, what I do and what inspires me."
        />
        <div className="mt-20 flex flex-col gap-8">
          <Card className="flex-col items-center h-[320px]">
            <CardHeader
              title="My Reads"
              description="Explore the books shaping my perspectives."
            />
            <figure className="w-40 mt-8">
              <img
                src={BookImg}
                alt="Atomic habits book cover"
                className="w-full"
              />
            </figure>
          </Card>
          <Card className="flex-col items-center h-[320px]">
            <CardHeader
              title="My Toolbox"
              description="
                Explore the technologies and tools that I use to create
                exceptional digital experience.
              "
            />
            <Skills innerClassNameWrapper="mt-1.5" />
            <Skills innerClassNameWrapper="mt-1.5 -translate-x-1/2" />
          </Card>
          <Card className="flex-col items-center h-[320px]">
            <CardHeader
              title="Beyond the Code"
              description="Explore my interests and hobbies beyond the digital realm"
            />
            <div className="relative size-full flex-1">
              {hobbies.map((hobby) => (
                <div
                  key={hobby.name}
                  className="inline-flex gap-3 items-center rounded-full bg-gradient-to-r from-emerald-300 to-sky-400  py-1.5 px-6 absolute"
                  style={{
                    left: hobby.left,
                    top: hobby.top,
                  }}
                >
                  <span className="text-gray-950 font-medium">
                    {hobby.name}
                  </span>
                  <span>{hobby.icon}</span>
                </div>
              ))}
            </div>
          </Card>
          <Card className="flex-none h-[320px] relative">
            <figure className="size-full object-cover object-top-left">
              <img
                src={StaticMapImg}
                alt="static map of location"
                className="w-full"
              />
            </figure>
            <figure className="absolute flex justify-center items-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-20 rounded-full  bg-gradient-to-r from-emerald-300 to-sky-400 ">
              <img
                src={MyAvatarImg}
                alt="Me emoji image"
                className="w-[90%] rounded-full "
              />
            </figure>
          </Card>
        </div>
      </div>
    </div>
  );
}
export default AboutSection;
